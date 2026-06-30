# API S04 — Curriculum

Screen: [screens/S04-curriculum.md](../../screens/S04-curriculum.md)

## Endpoints

| Method | Path | Auth | Mô tả |
|---|---|---|---|
| GET | `/curricula/:lang` | optional | Metadata |
| GET | `/curricula/:lang/levels` | optional | + `is_unlocked` |
| GET | `/levels/:id/units` | optional | |
| GET | `/units/:id/lessons` | optional | + progress |

## Service

- `AccessService.CanAccessLevel()` — free / subscription / `user_level_unlocks`

## Database

- `languages`, `curricula`, `levels`, `units`, `lessons` — soft delete
- `user_progress`, `user_level_unlocks`, `user_subscriptions`
