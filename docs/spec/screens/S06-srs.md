# S06 — SRS Review

> Frontend only. API: [backend/api/S06-srs.md](../backend/api/S06-srs.md)

## Route & Layout

| Route | Layout |
|---|---|
| `/review` | Focus mode |
| `/review/settings` | Filter deck |

## Components

| Component | Vai trò |
|---|---|
| `ReviewSessionHeader` | Còn X thẻ |
| `FlashcardFront` | Từ/kanji |
| `FlashcardBack` | Nghĩa, reading — tap để lật |
| `RatingBar` | Again / Hard / Good / Easy |
| `DeckFilter` | curriculum / IT / all |
| `SessionSummary` | Kết thúc session |

## UI States

| State | Hiển thị |
|---|---|
| `empty` | "Không có thẻ cần ôn" + CTA học bài mới |
| `front` | Mặt trước |
| `back` | Mặt sau + rating buttons |
| `submitting` | Gửi rating |
| `done` | Summary |

## Luồng người dùng

1. Vào từ dashboard hoặc nav
2. Lật thẻ → chọn rating
3. Hết queue → summary + streak update

## Tương tác & Edge cases

- Undo rating — không có v1 (tránh phức tạp FSRS)
- Keyboard shortcut 1–4 cho rating (desktop)
