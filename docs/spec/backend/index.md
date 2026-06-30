# Backend — Quy ước chung

## Stack

- **Go Gin** + **jackc/pgx/v5** — SQL tự viết, không ORM
- **log/slog** — structured logging ([logging.md](./logging.md))
- **PostgreSQL** — soft delete ([../database/soft-delete.md](../database/soft-delete.md))

## Kiến trúc

Handler → Service → Repository (pgx)

Chi tiết patterns: [../architecture.md](../architecture.md)

## Cấu trúc thư mục

```
backend/
  cmd/api/main.go
  internal/
    config/
    middleware/     # request_id, logger, auth, recover
    handler/
    service/        # access_service, srs_service, ai_service...
    repository/
    model/
    ai/             # AIProvider
    lexicon/        # DictionaryProvider (stub)
    pkg/apperror/
    pkg/pgutil/
  migrations/
```

## pgx example

```go
const q = `
  SELECT id, unit_id, slug, sort_order, status, created_at, updated_at
  FROM lessons
  WHERE id = $1 AND status = 'published' AND deleted_at IS NULL
`
```

- `context.Context` từ `c.Request.Context()`
- Transaction: `pool.Begin(ctx)` cho SRS, rewards, merge guest

## API conventions

| Item | Quy ước |
|---|---|
| Base path | `/api/v1` |
| Auth | `Authorization: Bearer <jwt>` |
| Guest | `X-Guest-Token` |
| Request ID | `X-Request-ID` echo |
| Locale | `Accept-Language: vi` \| `en` |
| Success | `{ "data": ... }` |
| Error | `{ "error": { "code", "message" } }` |

## API theo màn hình

→ [api/index.md](./api/index.md)

## AI Provider

```go
type AIProvider interface {
    ExplainGrammar(ctx context.Context, req ExplainRequest) (*AIResponse, error)
    CorrectSentence(ctx context.Context, req CorrectRequest) (*AIResponse, error)
    GenerateExercise(ctx context.Context, req ExerciseRequest) (*AIResponse, error)
}
```

Gemini + OpenAI-compatible via config.
