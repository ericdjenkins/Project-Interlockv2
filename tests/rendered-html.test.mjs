import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const pagePaths = ["/", "/why", "/about", "/the-pathway", "/faq", "/get-involved"];
const expectedPageCopy = new Map([
  ["/", ["Talent is everywhere.", "Building toward a 2027 pilot."]],
  ["/why", ["Why representation matters", "Black and Latino", "47%", "51%"]],
  ["/about", ["About Project Interlock", "The opportunity gap is measurable."]],
  ["/the-pathway", ["Learn. Support. Mentor. Experience. Launch.", "Available now", "Coming in 2027"]],
  ["/faq", ["What to know before launch.", "Who is the pilot designed for?"]],
  ["/get-involved", ["Help shape the 2027 pilot.", "Where do you want to plug in?"]],
]);

let worker;
const htmlByPath = new Map();

async function getWorker() {
  if (!worker) {
    const workerUrl = new URL("../dist/server/index.js", import.meta.url);
    workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
    ({ default: worker } = await import(workerUrl.href));
  }
  return worker;
}

async function request(path, init = {}) {
  const app = await getWorker();
  return app.fetch(
    new Request(`http://localhost${path}`, init),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

function decodeHtml(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&#x27;", "'")
    .replaceAll("&quot;", '"');
}

for (const path of pagePaths) {
  test(`renders ${path} with shared navigation and current pilot content`, async () => {
    const response = await request(path, { headers: { accept: "text/html" } });
    const html = await response.text();
    htmlByPath.set(path, html);

    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
    assert.doesNotMatch(html, /codex-preview/);
    assert.match(html, /Project Interlock/);
    assert.match(html, /Work in progress:/);
    assert.match(html, /2027/);
    assert.match(html, /<nav[^>]*aria-label="Primary navigation"/);
    assert.match(html, /<footer/);

    for (const copy of expectedPageCopy.get(path) ?? []) {
      assert.ok(decodeHtml(html).includes(copy), `${path} is missing expected copy: ${copy}`);
    }
  });
}

test("all internal page and anchor links resolve", async () => {
  for (const path of pagePaths) {
    if (!htmlByPath.has(path)) {
      const response = await request(path, { headers: { accept: "text/html" } });
      htmlByPath.set(path, await response.text());
    }
  }

  for (const [sourcePath, html] of htmlByPath) {
    const hrefs = [...html.matchAll(/<a\b[^>]*\bhref=["']([^"']+)["']/gi)].map((match) => decodeHtml(match[1]));
    for (const href of hrefs) {
      if (/^(?:https?:|mailto:|tel:)/i.test(href)) continue;
      const target = new URL(href, `http://localhost${sourcePath}`);
      const targetPath = target.pathname.replace(/\/$/, "") || "/";
      assert.ok(pagePaths.includes(targetPath), `${sourcePath} links to missing page ${targetPath}`);
      if (target.hash) {
        const targetHtml = htmlByPath.get(targetPath) ?? "";
        const id = target.hash.slice(1).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        assert.match(targetHtml, new RegExp(`\\bid=["']${id}["']`), `${sourcePath} links to missing anchor ${target.href}`);
      }
    }
  }
});

test("returns a real 404 for an unknown page", async () => {
  const response = await request("/not-a-real-page", { headers: { accept: "text/html" } });
  assert.equal(response.status, 404);
});

test("interest endpoint rejects invalid submissions before persistence", async () => {
  const response = await request("/api/interest", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ role: "Student", name: "A", email: "invalid", involvement: "" }),
  });
  assert.equal(response.status, 400);
});

test("interest endpoint safely accepts bot-trap submissions", async () => {
  const response = await request("/api/interest", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ website: "https://spam.example" }),
  });
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { ok: true });
});

test("required brand and audience images are present and valid PNG files", async () => {
  const assets = [
    "project-interlock-hero.png",
    "project-interlock-logo.png",
    "project-interlock-mark.png",
    "project-interlock-stacked.png",
    "why-college-students-black-latino.png",
    "why-professionals-black-latino.png",
    "why-young-students-black-latino.png",
  ];
  for (const asset of assets) {
    const url = new URL(`../public/assets/${asset}`, import.meta.url);
    await access(url);
    const bytes = await readFile(url);
    assert.deepEqual([...bytes.subarray(0, 8)], [137, 80, 78, 71, 13, 10, 26, 10], `${asset} is not a valid PNG`);
  }
});
