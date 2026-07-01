# UI mockups — Talkory

> **Nguồn thiết kế:** HTML mockup tay trong `docs/mockups/` — bám `DESIGN.md` + `docs/spec/screens/`.  
> **Tham khảo UI/UX:** [ui-inspiration.md](./ui-inspiration.md).  
> **Không dùng Stitch** (đã bỏ).

## Cấu trúc thư mục

```
docs/mockups/
├── index.html          ← mục lục mở nhanh (bắt đầu tại đây)
├── desktop/            ← ≥1024px, sidebar 240px
├── tablet/             ← ~768px, sidebar 200px (bản desktop thu gọn)
└── mobile/             ← ~390px, bottom nav 5 item
```

**Đặt tên file:** `S{nn}-{slug}.html` (không suffix `-desktop` — thư mục đã chỉ rõ device).

**Asset mascot:** `../../assets/mascots/` (từ mọi file trong `desktop|tablet|mobile/`).

## Mục lục nhanh

Mở [index.html](../../mockups/index.html) trong trình duyệt.

| Hub | Link |
|---|---|
| Desktop | [desktop/S03-dashboard.html](../../mockups/desktop/S03-dashboard.html) |
| Tablet | [tablet/S03-dashboard.html](../../mockups/tablet/S03-dashboard.html) |
| Mobile | [mobile/S03-dashboard.html](../../mockups/mobile/S03-dashboard.html) |

## Danh sách đầy đủ (15 màn × 3 device = 45 file)

| Spec | Desktop | Tablet | Mobile | Ghi chú |
|---|---|---|---|---|
| S01 Login | [desktop/S01-auth-login.html](../../mockups/desktop/S01-auth-login.html) | [tablet/…](../../mockups/tablet/S01-auth-login.html) | [mobile/…](../../mockups/mobile/S01-auth-login.html) | OAuth, guest |
| S01 Register | [desktop/S01-auth-register.html](../../mockups/desktop/S01-auth-register.html) | [tablet/…](../../mockups/tablet/S01-auth-register.html) | [mobile/…](../../mockups/mobile/S01-auth-register.html) | Merge guest |
| S02 Picker | [desktop/S02-placement-picker.html](../../mockups/desktop/S02-placement-picker.html) | [tablet/…](../../mockups/tablet/S02-placement-picker.html) | [mobile/…](../../mockups/mobile/S02-placement-picker.html) | JP / CN |
| S02 Question | [desktop/S02-placement-question.html](../../mockups/desktop/S02-placement-question.html) | [tablet/…](../../mockups/tablet/S02-placement-question.html) | [mobile/…](../../mockups/mobile/S02-placement-question.html) | Focus |
| S02 Result | [desktop/S02-placement-result.html](../../mockups/desktop/S02-placement-result.html) | [tablet/…](../../mockups/tablet/S02-placement-result.html) | [mobile/…](../../mockups/mobile/S02-placement-result.html) | Level N4 |
| S03 Dashboard | [desktop/S03-dashboard.html](../../mockups/desktop/S03-dashboard.html) | [tablet/…](../../mockups/tablet/S03-dashboard.html) | [mobile/…](../../mockups/mobile/S03-dashboard.html) | Hub chính |
| S04 Curriculum | [desktop/S04-curriculum.html](../../mockups/desktop/S04-curriculum.html) | [tablet/…](../../mockups/tablet/S04-curriculum.html) | [mobile/…](../../mockups/mobile/S04-curriculum.html) | JLPT tree |
| S05 Lesson | [desktop/S05-lesson.html](../../mockups/desktop/S05-lesson.html) | [tablet/…](../../mockups/tablet/S05-lesson.html) | [mobile/…](../../mockups/mobile/S05-lesson.html) | Blocks |
| S06 SRS | [desktop/S06-srs.html](../../mockups/desktop/S06-srs.html) | [tablet/…](../../mockups/tablet/S06-srs.html) | [mobile/…](../../mockups/mobile/S06-srs.html) | Rating bar |
| S07 Writing | [desktop/S07-writing.html](../../mockups/desktop/S07-writing.html) | [tablet/…](../../mockups/tablet/S07-writing.html) | [mobile/…](../../mockups/mobile/S07-writing.html) | Canvas |
| S08 AI Tutor | [desktop/S08-ai-tutor.html](../../mockups/desktop/S08-ai-tutor.html) | [tablet/…](../../mockups/tablet/S08-ai-tutor.html) | [mobile/…](../../mockups/mobile/S08-ai-tutor.html) | Chat |
| S09 IT | [desktop/S09-it-track.html](../../mockups/desktop/S09-it-track.html) | [tablet/…](../../mockups/tablet/S09-it-track.html) | [mobile/…](../../mockups/mobile/S09-it-track.html) | Peach tint |
| S10 Premium | [desktop/S10-rewards.html](../../mockups/desktop/S10-rewards.html) | [tablet/…](../../mockups/tablet/S10-rewards.html) | [mobile/…](../../mockups/mobile/S10-rewards.html) | Plans |
| S11 Settings | [desktop/S11-settings.html](../../mockups/desktop/S11-settings.html) | [tablet/…](../../mockups/tablet/S11-settings.html) | [mobile/…](../../mockups/mobile/S11-settings.html) | Themes |
| S12 Admin | [desktop/S12-admin.html](../../mockups/desktop/S12-admin.html) | [tablet/…](../../mockups/tablet/S12-admin.html) | [mobile/…](../../mockups/mobile/S12-admin.html) | CMS phase sau |

## Quy tắc layout

| Device | AppShell | Focus màn (lesson, placement, SRS, writing) |
|---|---|---|
| Desktop | Sidebar 240px + main max 1120px | Không sidebar |
| Tablet | Sidebar 200px + main | Không sidebar |
| Mobile | Bottom nav 5 item + `safe-area-inset` | Không bottom nav |

- **Token:** CSS variables từ `DESIGN.md`
- **Auth:** centered, không shell
- Link nội bộ: cùng thư mục device (`S05-lesson.html`, không cross desktop↔mobile)

## Khi code Nuxt

Mockup = tham chiếu layout; implement theo `screens/` + `data-theme` CSS variables.
