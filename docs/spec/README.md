# Talkory — Product Specification

Tài liệu spec sản phẩm Talkory. **Không** dùng format OpenSpec.

## Cấu trúc

| Thư mục / file | Nội dung |
|---|---|
| [overview.md](./overview.md) | Tầm nhìn, stack, module |
| [architecture.md](./architecture.md) | Design patterns, folder structure |
| [monetization.md](./monetization.md) | Freemium, quota, reward |
| [content-strategy.md](./content-strategy.md) | JLPT/HSK, IT track, nguồn data |
| [screens/](./screens/) | **Frontend only** — UI, component, luồng người dùng |
| [backend/](./backend/) | API, logging, quy ước Go Gin + pgx |
| [backend/api/](./backend/api/) | Endpoints theo domain (map màn hình) |
| [database/](./database/) | Schema, soft delete |
| [features/](./features/) | Tính năng phase sau (dictionary, translation) |
| [../DESIGN.md](../DESIGN.md) | **Design system FE** — màu, typography, components |

## Quy ước spec màn hình (`screens/`)

**Chỉ mô tả frontend:**

1. Route & layout
2. Components
3. UI states (loading, empty, error…)
4. Luồng người dùng & tương tác
5. Edge cases

**Không ghi trong `screens/`:** API endpoints, bảng DB, Pinia store — xem `backend/api/` và `database/`. Store/composable sẽ **cập nhật spec sau khi code xong**.

## Liên kết chéo

```
screens/S05-lesson.md  →  backend/api/S05-lesson.md  →  database/schema.md
```
