# UI mockups — Talkory

> **Nguồn thiết kế:** HTML mockup tay trong `docs/mockups/` — bám `DESIGN.md` + `docs/spec/screens/`.  
> **Tham khảo UI/UX:** [ui-inspiration.md](./ui-inspiration.md).  
> **Không dùng Stitch** (đã bỏ).

## Cấu trúc thư mục

```
docs/mockups/
├── index.html          ← mục lục mở nhanh (bắt đầu tại đây)
├── scripts/            ← sync-devices.mjs (desktop → tablet/mobile)
├── desktop/            ← ≥1024px, sidebar 240px
├── tablet/             ← ~768px, sidebar 200px
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

## Core (15 màn × 3 device = 45 file)

| Spec | Desktop | Ghi chú |
|---|---|---|
| S01 Login | [S01-auth-login.html](../../mockups/desktop/S01-auth-login.html) | OAuth, guest |
| S01 Register | [S01-auth-register.html](../../mockups/desktop/S01-auth-register.html) | |
| S02 Picker / Question / Result | [picker](../../mockups/desktop/S02-placement-picker.html) · [question](../../mockups/desktop/S02-placement-question.html) · [result](../../mockups/desktop/S02-placement-result.html) | |
| S03 Dashboard | [S03-dashboard.html](../../mockups/desktop/S03-dashboard.html) | Hub chính |
| S04 Curriculum JA | [S04-curriculum.html](../../mockups/desktop/S04-curriculum.html) | JLPT tree |
| S05 Lesson | [S05-lesson.html](../../mockups/desktop/S05-lesson.html) | exercise_feedback |
| S06 SRS | [S06-srs.html](../../mockups/desktop/S06-srs.html) | back + rating |
| S07 Writing | [S07-writing.html](../../mockups/desktop/S07-writing.html) | `/writing/:char` |
| S08 AI Tutor | [S08-ai-tutor.html](../../mockups/desktop/S08-ai-tutor.html) | `/ai` |
| S09 IT | [S09-it-track.html](../../mockups/desktop/S09-it-track.html) | `/it` landing |
| S10 Premium | [S10-rewards.html](../../mockups/desktop/S10-rewards.html) | `/premium` |
| S11 Settings | [S11-settings.html](../../mockups/desktop/S11-settings.html) | |
| S12 Admin | [S12-admin.html](../../mockups/desktop/S12-admin.html) | lesson editor |

Tablet/mobile: cùng tên file trong `tablet/` và `mobile/`.

## Bổ sung (21 màn × 3 device = 63 file)

| Spec | File | Ghi chú |
|---|---|---|
| S10 | [S10-modal-unlock-level.html](../../mockups/desktop/S10-modal-unlock-level.html) | Modal từ S04 |
| S10 | [S10-modal-ai-quota.html](../../mockups/desktop/S10-modal-ai-quota.html) | Modal từ S08 |
| S05 | [S05-modal-guest-limit.html](../../mockups/desktop/S05-modal-guest-limit.html) | Sau bài 2 guest |
| S01 | [S01-auth-merge-guest.html](../../mockups/desktop/S01-auth-merge-guest.html) | Sau đăng ký |
| S03 | [S03-dashboard-empty.html](../../mockups/desktop/S03-dashboard-empty.html) | User mới |
| S04 | [S04-curriculum-zh.html](../../mockups/desktop/S04-curriculum-zh.html) | `/learn/zh` HSK |
| S05 | [S05-lesson-complete.html](../../mockups/desktop/S05-lesson-complete.html) | Celebration |
| S05+S08 | [S05-lesson-ai-drawer.html](../../mockups/desktop/S05-lesson-ai-drawer.html) | Drawer trong bài |
| S06 | [S06-srs-front.html](../../mockups/desktop/S06-srs-front.html) | Mặt trước |
| S06 | [S06-srs-empty.html](../../mockups/desktop/S06-srs-empty.html) | Không có thẻ |
| S06 | [S06-srs-summary.html](../../mockups/desktop/S06-srs-summary.html) | Kết thúc session |
| S06 | [S06-review-settings.html](../../mockups/desktop/S06-review-settings.html) | `/review/settings` |
| S07 | [S07-writing-grid.html](../../mockups/desktop/S07-writing-grid.html) | `/writing` browse |
| S09 | [S09-it-module.html](../../mockups/desktop/S09-it-module.html) | `/it/:moduleSlug` |
| S09 | [S09-it-lesson.html](../../mockups/desktop/S09-it-lesson.html) | `/it/lesson/:id` |
| S11 | [S11-settings-account.html](../../mockups/desktop/S11-settings-account.html) | `/settings/account` |
| S11 | [S11-settings-guest.html](../../mockups/desktop/S11-settings-guest.html) | Guest |
| S12 | [S12-admin-curriculum.html](../../mockups/desktop/S12-admin-curriculum.html) | Tree CRUD |
| S12 | [S12-admin-it.html](../../mockups/desktop/S12-admin-it.html) | IT modules |
| S12 | [S12-admin-import.html](../../mockups/desktop/S12-admin-import.html) | Import jobs |
| S12 | [S12-admin-ai-drafts.html](../../mockups/desktop/S12-admin-ai-drafts.html) | Duyệt AI |

**Tổng:** 108 file HTML (+ `index.html`).

## Quy tắc layout

| Device | AppShell | Focus màn (lesson, placement, SRS, writing) |
|---|---|---|
| Desktop | Sidebar 240px + main max 1120px | Không sidebar |
| Tablet | Sidebar 200px + main | Không sidebar |
| Mobile | Bottom nav **4 item** + `safe-area-inset` | Không bottom nav |

- **Token:** CSS variables từ `DESIGN.md`
- **Auth / modal:** centered, không shell
- Link nội bộ: cùng thư mục device
- **Nav shell:** 4 item — Trang chủ · Học · Ôn tập · Cài đặt. IT/specialty track chỉ qua S03 dashboard.

## Sync tablet/mobile

Sau khi sửa desktop, chạy:

```bash
node docs/mockups/scripts/sync-devices.mjs [tên-file.html ...]
```

## Khi code Nuxt

Mockup = tham chiếu layout; implement theo `screens/` + `data-theme` CSS variables.

## Phase sau (chưa mockup)

- S10 `ad_loading`, checkout
- Dictionary popover (S04)
- S05 `reading_passage` block riêng (có thể gộp vào lesson player)
