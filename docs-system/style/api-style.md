# API Documentation Style

**Goal:** Concise, technical reference that mirrors OpenAPI and stays easy to scan.

## Voice and tone

- Use **third person** or neutral imperative for procedures (“Returns…”, “Send…”).
- Prefer **present tense** for behavior (“The endpoint validates…”).
- Be **precise** with types, required fields, and status codes.

## Formatting

- Use tables for parameters, headers, and error matrices.
- Show HTTP examples with realistic JSON; align field names with the spec.
- Name schemas as they appear in OpenAPI (`User`, `Error`, etc.).

## Terminology

- Say **endpoint** or **operation** consistently; define **base URL** once per doc set if needed.
- Use **client error** / **server error** when grouping 4xx / 5xx.
- Do not rename JSON properties in prose; match the spec exactly.

## Prohibited

- Undocumented fields or codes not in OpenAPI (unless explicitly flagged as draft).
- Vague errors (“Something went wrong”) without mapping to documented responses.
