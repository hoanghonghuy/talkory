# API S01 — Auth & Guest

Screen: [screens/S01-auth.md](../../screens/S01-auth.md)

## Endpoints

| Method | Path | Auth | Mô tả |
|---|---|---|---|
| POST | `/auth/guest` | — | Tạo guest → `{ guest_token }` |
| POST | `/auth/register` | — | Email register |
| POST | `/auth/login` | — | JWT |
| GET | `/auth/google` | — | OAuth redirect |
| GET | `/auth/google/callback` | — | JWT |
| POST | `/auth/merge-guest` | required | Merge guest progress |

## Service / Repository

- `AuthService`, `UserRepository` — pgx
- `MergeGuestProgress` — transaction

## Database

- `users` (soft delete)
- `guest_sessions`
- `user_progress` — update `user_id` on merge
