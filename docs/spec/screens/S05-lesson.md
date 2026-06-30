# S05 — Lesson Player

> Frontend only. API: [backend/api/S05-lesson.md](../backend/api/S05-lesson.md)

## Route & Layout

| Route | Layout |
|---|---|
| `/learn/:lang/lesson/:id` | `lesson` — minimal chrome, progress top |

## Components

| Component | Vai trò |
|---|---|
| `LessonProgressBar` | % blocks hoàn thành |
| `BlockRenderer` | Switch theo `block_type` |
| `TextBlock` | Markdown giải thích |
| `VocabListBlock` | Danh sách từ, tap → dictionary popover (sau) |
| `ExerciseBlock` | MCQ, fill-blank |
| `ReadingBlock` | Passage + câu hỏi |
| `WritingPromptBlock` | CTA → S07 |
| `LessonToolbar` | AI tutor, Complete |
| `GuestLimitModal` | Sau bài thứ 2 — bắt đăng ký |

## UI States

| State | Hiển thị |
|---|---|
| `loading` | Skeleton blocks |
| `block_active` | Một block tại một thời điểm hoặc scroll liên tục (TBD UX) |
| `exercise_feedback` | Đúng/sai + giải thích |
| `completing` | Animation hoàn thành |
| `guest_blocked` | Modal đăng ký |

## Luồng người dùng

1. Render blocks từ API theo thứ tự — **không hardcode nội dung**
2. Làm exercise → feedback
3. Complete → celebration → về curriculum hoặc bài tiếp
4. Mở AI drawer (S08) trong ngữ cảnh bài

## Tương tác & Edge cases

- Thoát giữa chừng → lưu progress started
- Block type lạ từ CMS → fallback "Unsupported block"

## Block renderer registry (frontend pattern)

Map `block_type` → component; thêm block mới = thêm component, không sửa page.
