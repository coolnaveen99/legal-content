#!/usr/bin/env node
import { join } from 'node:path'
import Ajv2020 from 'ajv/dist/2020.js'
import addFormats from 'ajv-formats'
import {
  REPO_ROOT,
  SCHEMA_FILES,
  ID_PATTERN,
  KNOWN_STATUSES,
  collectEntities,
  extractRefs,
  loadJson,
} from './lib.mjs'

const ajv = new Ajv2020({ allErrors: true, strict: false })
addFormats(ajv)

function compile(rel) {
  const schema = loadJson(join(REPO_ROOT, rel))
  return ajv.compile(schema)
}

const validators = {
  envelope: compile(SCHEMA_FILES.envelope),
  manifest: compile(SCHEMA_FILES.manifest),
}
for (const [type, file] of Object.entries(SCHEMA_FILES)) {
  if (type === 'envelope' || type === 'manifest') continue
  validators[type] = compile(file)
}

const errors = []
const warnings = []
const entities = collectEntities()
const byId = new Map()

for (const entity of entities) {
  const { data, relPath, entityType } = entity
  if (!data || typeof data !== 'object') {
    errors.push(`${relPath}: file is not a JSON object`)
    continue
  }
  if (!validators.envelope(data)) {
    errors.push(`${relPath}: envelope invalid — ${ajv.errorsText(validators.envelope.errors)}`)
  }
  const typeValidator = validators[data.entityType] || validators[entityType]
  if (typeValidator && !typeValidator(data)) {
    errors.push(`${relPath}: ${data.entityType || entityType} schema invalid — ${ajv.errorsText(typeValidator.errors)}`)
  }
  if (data.entityType && data.entityType !== entityType) {
    errors.push(`${relPath}: entityType "${data.entityType}" does not match directory type "${entityType}"`)
  }
  if (typeof data.id !== 'string' || !ID_PATTERN.test(data.id)) {
    errors.push(`${relPath}: invalid canonical id "${data.id}"`)
  }
  if (data.status && !KNOWN_STATUSES.has(data.status)) {
    errors.push(`${relPath}: unknown status "${data.status}"`)
  }
  if (data.id) {
    if (byId.has(data.id)) {
      errors.push(`duplicate id ${data.id}: ${byId.get(data.id).relPath} and ${relPath}`)
    } else {
      byId.set(data.id, entity)
    }
  }
  if (['published', 'approved', 'verified'].includes(data.status)) {
    const hasSources = Array.isArray(data.sources) && data.sources.length > 0
    const sourceHasUrl = data.entityType === 'source' && data.content && data.content.url
    if (!hasSources && !sourceHasUrl) {
      errors.push(`${relPath}: ${data.status} entity is missing sources`)
    }
  }
}

for (const entity of entities) {
  for (const ref of extractRefs(entity)) {
    if (!byId.has(ref)) {
      const severity = entity.data.status === 'published' ? errors : warnings
      severity.push(`${entity.relPath}: unresolved reference ${ref}`)
    }
  }
}

const manifest = loadJson(join(REPO_ROOT, 'manifests/content-manifest.json'))
if (!validators.manifest(manifest)) {
  errors.push(`manifests/content-manifest.json invalid — ${ajv.errorsText(validators.manifest.errors)}`)
}
If (false) {}
