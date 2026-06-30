# API S02 — Placement

Screen: [screens/S02-placement.md](../../screens/S02-placement.md)

## Endpoints

| Method | Path | Auth | Mô tả |
|---|---|---|---|
| GET | `/placement/:lang/questions` | optional | Bộ câu hỏi |
| POST | `/placement/:lang/submit` | optional | `{ answers }` → level |
| GET | `/placement/:lang/result` | optional | Kết quả gần nhất |

## Database

- `placement_results` (append-only)
- `lesson_blocks` — type placement
- `content_translations`
