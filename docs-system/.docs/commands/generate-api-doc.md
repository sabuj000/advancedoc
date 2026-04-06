# Command: Generate API Doc

## What it does

Guides creation of a single endpoint reference page from `api/specs/openapi.yaml` using the `api-endpoint` skill: extract the operation, fill `templates/endpoint.md`, validate with the checklist, and save under `api/content/endpoints/`.

## When to use

- A new path/method was added to OpenAPI and needs a matching narrative page.
- You are refreshing endpoint docs after a spec change.
- You are reviewing whether existing markdown still matches the spec.

## How to run (manual v1)

1. Read `docs-system/.docs/skills/api-endpoint/SKILL.md`.
2. Open the operation in `docs-system/api/specs/openapi.yaml`.
3. Copy `templates/endpoint.md` and replace placeholders.
4. Complete `checklist.md`.
