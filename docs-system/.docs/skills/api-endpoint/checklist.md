# API Endpoint Doc — Checklist

Use before marking an endpoint doc complete.

- [ ] OpenAPI operation exists; path and method match this doc.
- [ ] **Summary** states purpose without contradicting the spec.
- [ ] **Endpoint** shows correct HTTP method and full path pattern.
- [ ] **Request** lists all path, query, and header parameters with required/optional and types.
- [ ] **Request** body matches OpenAPI `requestBody` (content types, schema, required fields).
- [ ] **Response** documents success code(s) and body shape (reference or inline from schema).
- [ ] **Errors** list documented error status codes and typical causes per spec.
- [ ] **Examples** include at least one valid request and matching success response.
- [ ] No parameters, fields, or status codes appear that are not in OpenAPI (unless explicitly marked “not yet in spec” with a ticket).
- [ ] Terminology matches `style/api-style.md`.
