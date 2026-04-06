/**
 * Copies Markdown from docs-system/ into pages/docs/ as .mdx for Next.js routes.
 * Edit sources under docs-system/; run: npm run sync-docs
 */
const fs = require('fs')
const path = require('path')

const root = path.join(__dirname, '..')
const docsSystem = path.join(root, 'docs-system')
const pagesDocs = path.join(root, 'pages', 'docs')

const mappings = [
  { from: 'api/content/endpoints', to: 'api/endpoints' },
  { from: 'user-docs/guides', to: 'guides' },
  { from: 'kb/articles', to: 'kb' },
]

const banner =
  '{/* Generated from docs-system — run `npm run sync-docs` after editing sources. */}\n\n'

function syncDir(relFrom, relTo) {
  const srcDir = path.join(docsSystem, relFrom)
  const destDir = path.join(pagesDocs, relTo)

  if (!fs.existsSync(srcDir)) {
    console.warn(`[sync-docs] Skip missing source: ${relFrom}`)
    return
  }

  fs.mkdirSync(destDir, { recursive: true })

  const mdFiles = fs.readdirSync(srcDir).filter((f) => f.endsWith('.md'))
  const wantedBasenames = new Set()

  for (const file of mdFiles) {
    const base = path.basename(file, '.md')
    wantedBasenames.add(base)
    const content = fs.readFileSync(path.join(srcDir, file), 'utf8')
    const outPath = path.join(destDir, `${base}.mdx`)
    fs.writeFileSync(outPath, banner + content, 'utf8')
    console.log(`[sync-docs] ${relFrom}/${file} -> pages/docs/${relTo}/${base}.mdx`)
  }

  for (const entry of fs.readdirSync(destDir, { withFileTypes: true })) {
    if (!entry.isFile() || !entry.name.endsWith('.mdx')) continue
    const base = path.basename(entry.name, '.mdx')
    if (!wantedBasenames.has(base)) {
      fs.unlinkSync(path.join(destDir, entry.name))
      console.log(`[sync-docs] Removed stale pages/docs/${relTo}/${entry.name}`)
    }
  }
}

function main() {
  if (!fs.existsSync(docsSystem)) {
    console.error('[sync-docs] docs-system/ not found at', docsSystem)
    process.exit(1)
  }

  fs.mkdirSync(pagesDocs, { recursive: true })

  for (const { from, to } of mappings) {
    syncDir(from, to)
  }

  console.log('[sync-docs] Done.')
}

main()
