# S04 — Curriculum Browser

> Frontend only. API: [backend/api/S04-curriculum.md](../backend/api/S04-curriculum.md)

## Route & Layout

| Route | Layout |
|---|---|
| `/learn/ja` | Tree JLPT |
| `/learn/zh` | Tree HSK (badge "HSK 3.0") |

## Components

| Component | Vai trò |
|---|---|
| `LevelAccordion` | N5→N1 / HSK1→6 |
| `UnitList` | Unit trong level |
| `LessonRow` | Icon type, progress check, lock |
| `LockOverlay` | Tap level khóa → mở modal S10 |
| `FreeBadge` / `PremiumBadge` | N5, HSK1 free |

## UI States

| State | Hiển thị |
|---|---|
| `locked` | Icon khóa, màu muted |
| `available` | Có thể tap |
| `in_progress` | Progress bar nhỏ |
| `completed` | Checkmark |
| `unlocked_temp` | Badge "Mở đến {date}" |

## Luồng người dùng

1. Duyệt level → unit → lesson
2. Level khóa → modal unlock (subscription / video)
3. Tap lesson → S05

## Tương tác & Edge cases

- Tab chuyển JP ↔ CN trên header
- Lesson đầu tiên highlighted "Tiếp theo"

## Future UI hook

- Tap từ trong preview → `DictionaryPopover` (phase sau, free)
