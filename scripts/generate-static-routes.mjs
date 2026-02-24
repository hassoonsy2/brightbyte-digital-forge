import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const distDir = path.resolve('dist');
const sitemapPath = path.resolve('public', 'sitemap.xml');
const indexPath = path.join(distDir, 'index.html');
const baseUrl = 'https://bright-byte.co';

const toRoutePath = (loc) => {
  if (!loc) return null;
  if (!loc.startsWith(baseUrl)) return null;

  const route = loc.replace(baseUrl, '').trim();
  if (!route || route === '/') return null;

  return route.startsWith('/') ? route.slice(1) : route;
};

const main = async () => {
  const [sitemapRaw, indexHtml] = await Promise.all([
    readFile(sitemapPath, 'utf8'),
    readFile(indexPath, 'utf8'),
  ]);

  const locMatches = [...sitemapRaw.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
  const routes = [...new Set(locMatches.map(toRoutePath).filter(Boolean))];

  let created = 0;
  for (const route of routes) {
    const routeDir = path.join(distDir, route);
    const routeIndex = path.join(routeDir, 'index.html');

    await mkdir(routeDir, { recursive: true });
    await writeFile(routeIndex, indexHtml, 'utf8');
    created += 1;
  }

  console.log(`Generated static route entrypoints: ${created}`);
};

main().catch((error) => {
  console.error('Failed to generate static route entrypoints');
  console.error(error);
  process.exit(1);
});
