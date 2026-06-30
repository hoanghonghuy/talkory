# API S08 — AI Tutor

Screen: [screens/S08-ai-tutor.md](../../screens/S08-ai-tutor.md)

## Endpoints

| Method | Path | Auth | Mô tả |
|---|---|---|---|
| GET | `/ai/quota` | required | 5/ngày + bonus |
| POST | `/ai/explain` | required | |
| POST | `/ai/correct` | required | |
| POST | `/ai/exercise` | required | |

## Service

- `AIService` — quota check (transaction) → `AIProvider`
- Log `ai_usage_logs` + slog

## Quota

- Free: **5**/ngày; reward: **+5**; paid: unlimited

## Database

- `user_ai_quota`, `ai_usage_logs`

**Không** dùng chung route với `/dictionary` hoặc `/translate`.
