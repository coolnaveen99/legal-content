import assert from 'node:assert/strict'
import { test } from 'node:test'
import { collectEntities, ID_PATTERN, sha256Canonical } from '../scripts/lib.mjs'

test('pilot corpus has one entity of each primary type', () => {
  const entities = collectEntities()
  const types = new Set(entities.map((e) => e.data.entityType))
  for (const required of [
    'topic',
    'provision',
    'judgment',
    'doctrine',
    'comparison',
    'illustration',
    'source',
    'collection',
    'sanhitaMapping',
    'seoRecord',
  ]) {
    assert.ok(types.has(required), `missing entity type ${required}`)
  }
})

test('canonical IDs are unique and well-formed', () => {
  const entities = collectEntities()
  const seen = new Set()
  for (const entity of entities) {
    assert.match(entity.data.id, ID_PATTERN)
    assert.equal(seen.has(entity.data.id), false, `duplicate ${entity.data.id}`)
    seen.add(entity.data.id)
  }
})

test('CPC s.11 topic is published and sourced', () => {
  const topic = collectEntities().find((e) => e.data.id === 'topic:india:cpc-s-11')
  assert.ok(topic)
  assert.equal(topic.data.status, 'published')
  assert.ok(topic.data.sources.includes('source:india:india-code-cpc-1908'))
  assert.ok(topic.data.content.overview)
  assert.ok(topic.data.content.study)
})

test('content hash is stable for the same payload', () => {
  const sample = { id: 'topic:india:cpc-s-11', version: 1 }
  assert.equal(sha256Canonical(sample), sha256Canonical({ version: 1, id: 'topic:india:cpc-s-11' }))
})
