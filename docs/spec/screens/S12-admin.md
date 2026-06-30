# S12 — Admin CMS

> Frontend only. API: [backend/api/S12-admin.md](../backend/api/S12-admin.md)

## Route & Layout

| Route | Layout |
|---|---|
| `/admin` | `admin` — sidebar admin |
| `/admin/curriculum` | CRUD tree |
| `/admin/lessons/:id` | Block editor |
| `/admin/it` | IT modules |
| `/admin/import` | Import jobs |
| `/admin/ai-drafts` | Duyệt nội dung AI |

## Components

| Component | Vai trò |
|---|---|
| `CurriculumTreeEditor` | Level / unit / lesson drag-drop |
| `BlockEditor` | Thêm/sửa block, chọn type |
| `BlockTypePicker` | text, vocab_list, exercise… |
| `TranslationTabs` | vi / en per block |
| `PublishToggle` | draft ↔ published |
| `ImportJobPanel` | Trigger + progress |
| `AIDraftReview` | Approve / reject |
| `SoftDeleteRestore` | Xóa mềm + khôi phục (`include_deleted`) |

## UI States

| State | Hiển thị |
|---|---|
| `draft` | Badge vàng |
| `published` | Badge xanh |
| `deleted` | Strikethrough + nút Restore |

## Luồng người dùng

1. Import data → map vào curriculum
2. Soạn/sửa blocks + translations
3. AI draft → duyệt → publish
4. Xóa lesson → soft delete — user không thấy, admin có thể restore

## Tương tác & Edge cases

- Guard route — non-admin redirect
- Validate payload JSON trước save (Zod)
