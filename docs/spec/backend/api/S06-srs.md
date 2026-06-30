# API S06 — SRS

Screen: [screens/S06-srs.md](../../screens/S06-srs.md)

## Endpoints

| Method | Path | Auth | Mô tả |
|---|---|---|---|
| GET | `/srs/due` | required | `?deck=&limit=` |
| POST | `/srs/cards/:id/review` | required | `{ rating: 1-4 }` FSRS |
| GET | `/srs/stats` | required | |

## Service

- `SRSService` — FSRS + transaction (card + review_log + streak)

## Database

- `flashcards`, `review_logs`, `vocab_entries`
