# Documentation System (v1)

AI-ready, Docs-as-Code documentation layout for API reference, user guides, and knowledge base articles. **OpenAPI** (`api/specs/openapi.yaml`) is the source of truth for APIs.

## Folder structure

```
docs-system/
  CLAUDE.md                 # Global rules, workflows, validation
  README.md                 # This file
  .docs/
    skills/                 # Repeatable workflows + templates
      api-endpoint/
      kb-article/
      user-guide/
    commands/               # Short “how to run” instructions
  api/
    specs/openapi.yaml      # API source of truth
    content/endpoints/      # Narrative endpoint pages (from spec)
  user-docs/guides/         # Procedural user documentation
  kb/articles/              # Troubleshooting KB articles
  style/                    # api-style.md, user-style.md
```

## How it works

1. **API:** Edit `api/specs/openapi.yaml`, then author or update pages in `api/content/endpoints/` using `.docs/skills/api-endpoint/` (template + checklist).
2. **User docs:** Add guides under `user-docs/guides/` using `.docs/skills/user-guide/`.
3. **KB:** Add articles under `kb/articles/` using `.docs/skills/kb-article/`.
4. **Review:** Use `.docs/commands/review-docs.md` and the per-skill checklists.

Global policy and anti-patterns live in `CLAUDE.md`.

## Sync into the Next.js site

From the repository root:

```bash
npm run sync-docs
```

This copies Markdown from `docs-system/` into `pages/docs/` as `.mdx` (see `scripts/sync-docs.js`). `npm run build` runs `sync-docs` automatically via `prebuild`.

After you add a new `.md` file under `docs-system`, run `sync-docs` and add a link on `pages/docs/index.mdx`.

## How to generate docs (v1)

There is no code generator in v1. To create or refresh content:

- **API:** Follow `CLAUDE.md` workflow *OpenAPI → Extract → Template → Validate → Output* and `.docs/commands/generate-api-doc.md`.
- **KB:** Follow `.docs/commands/create-kb.md`.
- **Guides:** Follow `.docs/commands/create-user-guide.md`.

## MDX compatibility

Files are standard Markdown (`.md`). Your Next.js MDX pipeline can:

- **Import** pages from `docs-system/` into `pages/` or `app/` as MDX, or
- **Copy** or symlink content into your app tree,

as long as paths and bundler rules include the chosen files. Optional `.mdx` rename is supported if your config treats `.mdx` the same way as `.md`.

## Sample content

| Type | Path |
|------|------|
| OpenAPI | `api/specs/openapi.yaml` |
| Endpoint doc | `api/content/endpoints/create-user.md` |
| KB | `kb/articles/subscription-error.md` |
| User guide | `user-docs/guides/create-subscription.md` |
