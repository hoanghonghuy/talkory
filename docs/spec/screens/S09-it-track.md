# S09 — IT Track

> Frontend only. API: [backend/api/S09-it-track.md](../backend/api/S09-it-track.md)

## Route & Layout

| Route | Layout |
|---|---|
| `/it` | Landing modules IT |
| `/it/:moduleSlug` | Danh sách bài |
| `/it/lesson/:id` | Player (tương tự S05, skin IT) |

## Components

| Component | Vai trò |
|---|---|
| `ITModuleCard` | Module vocabulary, meeting, docs… |
| `ITLessonList` | Bài trong module |
| `ITLessonPlayer` | Reuse `BlockRenderer` với data IT |
| `LanguageTag` | JA / ZH / EN trong bài |
| `OptionalHintBanner` | "Gợi ý: học song song N4" — không block |

## UI States

Giống S04/S05 — tree + lesson player.

## Luồng người dùng

1. Nav "IT" độc lập — **không** nằm trong `/learn/ja|zh`
2. Chọn module → lesson → học như curriculum
3. Complete → SRS deck `it_track`

## Tương tác & Edge cases

- Module chưa publish → 404 friendly
- Nội dung đa ngôn ngữ trong một bài — tab hoặc section rõ ràng
