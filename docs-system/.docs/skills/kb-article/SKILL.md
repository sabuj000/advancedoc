# Skill: Knowledge Base Article

## Purpose

Produce structured troubleshooting articles in Microsoft style so readers can diagnose issues quickly and apply a verified fix.

## When to Use

- Documenting a known error, failure mode, or support escalation pattern.
- Publishing workarounds until a product fix ships.

## Steps

1. **Define problem** — Capture symptoms, error text, and environments where it appears.
2. **Identify root cause** — State the most likely cause tied to product behavior or configuration; avoid speculation without labeling it.
3. **Provide solution** — Summarize the fix in one short paragraph before the steps.
4. **Add steps** — Numbered, imperative instructions; include verification.
5. **Structured output** — Fill `templates/kb-article.md` completely; validate with `checklist.md`.

## Outputs

- Markdown file under `kb/articles/` using kebab-case filename.

## References

- Global rules: `../../../CLAUDE.md`
- Tone and voice: `../../../style/user-style.md`
