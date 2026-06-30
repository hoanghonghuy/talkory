# API S11 — Settings

Screen: [screens/S11-settings.md](../../screens/S11-settings.md)

## Endpoints

| Method | Path | Auth | Mô tả |
|---|---|---|---|
| GET | `/me` | required | Profile |
| PATCH | `/me` | required | `{ display_name, locale }` |
| PATCH | `/me/password` | required | |
| GET | `/me/subscription` | required | |

## Database

- `users`, `user_subscriptions`, `user_streaks`
