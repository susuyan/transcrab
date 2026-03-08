import test from 'node:test';
import assert from 'node:assert/strict';

import { mean, variance, summarize } from '../scripts/eval-translation-quality.mjs';

test('mean and variance are deterministic', () => {
  assert.equal(mean([1, 2, 3]), 2);
  assert.equal(variance([1, 2, 3]), 2 / 3);
});

test('summarize aggregates scores by mode', () => {
  const report = summarize([
    { mode: 'normal', scores: { faithfulness: 4, terminology: 5, markdown: 4, readability: 4 } },
    { mode: 'normal', scores: { faithfulness: 5, terminology: 4, markdown: 5, readability: 5 } },
    { mode: 'quick', scores: { faithfulness: 3, terminology: 3, markdown: 3, readability: 3 } },
  ]);

  assert.equal(report.total, 3);
  assert.equal(report.modes.normal.runs, 2);
  assert.equal(report.modes.quick.summary.readability.mean, 3);
  assert.equal(report.modes.normal.summary.faithfulness.mean, 4.5);
});
