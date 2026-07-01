# Screens Index

| ID | Màn hình | Route | Frontend spec | Backend API |
|---|---|---|---|---|
| S01 | Auth & Guest | `/auth/*` | [S01-auth.md](./S01-auth.md) | [api/S01-auth.md](../backend/api/S01-auth.md) |
| S02 | Placement | `/onboarding/placement` | [S02-placement.md](./S02-placement.md) | [api/S02-placement.md](../backend/api/S02-placement.md) |
| S03 | Dashboard | `/` | [S03-dashboard.md](./S03-dashboard.md) | [api/S03-dashboard.md](../backend/api/S03-dashboard.md) |
| S04 | Curriculum | `/learn/:lang` | [S04-curriculum.md](./S04-curriculum.md) | [api/S04-curriculum.md](../backend/api/S04-curriculum.md) |
| S05 | Lesson | `/learn/:lang/lesson/:id` | [S05-lesson.md](./S05-lesson.md) | [api/S05-lesson.md](../backend/api/S05-lesson.md) |
| S06 | SRS Review | `/review` | [S06-srs.md](./S06-srs.md) | [api/S06-srs.md](../backend/api/S06-srs.md) |
| S07 | Writing | `/writing` | [S07-writing.md](./S07-writing.md) | [api/S07-writing.md](../backend/api/S07-writing.md) |
| S08 | AI Tutor | `/ai` | [S08-ai-tutor.md](./S08-ai-tutor.md) | [api/S08-ai-tutor.md](../backend/api/S08-ai-tutor.md) |
| S09 | IT Track | `/it` | [S09-it-track.md](./S09-it-track.md) | [api/S09-it-track.md](../backend/api/S09-it-track.md) |
| S10 | Rewards | modal, `/premium` | [S10-rewards.md](./S10-rewards.md) | [api/S10-rewards.md](../backend/api/S10-rewards.md) |
| S11 | Settings | `/settings` | [S11-settings.md](./S11-settings.md) | [api/S11-settings.md](../backend/api/S11-settings.md) |
| S12 | Admin CMS | `/admin/*` | [S12-admin.md](./S12-admin.md) | [api/S12-admin.md](../backend/api/S12-admin.md) |

## Layout chung

- **AppShell** (`default`): sidebar desktop / bottom nav mobile
- **lesson**: focus mode
- **admin**: sidebar quản trị
- **auth**: centered, không nav chính

Nav: Home, Learn, Review, Settings + floating AI (optional)

> **Nguyên tắc IA:** Chỉ 4 mục vòng học chính trong shell. Track chuyên đề (IT, du lịch, business…) **không** là nav item — khám phá qua **S03 Dashboard** (catalog card), giống MongoDB University / Brottin hub.

> Pinia stores, composables — spec bổ sung sau khi implement.
