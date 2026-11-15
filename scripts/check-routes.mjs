import { readdir } from "node:fs/promises";
import { join } from "node:path";

const pagesRoot = new URL("../src/pages/", import.meta.url);
const routes = [];

async function walk(directory, prefix = "") {
  const entries = await readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const absolutePath = join(directory, entry.name);

    if (entry.isDirectory()) {
      await walk(absolutePath, `${prefix}/${entry.name}`);
      continue;
    }

    if (entry.name === "index.astro") {
      routes.push(`${prefix || ""}/` || "/");
    }

    if (entry.name === "404.astro") {
      routes.push("/404/");
    }
  }
}

await walk(pagesRoot.pathname);

console.log(`確認したページ: ${routes.length}件`);
for (const route of routes.sort()) {
  console.log(`  ${route}`);
}
