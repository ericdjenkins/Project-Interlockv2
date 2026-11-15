import { createHash } from 'node:crypto';
import { readFileSync, readdirSync, statSync, writeFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const mode = process.argv[2];
if (!['--write', '--check'].includes(mode)) throw Error('Use --write or --check.');
const file = path.join(root, 'docs/PROGRAM_OVERVIEW.md');
const start = '<!-- BEGIN GENERATED WEBSITE INVENTORY -->';
const end = '<!-- END GENERATED WEBSITE INVENTORY -->';
const original = readFileSync(file, 'utf8');
if (original.split(start).length !== 2 || original.split(end).length !== 2 || original.indexOf(end) < original.indexOf(start)) throw Error('Missing or duplicate inventory markers.');
const files = [];
function collect(relative) {
  const absolute = path.join(root, relative);
  if (!existsSync(absolute)) return;
  if (statSync(absolute).isDirectory()) {
    for (const name of readdirSync(absolute).sort()) collect(`${relative}/${name}`);
  } else files.push(relative);
}
for (const entry of ['app', 'public', 'scripts', '.github/workflows', 'package.json', 'package-lock.json', 'next.config.ts', 'postcss.config.mjs', 'tsconfig.json', '.npmrc', 'README.md', 'tests']) collect(entry);
files.sort();
const digest = name => createHash('sha256').update(readFileSync(path.join(root,name))).digest('hex');
const routeFor = name => '/' + name.replace(/^app\//, '').replace(/(^|\/)page\.[jt]sx?$/, '').split('/').filter(s=>!/^\(.+\)$/.test(s) && !s.startsWith('@')).join('/');
const routes = files.filter(n=>/(^|\/)page\.[jt]sx?$/.test(n)).map(routeFor).sort();
const pkg = JSON.parse(readFileSync(path.join(root,'package.json'),'utf8'));
const hashes = files.map(name=>[name,digest(name)]);
const fingerprint = createHash('sha256').update(JSON.stringify(hashes)).digest('hex');
const snapshot = [start, '', `Source fingerprint: \`${fingerprint}\``, '', `Routes found: ${routes.map(r=>'\`'+r+'\`').join(', ')}.`, '', `Runtime: Next.js ${pkg.dependencies.next}; React ${pkg.dependencies.react}; Node ${pkg.engines.node}.`, '', `Build: \`${pkg.scripts.build}\`. Start: \`${pkg.scripts.start}\`.`, '', '| Source file | SHA256 |', '| --- | --- |', ...hashes.map(([name,hash])=>'| `'+name+'` | `'+hash+'` |'), '', end].join('\n');
const next = original.slice(0,original.indexOf(start)) + snapshot + original.slice(original.indexOf(end)+end.length);
if (mode==='--write') {
  writeFileSync(file,next);
  console.log('Updated source inventory. Review the overview narrative and dated change log before committing.');
} else if (next!==original) {
  console.error('Program overview is stale. Review docs/PROGRAM_OVERVIEW.md, record website changes, then run npm run docs:update and commit both together.');
  process.exitCode=1;
} else console.log(`Documentation inventory is current (${files.length} files, ${routes.length} routes).`);
