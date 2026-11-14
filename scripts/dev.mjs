import { spawn } from 'node:child_process';
const incoming = process.argv.slice(2);
const args = ['node_modules/next/dist/bin/next', 'dev'];
for (let i = 0; i < incoming.length; i++) {
  if (incoming[i] === '--strictPort') continue;
  args.push(incoming[i] === '--host' ? '--hostname' : incoming[i]);
}
const child = spawn(process.execPath, args, { stdio: 'inherit' });
for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, () => child.kill(signal));
child.on('exit', code => process.exit(code ?? 1));
