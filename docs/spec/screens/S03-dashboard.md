# S03 — Home / Dashboard

> Frontend only. API: [backend/api/S03-dashboard.md](../backend/api/S03-dashboard.md)

## Route & Layout

| Route | Layout |
|---|---|
| `/` | `default` — AppShell + sidebar/bottom nav |

## Components

| Component | Vai trò |
|---|---|
| `StreakCard` | Streak, daily goal ring |
| `ContinueLearningCard` | Bài dở JP / CN |
| `SRSDueBadge` | Số thẻ cần ôn → link `/review` |
| `ITTrackShortcut` | Card shortcut `/it` |
| `AIQuotaChip` | "AI: 3/5 hôm nay" |
| `UpgradeBanner` | Khi có level khóa |

## UI States

| State | Hiển thị |
|---|---|
| `loading` | Skeleton cards |
| `empty` | "Bắt đầu placement" hoặc chọn ngôn ngữ |
| `ready` | Đầy đủ widgets |

## Luồng người dùng

1. Hub chính sau đăng nhập
2. Tap ngôn ngữ → S04
3. Tap Ôn tập → S06
4. Tap IT → S09

## Tương tác & Edge cases

- Pull-to-refresh (mobile web) reload dashboard
- Daily goal đạt → confetti nhẹ / badge
