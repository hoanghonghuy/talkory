# Project brief

## Goals

- App học tiếng Nhật + tiếng Trung (Talkory)
- Lộ trình JLPT/HSK + IT Track riêng; dictionary/translate free (sau)
- Nội dung DB-driven, CMS admin, soft delete

## Stack

- Frontend: Vue 3 + Nuxt 4 (i18n vi/en)
- Backend: Go Gin + pgx (SQL tự viết)
- DB: PostgreSQL (`deleted_at` soft delete)
- AI: Gemini + OpenAI-compatible
- Logging: slog + Sentry/PostHog (phase sau)

## Constraints

- Spec: `docs/spec/` — screens = frontend only
- Pinia/composable spec: cập nhật sau khi code

## Spec

[docs/spec/README.md](../docs/spec/README.md)
