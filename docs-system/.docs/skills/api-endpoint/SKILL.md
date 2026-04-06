# Skill: API Endpoint Documentation

## Purpose

Standardize API reference pages derived from OpenAPI so every endpoint doc has the same sections, accuracy, and examples.

## When to Use

- Adding or updating narrative docs for a REST operation defined in `api/specs/openapi.yaml`.
- Reviewing PRs that touch `api/content/endpoints/`.

## Steps

1. **Read OpenAPI** — Open `api/specs/openapi.yaml`. Locate the path and method (`get`, `post`, etc.) and linked request/response schemas and `components`.
2. **Extract data** — Collect: summary/description, parameters (in, name, required, schema), request body, responses (status, description, schema), and security if applicable.
3. **Apply template** — Copy `templates/endpoint.md` and fill every section from the spec only; add examples that conform to the schema.
4. **Validate** — Run through `checklist.md`. Fix gaps before merging.

## Outputs

- One markdown file per operation (or per logical page if you group rare variants), under `api/content/endpoints/`.
- Filename: kebab-case from operation id or path segment (e.g. `create-user.md` for `POST /users`).

## References

- Global rules: `../../../CLAUDE.md`
- Style: `../../../style/api-style.md`
