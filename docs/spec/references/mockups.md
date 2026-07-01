# UI mockups — Talkory

> **Nguồn thiết kế:** HTML mockup tay trong `docs/mockups/` — bám `DESIGN.md` + `docs/spec/screens/`.  
> **Tham khảo UI/UX:** [ui-inspiration.md](./ui-inspiration.md) (Brottin, Mazii/Hanzii, LingoDeer, WaniKani, Anki, …).  
> **Không dùng Stitch** (đã bỏ — token lệch, layout/HTML không tin cậy).

## Mockup đã có

| Spec | File | Device | Ghi chú |
|---|---|---|---|
| S04 Curriculum | [S04-curriculum-desktop.html](../../mockups/S04-curriculum-desktop.html) | Desktop | `/learn/ja` — JLPT tree, N5 mở, Sakko production PNG |

Mở file `.html` trực tiếp trong trình duyệt để preview.

## Mockup cần làm (ưu tiên)

| Spec | Route | Ưu tiên |
|---|---|---|
| S01 Auth Login | `/auth/login` | Cao |
| S01 Auth Register | `/auth/register` | Cao |
| S02 Placement | `/onboarding/placement/*` | Cao |
| S03 Dashboard | `/` | Cao |
| S05 Lesson | `/learn/:lang/lesson/:id` | Cao |
| S06 SRS | `/review` | Trung bình |
| S07 Writing | `/writing` | Trung bình |
| S08 AI Tutor | `/tutor` | Trung bình |
| S09 IT Track | `/it` | Trung bình |
| S10 Rewards | `/rewards` | Thấp |
| S11 Settings | `/settings` | Trung bình |
| S12 Admin | `/admin` | Thấp (phase sau) |

Mỗi màn: desktop trước → tablet → mobile (khi cần).

## Quy tắc làm mockup

- **Token:** CSS variables từ `DESIGN.md` — không hardcode palette Stitch/MD3
- **Mascot:** `docs/assets/mascots/sakko-idle-transparent.png`, `longmi-idle-transparent.png`
- **Layout AppShell:**

```
sidebar fixed 240px
└─ div.ml-[240px].flex.flex-col.w-full
   ├─ header (optional)
   └─ main.flex-1 → max-w 1120px
```

- **Lesson / Placement focus:** không sidebar, progress top, content max-width 680px
- **Auth:** centered card, không sidebar
- File đặt tên: `docs/mockups/S{nn}-{slug}-{device}.html`

## Khi code Nuxt

Mockup = tham chiếu layout + component; implement theo spec `screens/` và design tokens thật (`data-theme`, CSS variables).
