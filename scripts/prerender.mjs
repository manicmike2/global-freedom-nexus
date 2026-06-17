// Postbuild SSG: renders every route in src/routes-list.ts to dist/<route>/index.html.
// Run after `vite build` (client) and `vite build --ssr src/entry-server.tsx --outDir dist/server`.
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");
const serverDir = path.join(distDir, "server");

const templatePath = path.join(distDir, "index.html");
const template = await fs.readFile(templatePath, "utf-8");

// Polyfill browser globals that some client libs (e.g. Supabase auth) touch at import time.
const memoryStorage = (() => {
  const store = new Map();
  return {
    getItem: (k) => (store.has(k) ? store.get(k) : null),
    setItem: (k, v) => void store.set(k, String(v)),
    removeItem: (k) => void store.delete(k),
    clear: () => store.clear(),
    key: (i) => Array.from(store.keys())[i] ?? null,
    get length() { return store.size; },
  };
})();
if (typeof globalThis.localStorage === "undefined") globalThis.localStorage = memoryStorage;
if (typeof globalThis.sessionStorage === "undefined") globalThis.sessionStorage = memoryStorage;

// Vite SSR build emits entry-server.js (ESM since package.json has "type": "module")
const serverEntryPath = path.join(serverDir, "entry-server.js");
const { render, prerenderRoutes } = await import(pathToFileURL(serverEntryPath).href);

let count = 0;
for (const route of prerenderRoutes) {
  const { html, helmet } = render(route);

  const headTags = helmet
    ? [
        helmet.title.toString(),
        helmet.meta.toString(),
        helmet.link.toString(),
        helmet.script.toString(),
      ]
        .filter(Boolean)
        .join("\n    ")
    : "";

  let page = template
    .replace("<!--app-html-->", html)
    .replace("<!--app-head-->", headTags);

  // If helmet emitted a <title>, strip the static fallback <title> from index.html
  // to avoid two <title> tags in the same document.
  if (helmet && helmet.title.toString().includes("<title")) {
    page = page.replace(/<title>[^<]*<\/title>\s*/i, "");
  }

  const outPath =
    route === "/"
      ? path.join(distDir, "index.html")
      : path.join(distDir, route.replace(/^\//, ""), "index.html");

  await fs.mkdir(path.dirname(outPath), { recursive: true });
  await fs.writeFile(outPath, page, "utf-8");
  count++;
  console.log(`  ✓ prerendered ${route}`);
}

// Clean up SSR bundle — not needed at runtime.
await fs.rm(serverDir, { recursive: true, force: true });

console.log(`\n✓ Prerendered ${count} routes to dist/`);
