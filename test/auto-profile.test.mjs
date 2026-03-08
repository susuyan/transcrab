import test from 'node:test';
import assert from 'node:assert/strict';
import { analyzeMarkdownComplexity, inferAutoProfile } from '../scripts/lib/auto-profile.mjs';

test('analyzeMarkdownComplexity detects technical signals', () => {
  const m = analyzeMarkdownComplexity('# T\n\n```js\nconsole.log(1)\n```\n\n|a|b|\n|---|---|\n|1|2|');
  assert.equal(m.isTechnical, true);
  assert.ok(m.codeBlocks >= 1);
  assert.ok(m.tableRows >= 2);
});

test('inferAutoProfile always resolves to refined pipeline', () => {
  const shortMd = '# T\n\nThis is a short life note about travel and family.';
  const p = inferAutoProfile(shortMd, { chunkThreshold: 4000, chunkMaxWords: 5000, glossary: [] });
  assert.equal(p.resolved.mode, 'refined');
  assert.ok(p.reasons.some((x) => x.includes('公开发布')));
});

test('inferAutoProfile picks technical style for code-heavy content', () => {
  const md = '# T\n\n```swift\nlet x = 1\n```\n\nSome text';
  const p = inferAutoProfile(md, { chunkThreshold: 4000, chunkMaxWords: 5000, glossary: [] });
  assert.equal(p.topic, 'technology');
  assert.equal(p.resolved.style, 'technical');
  assert.equal(p.resolved.audience, 'technical');
});

test('inferAutoProfile picks business style for strategy content', () => {
  const md = '# Market update\n\nRevenue, margin, growth, forecast, CFO and ROI are the focus.';
  const p = inferAutoProfile(md, { chunkThreshold: 4000, chunkMaxWords: 5000, glossary: [] });
  assert.equal(p.topic, 'business');
  assert.equal(p.resolved.style, 'business');
});

test('inferAutoProfile picks conversational style for life content', () => {
  const md = '# Sunday\n\nFamily, friends, daily life, travel and feelings in the weekend.';
  const p = inferAutoProfile(md, { chunkThreshold: 4000, chunkMaxWords: 5000, glossary: [] });
  assert.equal(p.topic, 'life');
  assert.equal(p.resolved.style, 'conversational');
});
