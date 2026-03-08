#!/usr/bin/env node

import fs from 'node:fs/promises';
import path from 'node:path';

function usage() {
  console.log('Usage: node scripts/eval-translation-quality.mjs --in <scores-dir> [--out <report.json>]');
}

function argValue(args, key, def = null) {
  const idx = args.indexOf(key);
  if (idx >= 0 && idx + 1 < args.length) return args[idx + 1];
  return def;
}

export function mean(arr) {
  if (!arr.length) return 0;
  return arr.reduce((s, x) => s + x, 0) / arr.length;
}

export function variance(arr) {
  if (arr.length <= 1) return 0;
  const m = mean(arr);
  return arr.reduce((s, x) => s + (x - m) ** 2, 0) / arr.length;
}

export async function loadScoreFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = entries.filter((e) => e.isFile() && e.name.endsWith('.json')).map((e) => path.join(dir, e.name));
  const rows = [];
  for (const f of files) {
    const raw = await fs.readFile(f, 'utf8');
    rows.push(JSON.parse(raw));
  }
  return rows;
}

export function summarize(rows) {
  const byMode = new Map();
  for (const row of rows) {
    const mode = row.mode || 'unknown';
    if (!byMode.has(mode)) byMode.set(mode, []);
    byMode.get(mode).push(row);
  }

  const result = { total: rows.length, modes: {} };

  for (const [mode, items] of byMode.entries()) {
    const dims = ['faithfulness', 'terminology', 'markdown', 'readability'];
    const summary = {};
    for (const dim of dims) {
      const values = items.map((x) => Number(x?.scores?.[dim] || 0)).filter((x) => Number.isFinite(x) && x > 0);
      summary[dim] = {
        count: values.length,
        mean: Number(mean(values).toFixed(3)),
        variance: Number(variance(values).toFixed(3)),
      };
    }
    result.modes[mode] = {
      runs: items.length,
      summary,
    };
  }

  return result;
}

async function main() {
  const args = process.argv.slice(2);
  if (args.includes('-h') || args.includes('--help')) {
    usage();
    process.exit(0);
  }

  const inDir = argValue(args, '--in');
  const outPath = argValue(args, '--out');
  if (!inDir) {
    usage();
    process.exit(2);
  }

  const rows = await loadScoreFiles(path.resolve(inDir));
  const report = summarize(rows);

  if (outPath) {
    await fs.mkdir(path.dirname(path.resolve(outPath)), { recursive: true });
    await fs.writeFile(path.resolve(outPath), JSON.stringify(report, null, 2) + '\n', 'utf8');
  }

  console.log(JSON.stringify(report, null, 2));
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((err) => {
    console.error(err?.stack || String(err));
    process.exit(1);
  });
}
