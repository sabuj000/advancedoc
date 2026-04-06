# {{title}}

## Summary

{{One short paragraph: what this operation does and when to use it.}}

## Endpoint

| Property | Value |
|----------|--------|
| Method | `{{HTTP_METHOD}}` |
| Path | `{{/path/{param}}}` |

{{Optional: base URL or API version note if your product standard requires it.}}

## Request

### Headers

| Header | Required | Description |
|--------|----------|-------------|
| {{name}} | Yes/No | {{description}} |

### Path parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| {{name}} | {{type}} | Yes/No | {{description}} |

### Query parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| {{name}} | {{type}} | Yes/No | {{description}} |

### Body

{{Describe JSON/schema fields, required vs optional, constraints. Or state “No request body.”}}

## Response

### Success

**Status:** `{{2xx}}`

{{Describe response body fields or reference schema name from OpenAPI.}}

## Errors

| Status | Condition | Response / notes |
|--------|-----------|------------------|
| {{4xx/5xx}} | {{when}} | {{shape or message pattern}} |

## Examples

### Request

```http
{{HTTP_METHOD}} {{/path}} HTTP/1.1
{{headers}}
{{body if any}}
```

### Response

```http
HTTP/1.1 {{2xx}} OK
{{body}}
```
