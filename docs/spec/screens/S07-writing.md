# S07 — Writing Practice

> Frontend only. API: [backend/api/S07-writing.md](../backend/api/S07-writing.md)

## Route & Layout

| Route | Layout |
|---|---|
| `/writing` | Grid chọn ký tự theo level |
| `/writing/:char` | Canvas full width |

## Components

| Component | Vai trò |
|---|---|
| `CharacterGrid` | Kanji/hanzi theo level |
| `StrokeOrderPlayer` | Animation SVG stroke order |
| `WritingCanvas` | Vẽ touch/mouse |
| `RadicalPanel` | Bộ thủ liên quan |
| `TypingPractice` | Romaji / pinyin input |
| `ClearCanvasButton` | Xóa và vẽ lại |

## UI States

| State | Hiển thị |
|---|---|
| `demo` | Đang play stroke order |
| `practice` | User vẽ |
| `submitted` | Đã lưu attempt (không chấm điểm v1) |

## Luồng người dùng

1. Từ bài học (writing_prompt) hoặc browse `/writing`
2. Xem stroke order → luyện viết
3. Optional: luyện gõ
4. **Luôn free** — không paywall

## Tương tác & Edge cases

- Canvas responsive — hỗ trợ mobile web touch
- Ký tự không có stroke data → message "Đang cập nhật"

## Future

- Handwriting recognition score — hiển thị sau khi có model
