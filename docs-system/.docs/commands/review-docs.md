# Command: Review Docs

## What it does

Provides a consistent review pass for any change under `docs-system/`: accuracy against sources of truth, template completeness, terminology, and cross-links.

## When to use

- Before merging documentation PRs.
- After OpenAPI or product behavior changes.
- When preparing a release notes or docs cut.

## Checklist (apply by doc type)

- **API pages:** Compare to `api/specs/openapi.yaml`; run `api-endpoint/checklist.md`.
- **KB:** Run `kb-article/checklist.md`; verify problem/solution alignment.
- **User guides:** Run `user-guide/checklist.md`; verify UI strings.
- **All:** No missing sections; links resolve; style guides respected (`style/api-style.md`, `style/user-style.md`).
