# API S03 — Dashboard

Screen: [screens/S03-dashboard.md](../../screens/S03-dashboard.md)

## Endpoints

| Method | Path | Auth | Mô tả |
|---|---|---|---|
| GET | `/me/dashboard` | optional | Aggregate widgets |
| GET | `/me/streak` | required | Streak detail |
| PATCH | `/me/daily-goal` | required | `{ minutes }` |

## Database

- `user_streaks`, `user_progress`, `flashcards`, `user_ai_quota`, `lessons`
