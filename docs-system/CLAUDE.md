# Documentation System — Global Context

## System Objective

This repository uses an **AI-ready documentation system** grounded in **Docs-as-Code**:

- Content lives in version control with clear structure and templates.
- **OpenAPI (`api/specs/openapi.yaml`) is the source of truth** for API behavior, parameters, schemas, and errors. Narrative API docs must align with the spec; do not invent endpoints or fields.
- Skills under `.docs/skills/` and commands under `.docs/commands/` drive repeatable workflows for humans and assistants.

## Documentation Principles

| Principle | Meaning |
|-----------|---------|
| **Accuracy** | No hallucination. Cite OpenAPI, product behavior, or verified sources. Mark unknowns explicitly. |
| **Consistency** | Use templates in each skill. Same section order and terminology across similar doc types. |
| **Clarity** | Short sentences, direct language, scannable headings. Prefer examples over abstraction. |
| **Reusability** | Prefer skills, checklists, and style guides over one-off formats. |

---

## API Documentation Rules

- **Source of truth:** `api/specs/openapi.yaml`
- Every endpoint document MUST include these sections (use `api-endpoint` template):
  1. **Summary** — What the operation does in one short paragraph.
  2. **Endpoint** — Method, path, base URL context if relevant.
  3. **Request** — Headers, path/query parameters, request body (with types and required/optional).
  4. **Response** — Success status codes and response body shape (reference schemas from OpenAPI).
  5. **Errors** — Error responses with status codes and when they occur (from OpenAPI).
  6. **Examples** — At least one realistic request/response example.

---

## KB Article Rules (Microsoft Style)

Each KB article MUST include:

- **Title**
- **Scope** — What this article covers and does not cover.
- **Prerequisites** — What you need before starting (access, versions, prior steps).
- **Problem Statement** — Observable symptoms or error messages.
- **Solution** — Short summary of the fix or workaround.
- **Steps to Follow** — Numbered, imperative steps.
- **Expected Outcome** — What you should see when it works.
- **Additional Resources** — Links to guides, API docs, or support.

**Tone:** Second person (“you”), imperative voice (“Click…”, “Run…”), concise and neutral.

---

## User Guide Rules

Each user guide MUST include:

- **Title**
- **Overview** — What the feature/task is and why it matters.
- **Prerequisites** — Accounts, permissions, or prior setup.
- **Steps** — Clear numbered steps with UI/API labels as in the product.
- **Result** — What success looks like.
- **Additional Information** — Tips, limits, or links to KB/API docs.

---

## Workflow Definition

**API:**  
`OpenAPI → Extract → Template → Validate → Output`  
(Read spec → pull operation + schemas → fill `endpoint.md` → checklist → write to `api/content/endpoints/`)

**KB:**  
`Problem → Root Cause → Solution → Structured Output`  
(Symptoms → likely cause → fix → `kb-article.md` sections)

**User docs:**  
`Feature → Steps → Structured Guide`  
(What users do → ordered steps → `user-guide.md`)

---

## Validation Rules

- No missing required sections for the doc type.
- No ambiguous requirements (“configure appropriately” without specifics).
- API content matches OpenAPI paths, methods, parameters, and response codes.
- Terminology matches `style/api-style.md` and `style/user-style.md` as applicable.

---

## Anti-Patterns

- Writing API docs without reading or updating OpenAPI.
- Skipping templates or mixing section orders arbitrarily.
- Vague troubleshooting (“try again” without conditions or next checks).
- Inconsistent product names, endpoint naming, or error wording across files.

---

## File Locations (Quick Reference)

| Type | Spec / Template | Output |
|------|-----------------|--------|
| API | `api/specs/openapi.yaml`, `.docs/skills/api-endpoint/` | `api/content/endpoints/*.md` |
| KB | `.docs/skills/kb-article/` | `kb/articles/*.md` |
| User | `.docs/skills/user-guide/` | `user-docs/guides/*.md` |

Markdown in `docs-system/` is plain MD/MDX-compatible (no custom runtime). Import or copy into your site’s MDX layer as needed.
