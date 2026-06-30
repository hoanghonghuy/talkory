# API S07 — Writing

Screen: [screens/S07-writing.md](../../screens/S07-writing.md)

## Endpoints

| Method | Path | Auth | Mô tả |
|---|---|---|---|
| GET | `/writing/characters` | optional | `?lang=&level=` |
| GET | `/writing/characters/:char` | optional | Stroke + radicals |
| POST | `/writing/attempts` | required | Lưu attempt |

## Database

- `stroke_data` (soft delete)
- `writing_attempts` (append-only)
