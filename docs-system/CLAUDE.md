# Documentation System — Global Context

## System Objective

This repository uses an **AI-ready documentation system** grounded in **Docs-as-Code**:

- Content lives in version control with clear structure and templates.
- **OpenAPI (`docs-system/api/specs/openapi.yaml`) is the source of truth** for API behavior, parameters, schemas, and errors. Narrative API docs must align with the spec; do not invent endpoints or fields.
- Skills under `docs-system/.docs/skills/` and commands under `docs-system/.docs/commands/` drive repeatable workflows for humans and assistants.

---

## Documentation Principles

| Principle | Meaning |
|-----------|---------|
| **Accuracy** | No hallucination. Cite OpenAPI, product behavior, or verified sources. Mark unknowns explicitly. |
| **Consistency** | Use templates in each skill. Same section order and terminology across similar doc types. |
| **Clarity** | Short sentences, direct language, scannable headings. Prefer examples over abstraction. |
| **Reusability** | Prefer skills, checklists, and style guides over one-off formats. |

---

## Non-Negotiable Rules

The following rules MUST always be enforced:

- API documentation MUST match `docs-system/api/specs/openapi.yaml` exactly.
- No undocumented parameters, fields, or endpoints may be introduced.
- All required sections for each document type MUST be present.
- Examples MUST be valid, realistic, and consistent with schemas.
- No vague or placeholder language (e.g., “handle accordingly”, “as needed”).

If any rule is violated, the output is considered invalid.

---

## API Documentation Rules

- **Source of truth:** `docs-system/api/specs/openapi.yaml`
- Do not infer or assume behavior not defined in OpenAPI.
- Always include all parameters (path, query, headers, body).

Every endpoint document MUST include these sections (use `api-endpoint` template):

1. **Summary** — What the operation does in one short paragraph.
2. **Endpoint** — Method, path, base URL context if relevant.
3. **Request**
   - Headers
   - Path parameters
   - Query parameters
   - Request body (types, required/optional)
4. **Response** — Success status codes and response body shape (reference schemas from OpenAPI).
5. **Errors** — Error responses with status codes and when they occur.
6. **Examples** — At least one realistic success and one error example.

---

## KB Article Rules (Microsoft Style)

Each KB article MUST include:

- **Title**
- **Scope** — What this article covers and does not cover.
- **Prerequisites** — What you need before starting.
- **Problem Statement** — Observable symptoms or error messages.
- **Root Cause** — Why the issue occurs (if known).
- **Solution** — Short summary of the fix or workaround.
- **Steps to Follow** — Numbered, imperative steps.
- **Expected Outcome** — What you should see when it works.
- **Additional Resources** — Links to guides, API docs, or support.

**Tone:**
- Use second person (“you”)
- Use imperative voice (“Click…”, “Run…”)
- Keep language concise and neutral

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

## Workflow Definition (Path-Aware)

All workflows MUST follow repository structure strictly.

---

### API Documentation Workflow

**Input Source:**
- `api/specs/openapi.yaml`

**Processing:**
- Use skill: `.docs/skills/api-endpoint/SKILL.md`
- Use template: `.docs/skills/api-endpoint/templates/endpoint.md`
- Use checklist: `.docs/skills/api-endpoint/checklist.md`

**Output Location:**
- `api/content/endpoints/{endpoint-name}.md`

**Execution Flow:**
1. Read OpenAPI spec from `api/specs/openapi.yaml`
2. Identify endpoint (path + method)
3. Extract:
   - parameters (path, query, headers, body)
   - response schemas
   - error responses
4. Apply `endpoint.md` template
5. Validate using checklist
6. Write final output to `api/content/endpoints/`

---

### KB Article Workflow

**Input Source:**
- Support issue, bug report, or known problem

**Processing:**
- Use skill: `.docs/skills/kb-article/SKILL.md`
- Use template: `.docs/skills/kb-article/templates/kb-article.md`
- Use checklist: `.docs/skills/kb-article/checklist.md`

**Output Location:**
- `kb/articles/{article-name}.md`

**Execution Flow:**
1. Define problem statement
2. Identify root cause
3. Define solution
4. Apply KB template
5. Validate clarity and completeness
6. Write output to `kb/articles/`

---

### User Guide Workflow

**Input Source:**
- Feature description, product flow, or UI workflow

**Processing:**
- Use skill: `.docs/skills/user-guide/SKILL.md`
- Use template: `.docs/skills/user-guide/templates/user-guide.md`

**Output Location:**
- `user-docs/guides/{guide-name}.md`

**Execution Flow:**
1. Define goal of the guide
2. Break task into ordered steps
3. Apply user guide template
4. Ensure Microsoft style tone
5. Validate completeness
6. Write output to `user-docs/guides/`

---

### General Rule

- Always use templates from `.docs/skills/`
- Never create files outside defined output directories
- Do not duplicate content across folders
- Do not bypass skills or templates

---

## Validation Rules

Before finalizing any document:

- All required sections must be present.
- Content must be complete and actionable.
- No ambiguous instructions (e.g., “configure appropriately”).
- API content must match OpenAPI paths, methods, parameters, and responses.
- Terminology must align with `style/api-style.md` and `style/user-style.md`.

---

## Failure Conditions

Reject or revise the output if any of the following occur:

- Missing required sections
- API documentation does not match OpenAPI
- Parameters or fields are undocumented or inconsistent
- Examples are missing, incomplete, or invalid JSON
- Error scenarios are missing or unclear
- Language is vague, ambiguous, or non-actionable

Do not proceed with publishing until all issues are resolved.

---

## Language Constraints

- Avoid vague verbs (handle, process, manage)
- Use explicit actions (send, validate, return, select)
- Prefer concrete descriptions over abstract explanations
- Keep sentences short and direct

---

## Anti-Patterns

- Writing API docs without referencing OpenAPI
- Skipping templates or mixing section order
- Vague troubleshooting steps without conditions
- Inconsistent naming across endpoints or features

---

## File Locations (Quick Reference)

| Type | Spec / Template | Output |
|------|-----------------|--------|
| API | `api/specs/openapi.yaml`, `.docs/skills/api-endpoint/` | `api/content/endpoints/*.md` |
| KB | `.docs/skills/kb-article/` | `kb/articles/*.md` |
| User | `.docs/skills/user-guide/` | `user-docs/guides/*.md` |

---

Markdown in `docs-system/` is plain MD/MDX-compatible (no custom runtime). Import or copy into your site’s MDX layer as needed.