# S10 — Rewards & Subscription

> Frontend only. API: [backend/api/S10-rewards.md](../backend/api/S10-rewards.md)

## Route & Layout

| UI | Mô tả |
|---|---|
| Modal `UnlockLevel` | Trigger từ S04 |
| Modal `AIQuotaExhausted` | Trigger từ S08 |
| Page `/premium` | Bảng giá |

## Components

| Component | Vai trò |
|---|---|
| `RewardVideoButton` | Xem video → +5 AI hoặc mở level 1 ngày |
| `SubscribePlanCard` | Monthly/yearly |
| `UnlockSummary` | "Mở N4 đến 12/07" |
| `AdPlaceholder` | SDK ads — integrate phase sau |

## UI States

| State | Hiển thị |
|---|---|
| `ad_loading` | Spinner video |
| `ad_failed` | Retry |
| `reward_granted` | Toast thành công |
| `checkout` | Redirect payment (TBD) |

## Luồng người dùng

1. Level khóa → chọn video hoặc subscribe
2. Hết AI → tương tự
3. Video xong → refresh quota / unlock UI

## Phase sau

- Interstitial sau mỗi N bài — không spec UI chi tiết v1
