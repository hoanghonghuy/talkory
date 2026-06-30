# API S05 — Lesson

Screen: [screens/S05-lesson.md](../../screens/S05-lesson.md)

## Endpoints

| Method | Path | Auth | Mô tả |
|---|---|---|---|
| GET | `/lessons/:id` | optional | Blocks + translations (locale) |
| POST | `/lessons/:id/start` | optional | Progress started |
| POST | `/lessons/:id/complete` | optional | Complete + SRS enqueue |
| POST | `/lessons/:id/exercises/:blockId/submit` | optional | Chấm bài cố định |

## Service

- Guest limit: increment `guest_sessions.lessons_completed`, block at 2

## Database

- `lessons`, `lesson_blocks`, `content_translations`, `vocab_entries`
- `user_progress`, `flashcards`, `guest_sessions`
