import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const distDir = join(root, 'dist')
const shell = await readFile(join(distDir, 'index.html'), 'utf8')
const serverEntry = await import(pathToFileURL(join(distDir, 'server', 'entry-server.js')))
const { getSeoForPath, render, routeManifest } = serverEntry

const escapeHtml = (value = '') => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('"', '&quot;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')

const meta = (attribute, name, content) => (
  content ? `<meta ${attribute}="${escapeHtml(name)}" content="${escapeHtml(content)}">` : ''
)

const createHead = (seo) => {
  const tags = [
    `<title>${escapeHtml(seo.title)}</title>`,
    meta('name', 'description', seo.description),
    meta('name', 'robots', seo.robots),
    `<link rel="canonical" href="${escapeHtml(seo.canonical)}">`,
    meta('property', 'og:type', seo.type),
    meta('property', 'og:title', seo.title),
    meta('property', 'og:description', seo.description),
    meta('property', 'og:image', seo.image),
    meta('property', 'og:image:alt', seo.imageAlt),
    meta('property', 'og:image:width', seo.imageWidth),
    meta('property', 'og:image:height', seo.imageHeight),
    meta('property', 'og:url', seo.canonical),
    meta('property', 'og:site_name', 'Freetown Press'),
    meta('property', 'og:locale', 'en_GH'),
    meta('property', 'article:published_time', seo.publishedTime),
    meta('property', 'article:section', seo.section),
    meta('name', 'twitter:card', 'summary_large_image'),
    meta('name', 'twitter:title', seo.title),
    meta('name', 'twitter:description', seo.description),
    meta('name', 'twitter:image', seo.image),
    meta('name', 'twitter:image:alt', seo.imageAlt),
    ...seo.jsonLd.map((item) => (
      `<script type="application/ld+json" data-seo-json-ld="true">${JSON.stringify(item).replaceAll('<', '\\u003c')}</script>`
    )),
  ]

  return tags.filter(Boolean).join('\n    ')
}

const createDocument = (path) => {
  const seo = getSeoForPath(path)
  const appHtml = render(path)
  return shell
    .replace('<!--seo-head-->', createHead(seo))
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
}

const outputPath = (path) => (
  path === '/' ? join(distDir, 'index.html') : join(distDir, path.slice(1), 'index.html')
)

for (const route of routeManifest) {
  const destination = outputPath(route.path)
  await mkdir(dirname(destination), { recursive: true })
  await writeFile(destination, createDocument(route.path))
}

await writeFile(join(distDir, '404.html'), createDocument('/404'))

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routeManifest.map((route) => `  <url>
    <loc>https://freetownpress.com${route.path}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority.toFixed(1)}</priority>
  </url>`).join('\n')}
</urlset>
`

await writeFile(join(distDir, 'sitemap.xml'), sitemap)
await rm(join(distDir, 'server'), { recursive: true, force: true })

console.log(`Prerendered ${routeManifest.length} indexable routes and 404.html`)
