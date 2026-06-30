# API S09 — IT Track

Screen: [screens/S09-it-track.md](../../screens/S09-it-track.md)

## Endpoints

| Method | Path | Auth | Mô tả |
|---|---|---|---|
| GET | `/it/modules` | optional | |
| GET | `/it/modules/:slug/lessons` | optional | |
| GET | `/it/lessons/:id` | optional | Blocks |
| POST | `/it/lessons/:id/complete` | required | SRS deck `it_track` |

## Database

- `it_modules`, `it_lessons`, `it_lesson_blocks` — soft delete
- `content_translations`, `user_progress.it_lesson_id`, `flashcards`

Tách biệt hoàn toàn khỏi bảng `lessons` chuẩn.
