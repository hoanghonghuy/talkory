# Soft Delete

## Nguyên tắc

- **Xóa mềm** — set `deleted_at = now()`, không `DELETE` cứng trên entity nội dung
- Mọi query **public/user-facing** mặc định: `WHERE deleted_at IS NULL`
- Admin có thể `?include_deleted=true` để xem/khôi phục
- **Không** soft-delete bảng audit/ledger

## Bảng có `deleted_at`

| Bảng | Ghi chú |
|---|---|
| `levels` | |
| `units` | |
| `lessons` | |
| `lesson_blocks` | |
| `content_translations` | Khi replace bản dịch, soft-delete bản cũ |
| `vocab_entries` | Admin xóa từ khỏi curriculum |
| `it_modules` | |
| `it_lessons` | |
| `it_lesson_blocks` | |
| `stroke_data` | |
| `ai_content_drafts` | |
| `dictionary_entries` | Phase dictionary |
| `users` | Xóa tài khoản (GDPR phase sau) |

## Bảng KHÔNG soft-delete (append-only)

| Bảng | Lý do |
|---|---|
| `review_logs` | Audit SRS |
| `reward_transactions` | Ledger monetization |
| `user_progress` | Lịch sử học |
| `placement_results` | Kết quả test |
| `import_jobs` | Log import |
| `ai_usage_logs` | Audit AI |
| `writing_attempts` | Lịch sử luyện viết |

## SQL convention

```sql
-- Repository mặc định
SELECT ... FROM lessons
WHERE id = $1 AND deleted_at IS NULL;

-- Soft delete
UPDATE lessons SET deleted_at = now(), updated_at = now()
WHERE id = $1 AND deleted_at IS NULL;

-- Restore (admin)
UPDATE lessons SET deleted_at = NULL, updated_at = now()
WHERE id = $1;
```

## Index

```sql
CREATE INDEX idx_lessons_active ON lessons(unit_id, status, sort_order)
  WHERE deleted_at IS NULL;
```

Helper Go: `pkg/pgutil/soft_delete.go` — constant `ActiveOnly = "deleted_at IS NULL"`.
