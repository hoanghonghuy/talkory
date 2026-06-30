# API S10 — Rewards & Subscription

Screen: [screens/S10-rewards.md](../../screens/S10-rewards.md)

## Endpoints

| Method | Path | Auth | Mô tả |
|---|---|---|---|
| POST | `/rewards/video-complete` | required | Grant +5 AI hoặc level 1 ngày |
| GET | `/subscriptions/plans` | optional | |
| POST | `/subscriptions/checkout` | required | TBD Stripe |
| POST | `/subscriptions/webhook` | — | Provider webhook |

## Service

- `RewardService.Grant` — transaction, idempotency key (header)
- Level unlock: `expires_at = now() + 1 day`

## Database

- `reward_transactions`, `user_ai_quota`, `user_level_unlocks`, `user_subscriptions`
