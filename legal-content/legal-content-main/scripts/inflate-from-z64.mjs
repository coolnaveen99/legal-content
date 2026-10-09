#!/usr/bin/env node
import { readFileSync, writeFileSync, unlinkSync, existsSync } from 'node:fs';
import { inflateSync } from 'node:zlib';
const zpath = 'manifests/content-manifest.json.z64';
const out = inflateSync(Buffer.from(readFileSync(zpath, 'utf8').trim(), 'base64')).toString('utf8');
JSON.parse(out);
writeFileSync('manifests/content-manifest.json', out);
if (existsSync(zpath)) unlinkSync(zpath);
console.log('inflated', out.length, 'bytes,', JSON.parse(out).entities.length, 'entities');
