# Talkory — Kiến trúc & Design Patterns

> Bám spec tại `docs/spec/`. Tham chiếu tinh thần từ `awesome-design-md` (Supabase, Sentry, PostHog, Notion, Stripe, Vercel).
> Design system FE (màu, typography, components): [../DESIGN.md](../DESIGN.md).

## Pattern stack

### Backend Go

```
HTTP → Middleware (request ID, auth, logging)
     → Handler (bind, validate, response)
     → Service (business rules)
     → Repository (pgx SQL)
     → PostgreSQL
```

| Pattern | Vai trò |
|---|---|
| **Layered Architecture** | Handler → Service → Repository |
| **Repository Pattern** | SQL tập trung theo domain, pgx thuần |
| **Provider Pattern** | `AIProvider`, `DictionaryProvider` (sau) |
| **AccessService** | Freemium, quota, level unlock — một chỗ |
| **Unit of Work** | Transaction cho SRS review, reward grant |
| **Soft Delete** | `deleted_at` trên entity CMS |
| **Block Content Model** | Notion-style: `block_type` + `payload` jsonb |
| **Staging → Publish** | import → draft → admin duyệt → published |

### Frontend Nuxt

| Pattern | Vai trò |
|---|---|
| **Domain folders** | Map spec màn hình S01–S12 |
| **Composables** | `useLesson()`, `useSRS()` — fetch + UI state |
| **Pinia (selective)** | Chỉ auth, locale, streak snapshot — **spec store cập nhật sau khi code** |
| **API client layer** | `lib/api/` — wrapper `$fetch`, token/guest/locale |
| **Block renderer registry** | 1 component / `block_type` |

## Cấu trúc thư mục

Xem chi tiết trong từng file:
- [backend/index.md](./backend/index.md)
- [backend/logging.md](./backend/logging.md)

```
backend/internal/
  handler/ service/ repository/ model/
  middleware/   # request_id, auth, slog, recover
  ai/           # AIProvider
  lexicon/      # DictionaryProvider — stub v1
  pkg/apperror/ pkg/pgutil/soft_delete.go

frontend/
  pages/ composables/ components/
  stores/       # Pinia — bổ sung sau khi code
  lib/api/
```

## Logging

Chi tiết: [backend/logging.md](./backend/logging.md)

- `log/slog` JSON ở production
- `X-Request-ID` xuyên suốt request → log → response header
- Tách: app logs (slog) | errors (Sentry) | product events (PostHog)

## Soft delete

Chi tiết: [database/soft-delete.md](./database/soft-delete.md)

## Dictionary & Translation (free — phase sau)

Chi tiết: [features/dictionary-translation.md](./features/dictionary-translation.md)

- Bounded context `lexicon` tách khỏi lesson
- Route `/api/v1/dictionary/*`, `/api/v1/translate` — **không** dùng AI quota

## Anti-patterns tránh

| Tránh | Thay bằng |
|---|---|
| ORM/GORM | pgx + repository |
| Freemium logic trong handler | `AccessService` |
| Hardcode bài trong Vue | Fetch từ API |
| God Pinia store | Composables + store selective |
| Dictionary dùng chung AI quota | Service + route riêng |
| Soft-delete bảng audit | Chỉ CMS entities |

## Thứ tự triển khai

1. Foundation: middleware, apperror, migration, soft delete, logging
2. Auth → curriculum read → progress
3. SRS + writing
4. Access gates + rewards
5. AI tutor
6. Admin CMS + import
7. Observability (Sentry, PostHog)
8. Lexicon stub
