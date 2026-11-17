import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { createServer } from 'node:net';
import test from 'node:test';

// Exercise the built Node server, every Version 4 route, and its linked assets.
test('Version 4 serves all pages and local assets through the production Node server', { timeout: 90000 }, async () => {
  const socket = createServer();
  socket.listen(0, '127.0.0.1');
  await once(socket, 'listening');
  const port = socket.address().port;
  await new Promise(resolve => socket.close(resolve));
  const server = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'start', '-H', '127.0.0.1', '-p', String(port)], { env: {...process.env, NEXT_TELEMETRY_DISABLED:'1'}, stdio: ['ignore','pipe','pipe'] });
  let logs = '';
  server.stdout.on('data', d => logs += d);
  server.stderr.on('data', d => logs += d);
  const origin = `http://127.0.0.1:${port}`;
  try {
    let ready = false;
    for (let i=0;i<100;i++) {
      if (server.exitCode !== null) throw Error(logs);
      try { if ((await fetch(origin)).ok) { ready = true; break; } } catch {}
      await new Promise(resolve => setTimeout(resolve, 200));
    }
    assert.ok(ready, logs);
    const assets = new Set();
    for (const route of ['/', '/why', '/about', '/programs', '/pathways', '/get-involved']) {
      const response = await fetch(origin + route);
      assert.equal(response.status, 200, route + logs);
      const html = await response.text();
      assert.match(html, /Project Interlock/);
      assert.match(html, /<h1[\s>]/);
      assert.doesNotMatch(html, /codex-preview|\/workspace\/sites\//);
      for (const match of html.matchAll(/(?:src|href)="(\/(?:assets\/|_next\/static\/)[^"?#]+)[^" ]*"/g)) assets.add(match[1]);
      if (route==='/why') for (const name of ['why-young-students.png','why-older-students.png','why-working-professionals.png']) assert.ok(html.includes(name));
      if (route==='/get-involved') assert.ok(html.includes('mailto:info@projectinterlock.org'));
    }
    assert.ok(assets.size > 5);
    for (const asset of assets) assert.equal((await fetch(origin + asset)).status, 200, asset);
    assert.equal((await fetch(origin + '/not-a-real-page')).status, 404);
  } finally {
    const stopped = once(server, 'exit');
    server.kill('SIGTERM');
    await stopped;
  }
});
