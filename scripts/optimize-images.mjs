import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

const MAX_WIDTH = 1800;
const QUALITY = 78;

const exts = new Set(['.jpeg', '.jpg', '.png']);

const fmt = (n) => `${(n / 1024).toFixed(1)} KB`;

async function optimize(file) {
  const ext = path.extname(file).toLowerCase();
  if (!exts.has(ext)) return null;

  const filePath = path.join(publicDir, file);
  const before = (await fs.stat(filePath)).size;

  const input = await fs.readFile(filePath);
  const meta = await sharp(input).metadata();
  const needsResize = (meta.width ?? 0) > MAX_WIDTH;

  let pipeline = sharp(input).rotate();
  if (needsResize) pipeline = pipeline.resize({ width: MAX_WIDTH });

  let buffer;
  if (ext === '.png') {
    buffer = await pipeline.png({ quality: 85, compressionLevel: 9 }).toBuffer();
  } else {
    buffer = await pipeline.jpeg({ quality: QUALITY, mozjpeg: true }).toBuffer();
  }

  if (buffer.length >= before) {
    return { file, before, after: before, saved: 0, skipped: true };
  }

  await fs.writeFile(filePath, buffer);
  return { file, before, after: buffer.length, saved: before - buffer.length, skipped: false };
}

const entries = await fs.readdir(publicDir);
const results = [];

for (const file of entries.sort()) {
  const stat = await fs.stat(path.join(publicDir, file));
  if (!stat.isFile()) continue;
  try {
    const r = await optimize(file);
    if (r) results.push(r);
  } catch (err) {
    console.error(`✗ ${file}: ${err.message}`);
  }
}

const totalBefore = results.reduce((s, r) => s + r.before, 0);
const totalAfter = results.reduce((s, r) => s + r.after, 0);
const totalSaved = totalBefore - totalAfter;

console.log('\nResultado:');
for (const r of results) {
  const pct = r.before > 0 ? ((1 - r.after / r.before) * 100).toFixed(1) : '0.0';
  const tag = r.skipped ? '· skip' : `-${pct}%`;
  console.log(`  ${r.file.padEnd(34)} ${fmt(r.before).padStart(10)} -> ${fmt(r.after).padStart(10)}  ${tag}`);
}
console.log('-'.repeat(70));
console.log(`  TOTAL${' '.repeat(29)} ${fmt(totalBefore).padStart(10)} -> ${fmt(totalAfter).padStart(10)}  -${((1 - totalAfter / totalBefore) * 100).toFixed(1)}%`);
console.log(`  Economizou: ${fmt(totalSaved)}\n`);
