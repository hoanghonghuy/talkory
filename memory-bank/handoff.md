# Handoff — Talkory (cập nhật sau phase spec)

## Đọc trước khi làm việc

1. **[docs/spec/README.md](../docs/spec/README.md)** — mục lục spec sản phẩm
2. **[docs/spec/overview.md](../docs/spec/overview.md)** — tầm nhìn, stack, module v1
3. **[docs/DESIGN.md](../docs/DESIGN.md)** — design system FE (Notion + MongoDB University)
4. **[docs/spec/architecture.md](../docs/spec/architecture.md)** — patterns BE/FE

## Quyết định đã chốt (không cần hỏi lại)

| Chủ đề | Quyết định |
|---|---|
| Ngôn ngữ học | JP + CN song song; UI vi/en |
| Lộ trình | JLPT + HSK 3.0 (mặc định); IT track **riêng biệt** |
| Data | PostgreSQL, CMS admin, **không** hardcode UI |
| Backend | Go Gin + **pgx SQL tự viết** — không ORM, không Node v1 |
| Frontend | Nuxt 4; screens spec = FE only |
| Freemium | N5+HSK1 free; N4+/HSK2+ pay hoặc video 1 ngày |
| AI | 5 lần/ngày free; +5/video; Gemini + OpenAI-compatible |
| Guest | ~2 bài trước khi bắt đăng ký |
| Writing | Free |
| Dictionary/translate | AI tra từ only v1; dịch Google→MS fallback; popover 2 tab — xem `references/read-frog.md` |
| Soft delete | `deleted_at` trên entity CMS |
| Logging | slog + request ID từ v1 |
| Mascot | **Sakko (nữ) + Longmi (nam, rồng)** — PNG `docs/assets/mascots/` |
| Themes | Palette × light/dark — user chọn trong Settings |
| Spec format | `docs/spec/` — **không** OpenSpec product |
| UI mockups | HTML tay trong `docs/mockups/` — checklist `docs/spec/references/mockups.md` (không dùng Stitch) |

## Chưa chốt (TBD)

- IT track freemium (module 1 free hay toàn bộ?)
- Giá subscription / payment provider
- Interstitial ads: N bài = 1 quảng cáo
- Clone dự án tham khảo dictionary — **`temp/read-frog`** → `docs/spec/references/read-frog.md`

## Trạng thái code

**Chưa có code app** — chỉ docs/spec + memory-bank. Bước tiếp: migration SQL hoặc scaffold BE/FE.

## Ghi chú phiên

- User muốn dùng Context7 khi tra tài liệu kỹ thuật
- Pinia/store spec — bổ sung **sau khi code**
