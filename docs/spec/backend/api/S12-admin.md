# API S12 — Admin CMS

Screen: [screens/S12-admin.md](../../screens/S12-admin.md)

Auth: `role = admin`

## Endpoints

| Method | Path | Mô tả |
|---|---|---|
| CRUD | `/admin/levels`, `/units`, `/lessons` | Soft delete |
| CRUD | `/admin/lessons/:id/blocks` | |
| POST | `/admin/import` | `{ source }` |
| GET | `/admin/import/:id` | Job status |
| GET | `/admin/ai-drafts` | |
| POST | `/admin/ai-drafts/:id/approve` | → `content_translations` |
| CRUD | `/admin/it/*` | IT track |
| POST | `/admin/*/restore` | Set `deleted_at = NULL` |

Query `?include_deleted=true` cho list admin.

## Database

- Toàn bộ bảng CMS + `import_jobs`, `ai_content_drafts`
