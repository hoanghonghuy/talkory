# Backend API Index

Base: `/api/v1` — xem [../index.md](../index.md) cho quy ước chung.

| Screen | Spec | Prefix |
|---|---|---|
| S01 | [S01-auth.md](./S01-auth.md) | `/auth` |
| S02 | [S02-placement.md](./S02-placement.md) | `/placement` |
| S03 | [S03-dashboard.md](./S03-dashboard.md) | `/me` |
| S04 | [S04-curriculum.md](./S04-curriculum.md) | `/curricula` |
| S05 | [S05-lesson.md](./S05-lesson.md) | `/lessons` |
| S06 | [S06-srs.md](./S06-srs.md) | `/srs` |
| S07 | [S07-writing.md](./S07-writing.md) | `/writing` |
| S08 | [S08-ai-tutor.md](./S08-ai-tutor.md) | `/ai` |
| S09 | [S09-it-track.md](./S09-it-track.md) | `/it` |
| S10 | [S10-rewards.md](./S10-rewards.md) | `/rewards`, `/subscriptions` |
| S11 | [S11-settings.md](./S11-settings.md) | `/me` |
| S12 | [S12-admin.md](./S12-admin.md) | `/admin` |
| — | [S13-lexicon.md](./S13-lexicon.md) | `/dictionary`, `/translate` (phase sau, free) |

Logging: mọi handler qua middleware — [../logging.md](../logging.md).

Soft delete: query CMS `WHERE deleted_at IS NULL` — [../../database/soft-delete.md](../../database/soft-delete.md).
