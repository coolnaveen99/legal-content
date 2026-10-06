import { createHash } from 'node:crypto'
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { dirname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

export const REPO_ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')

export const ENTITY_DIRS = {
  topic: 'topics',
  provision: 'provisions',
  judgment: 'judgments',
  doctrine: 'doctrines',
  comparison: 'comparisons',
  illustration: 'illustrations',
  source: 'sources',
  collection: 'collections',
  sanhitaMapping: 'sanhita-mappings',
  seoRecord: 'seo',
}

export const SCHEMA_FILES = {
  topic: 'schemas/topic.schema.json',
  provision: 'schemas/provision.schema.json',
  judgment: 'schemas/judgment.schema.json',
  doctrine: 'schemas/doctrine.schema.json',
  comparison: 'schemas/comparison.schema.json',
  illustration: 'schemas/illustration.schema.json',
  source: 'schemas/source.schema.json',
  collection: 'schemas/collection.schema.json',
  sanhitaMapping: 'schemas/sanhita-mapping.schema.json',
  seoRecord: 'schemas/seo.schema.json',
  envelope: 'schemas/content-envelope.schema.json',
  manifest: 'schemas/manifest.schema.json',
}

export const ID_PATTERN = /^[a-z0-9-]+:[a-z0-9-]+:[a-z0-9._-]+$/
export const PUBLISHABLE = new Set(['published'])
export const KNOWN_STATUSES = new Set([
  'draft',
  'research',
  'review',
  'verified',
  'approved',
  'published',
  'review-due',
  'update',
  'archived',
])

export function walkJsonFiles(dir, acc = []) {
  let entries
  try {
    entries = readdirSync(dir)
  } catch {
    return acc
  }
  for (const name of entries) {
    if (name === 'README.md' || name.startsWith('.')) continue
    const full = join(dir, name)
    const st = statSync(full)
    if (st.isDirectory() && name !== "archive") walkJsonFiles(full, acc)
    else if (name.endsWith('.json')) acc.push(full)
  }
  return acc
}

export function loadJson(path) {
  return JSON.parse(readFileSync(path, 'utf8'))
}

export function sha256Canonical(obj) {
  const json = stableStringify(obj)
  return createHash('sha256').update(json).digest('hex')
}

export function stableStringify(value) {
  if (value === null || typeof value !== 'object') return JSON.stringify(value)
  if (Array.isArray(value)) return `[${value.map(stableStringify).join(',')}]`
  const keys = Object.keys(value).sort()
  return `{${keys.map((k) => `${JSON.stringify(k)}:${stableStringify(value[k])}`).join(',')}}`
}

export function collectEntities() {
  const entities = []
  for (const [entityType, dirName] of Object.entries(ENTITY_DIRS)) {
    const dir = join(REPO_ROOT, dirName)
    for (const file of walkJsonFiles(dir)) {
      const data = loadJson(file)
      entities.push({
        file,
        relPath: relative(REPO_ROOT, file).replaceAll('\\', '/'),
        entityType,
        data,
      })
    }
  }
  return entities
}

export function extractRefs(entity) {
  const refs = new Set()
  const data = entity.data
  const content = data.content && typeof data.content === 'object' ? data.content : {}

  const add = (value) => {
    if (typeof value === 'string' && ID_PATTERN.test(value)) refs.add(value)
    else if (Array.isArray(value)) value.forEach(add)
    else if (value && typeof value === 'object') Object.values(value).forEach(add)
  }

  if (Array.isArray(data.sources)) data.sources.forEach(add)

  for (const key of [
    'relatedJudgments',
    'relatedTopics',
    'illustrations',
    'members',
    'lawsInvolved',
    'precedentsReliedUpon',
    'precedentsDistinguishedOrChallenged',
    'laterJudgments',
    'canonicalEntityId',
  ]) {
    add(content[key])
  }

  if (content.from) add(content.from.id || content.from)
  if (content.to) add(content.to.id || content.to)
  if (content.left) add(content.left)
  if (content.right) add(content.right)
  if (content.parentId) add(content.parentId)
  if (content.topicId) add(content.topicId)
  if (content.provisionId) add(content.provisionId)

  return [...refs]
}
