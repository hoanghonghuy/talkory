# S08 — AI Tutor

> Frontend only. API: [backend/api/S08-ai-tutor.md](../backend/api/S08-ai-tutor.md)

## Route & Layout

| Route | Layout |
|---|---|
| `/ai` | Page chat độc lập |
| Drawer trong S05 | Side panel / bottom sheet mobile |

## Components

| Component | Vai trò |
|---|---|
| `AIModeToggle` | Tự do / Theo bài học |
| `ChatMessageList` | User + assistant bubbles |
| `ChatInput` | Textarea + gửi |
| `AIQuotaBadge` | "3/5 lượt" |
| `QuotaExhaustedModal` | → S10 rewards |
| `ContextChip` | Hiển thị lesson đang gắn (mode theo bài) |

## UI States

| State | Hiển thị |
|---|---|
| `idle` | Input sẵn sàng |
| `streaming` | Typing indicator (nếu stream) |
| `error` | Provider lỗi + request_id copy |
| `quota_empty` | Modal upgrade / video |

## Luồng người dùng

1. Chọn mode tự do hoặc theo bài
2. Gửi câu hỏi / paste câu cần sửa
3. Hết 5 lượt/ngày → modal S10
4. Quick actions: "Giải thích", "Sửa câu", "Tạo bài tập"

## Tương tác & Edge cases

- Khác với Dictionary/Translate (free) — không nhầm UI
- Markdown trong response assistant
