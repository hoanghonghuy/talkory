# Logging & Observability

## Thư viện

- **Application logs:** Go `log/slog` — JSON ở production, text ở dev
- **Error tracking:** Sentry (phase tích hợp) — panic, 5xx
- **Product analytics:** PostHog (phase tích hợp) — funnel học tập

> Tách ba kênh — không dùng app log thay analytics.

## Request ID (bắt buộc v1)

```
Client → X-Request-ID (optional)
Middleware → UUID nếu thiếu → context
Response → echo X-Request-ID
Mọi slog line → attribute request_id
```

Middleware file: `internal/middleware/request_id.go`

## Context fields chuẩn

| Field | Nguồn |
|---|---|
| `request_id` | middleware |
| `user_id` | JWT (nullable) |
| `guest_session_id` | header (nullable) |
| `method`, `path` | Gin |
| `status` | HTTP code |
| `duration_ms` | middleware end |
| `locale` | Accept-Language |
| `error_code` | apperror |

## Log levels

| Level | Khi nào |
|---|---|
| DEBUG | Dev only — SQL trace (cẩn thận) |
| INFO | Request end, auth events, lesson complete, import done |
| WARN | Quota exceeded, level locked, AI retry |
| ERROR | DB fail, panic, AI total failure |

## Không log

- Password, JWT raw, API keys
- Full AI prompt/response ở prod (DEBUG: truncate 100 chars)
- Canvas stroke raw JSON (chỉ metadata)

## Bảng audit `ai_usage_logs`

| Cột | Kiểu |
|---|---|
| id | uuid PK |
| user_id | uuid FK |
| action | text — `explain` \| `correct` \| `exercise` |
| provider | text |
| latency_ms | int |
| tokens_in | int nullable |
| tokens_out | int nullable |
| request_id | text |
| created_at | timestamptz |

Không soft-delete — append-only.

## PostHog events (gợi ý)

```
lesson_started, lesson_completed
srs_review_submitted
ai_tutor_used
placement_completed
reward_video_watched
dictionary_lookup          # phase sau
```

## Middleware chain (Gin)

```
recover → request_id → logger → cors → auth (optional|required|admin)
```

`logger` middleware: log INFO khi request kết thúc với duration + status.
