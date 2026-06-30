# Monetization & Quota

## Mô hình

**Freemium** — free có quảng cáo rewarded; trả phí bỏ giới hạn AI và mở khóa level cao.

## Bảng quy tắc (đã chốt)

| Hạng mục | Free | Paid / Reward |
|---|---|---|
| Level N5 + HSK1 | Toàn bộ module v1, kể cả luyện viết | — |
| Level N4+ / HSK2+ | Khóa | Subscription **hoặc** rewarded video (mở **1 ngày**) |
| AI tutor | **5 lần/ngày** | Unlimited (subscription) **hoặc** +5 lần/video rewarded |
| Luyện viết chữ | Free mọi level đã mở | — |
| Guest (chưa đăng ký) | ~**2 bài** N5/HSK1 | Sau đó bắt đăng ký để sync |

## Rewarded video

| Hành động | Phần thưởng |
|---|---|
| Xem 1 rewarded video | +5 lượt AI **và/hoặc** mở level cao 1 ngày (tùy context UI) |
| Phase sau | Interstitial sau mỗi N bài hoàn thành (N TBD) |

## Subscription (chi tiết TBD)

- Bỏ giới hạn AI/ngày
- Mở level cao vĩnh viễn
- Bỏ quảng cáo (khi có interstitial)

## DB entities liên quan

- `user_subscriptions` — trạng thái paid
- `user_ai_quota` — lượt AI còn lại hôm nay + bonus từ video
- `user_level_unlocks` — level cao mở tạm (expires_at)
- `reward_transactions` — log xem video → nhận thưởng

Xem chi tiết: [database/schema.md](../database/schema.md)
