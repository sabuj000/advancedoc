# Example: POST /users

This example demonstrates a filled endpoint doc aligned with `api/specs/openapi.yaml` for `POST /users`.

---

# Create user

## Summary

Creates a new user record. Use this after you collect a unique email and display name. The server assigns the user `id` and timestamps.

## Endpoint

| Property | Value |
|----------|--------|
| Method | `POST` |
| Path | `/users` |

## Request

### Headers

| Header | Required | Description |
|--------|----------|-------------|
| `Content-Type` | Yes | Must be `application/json` |

### Path parameters

None.

### Query parameters

None.

### Body

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `email` | string (email) | Yes | Unique email for the user. |
| `name` | string | Yes | Display name. |

## Response

### Success

**Status:** `201`

Returns the created user object including server-generated fields.

| Field | Type | Description |
|-------|------|-------------|
| `id` | string (uuid) | Unique identifier. |
| `email` | string | Email as stored. |
| `name` | string | Display name. |
| `createdAt` | string (date-time) | Creation timestamp (ISO 8601). |

## Errors

| Status | Condition | Response / notes |
|--------|-----------|------------------|
| `400` | Invalid or missing body fields | Error body per spec `Error` schema; `code` may be `validation_error`. |
| `409` | Email already exists | Error body; `code` may be `conflict`. |

## Examples

### Request

```http
POST /users HTTP/1.1
Content-Type: application/json

{
  "email": "jane@example.com",
  "name": "Jane Doe"
}
```

### Response

```http
HTTP/1.1 201 Created
Content-Type: application/json

{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "email": "jane@example.com",
  "name": "Jane Doe",
  "createdAt": "2026-04-06T12:00:00Z"
}
```
