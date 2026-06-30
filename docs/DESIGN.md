---
version: 1.0.0
name: Talkory-design-system
description: |
  Design system cho Talkory — app học tiếng Nhật & Trung cho người Việt.
  **Nền chính: Notion** — block-based lesson, admin CMS, pastel phân loại level.
  **Bổ trợ học tập: MongoDB University** (course catalog, streak/progress green),
  **Mintlify** (prose đọc ngữ pháp), **Spotify** (font stack CJK).
  Tham chiếu nguồn: awesome-design-md/design-md/

sources:
  primary: notion
  learning_catalog: mongodb
  lesson_prose: mintlify
  cjk_typography: spotify
  forms_shell: cal

colors:
  # — Primary (Notion purple — CTA chính, brand)
  primary: "#5645d4"
  primary-pressed: "#4534b3"
  primary-deep: "#3a2a99"
  on-primary: "#ffffff"

  # — Progress & success (MongoDB green — streak, hoàn thành bài, SRS Good/Easy)
  success: "#00a35c"
  success-bright: "#00ed64"
  success-soft: "#c3f0d2"
  on-success: "#001e2b"

  # — Semantic
  link: "#0075de"
  warning: "#dd5b00"
  error: "#e03131"

  # — Canvas & surfaces (Notion warm neutrals)
  canvas: "#ffffff"
  surface: "#f6f5f4"
  surface-soft: "#fafaf9"
  hairline: "#e5e3df"
  hairline-strong: "#c8c4be"

  # — Ink
  ink-deep: "#000000"
  ink: "#1a1a1a"
  charcoal: "#37352f"
  slate: "#5d5b54"
  steel: "#787671"
  muted: "#bbb8b1"
  on-dark: "#ffffff"

  # — Language & track tints (Notion pastel cards)
  lang-ja: "#e6e0f5"          # lavender — JLPT
  lang-ja-accent: "#7b3ff2"
  lang-zh: "#dcecfa"           # sky — HSK
  lang-zh-accent: "#2a9d99"
  lang-it: "#ffe8d4"           # peach — IT track
  lang-it-accent: "#dd5b00"
  card-mint: "#d9f3e1"         # N5 / HSK1 free badge
  card-yellow: "#fef7d6"       # streak highlight

  # — Lesson focus mode (nhẹ hơn Spotify dark — đọc lâu không mỏi mắt)
  focus-canvas: "#fafaf9"
  focus-ink: "#37352f"

typography:
  # UI: Inter (≈ Notion Sans) — hỗ trợ tiếng Việt tốt
  font-ui: "Inter, 'Noto Sans', system-ui, -apple-system, sans-serif"

  # CJK: stack từ Spotify — flashcard, writing, dictionary popover
  font-cjk: "Inter, 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Noto Sans JP', 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', Meiryo, sans-serif"

  # Code / IT track
  font-mono: "JetBrains Mono, ui-monospace, Menlo, Consolas, monospace"

  display-lg:
    fontFamily: "{typography.font-ui}"
    fontSize: 36px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.5px
  heading-1:
    fontFamily: "{typography.font-ui}"
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.25
  heading-2:
    fontFamily: "{typography.font-ui}"
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.30
  heading-3:
    fontFamily: "{typography.font-ui}"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.40
  body-lg:
    fontFamily: "{typography.font-ui}"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.55
  body-md:
    fontFamily: "{typography.font-ui}"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.55
  body-sm:
    fontFamily: "{typography.font-ui}"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.50
  caption:
    fontFamily: "{typography.font-ui}"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.40
  micro:
    fontFamily: "{typography.font-ui}"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.40
  button-md:
    fontFamily: "{typography.font-ui}"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.30
  # Kanji/Hanzi display — flashcard front, writing canvas label
  cjk-display:
    fontFamily: "{typography.font-cjk}"
    fontSize: 48px
    fontWeight: 500
    lineHeight: 1.20
  # Mintlify-inspired prose — grammar blocks, reading passages
  prose:
    fontFamily: "{typography.font-ui}"
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.65
    maxWidth: 680px

rounded:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  pill: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 64px

shadows:
  card: "0 1px 3px rgba(0,0,0,0.06)"
  elevated: "0 4px 12px rgba(0,0,0,0.08)"
  modal: "0 8px 24px rgba(0,0,0,0.12)"

---

# Talkory — Design System

## 1. Lý do chọn (từ 74 bộ design)

| Xếp hạng | Nguồn | Điểm | Phù hợp Talkory |
|---|---|---|---|
| **1 — Nền chính** | **Notion** | Block UI, pastel cards, CMS, đọc dài | Lesson blocks, admin S12, phân level bằng màu |
| 2 | MongoDB University | Course catalog, tag màu, green progress | Dashboard, curriculum tree, streak |
| 3 | Mintlify | Prose docs, sidebar nav | Grammar/reading blocks |
| 4 | Cal.com | Form sạch, Inter | Auth, settings |
| 5 | Spotify | CJK font fallback | Flashcard, writing |
| Loại | Linear, Spotify dark only | Dark-first | Mỏi mắt khi đọc grammar dài |
| Loại | Duolingo-style (không có) | Gamified neon | Không có trong bộ tham chiếu |

**Kết luận:** Không có bộ nào là app học ngôn ngữ hoàn chỉnh. **Notion + MongoDB University** là cặp phù hợp nhất cho Talkory.

---

## 2. Áp dụng theo màn hình (map spec)

| Màn hình | Design cue |
|---|---|
| S03 Dashboard | MongoDB course cards + Notion `surface` |
| S04 Curriculum | Mintlify sidebar tree + Notion pastel level cards |
| S05 Lesson | Notion blocks + Mintlify `prose` |
| S06 SRS | Spotify CJK `cjk-display` + minimal chrome |
| S07 Writing | Focus canvas, hairline grid, CJK large |
| S08 AI Tutor | Notion chat bubbles, `primary` user bubble |
| S09 IT Track | `lang-it` tint + `font-mono` cho code snippets |
| S10 Rewards | MongoDB green pill CTA |
| S12 Admin | Notion CMS — block editor, property tags |

---

## 3. Components

### Buttons

| Variant | Background | Text | Radius |
|---|---|---|---|
| Primary | `{colors.primary}` | white | `md` (8px) |
| Success | `{colors.success-bright}` | `{colors.on-success}` | `pill` |
| Secondary | transparent | `{colors.ink}` | `md` + border hairline |
| Ghost | transparent | `{colors.slate}` | `sm` |

### Cards

| Variant | Dùng cho |
|---|---|
| `card-base` | Dashboard widget — white + hairline border + `shadows.card` |
| `card-feature-mint` | N5/HSK1 free |
| `card-feature-lavender` | JLPT level |
| `card-feature-sky` | HSK level |
| `card-feature-peach` | IT module |
| `flashcard` | White, `rounded.lg`, `shadows.elevated`, min-height 200px |

### Level color map

| Level | Background | Accent |
|---|---|---|
| N5 / HSK1 | `{colors.card-mint}` | `{colors.success}` |
| N4–N2 / HSK2–4 | `{colors.lang-ja}` or `{colors.lang-zh}` | level accent |
| N1 / HSK5–6 | lavender/sky đậm hơn | `{colors.primary}` |
| IT modules | `{colors.lang-it}` | `{colors.lang-it-accent}` |

### Block types (lesson renderer)

| block_type | Style |
|---|---|
| `text` | Mintlify prose — max-width 680px, line-height 1.65 |
| `vocab_list` | Notion database-row — compact rows, tap → dictionary popover |
| `exercise` | Card-base + primary submit |
| `reading_passage` | Prose + subtle `surface` background |
| `writing_prompt` | CTA → S07, `cjk-display` preview |

---

## 4. Layout

### AppShell (default)

- Sidebar desktop 240px — `surface` background
- Bottom nav mobile — 5 items, icon + micro label
- Content max-width 1120px centered

### Lesson focus (`layout: lesson`)

- Ẩn sidebar; chỉ progress bar + toolbar
- Background `{colors.focus-canvas}`

### Admin

- Sidebar 260px — Notion-style nav groups
- Editor 2-column: block list | preview (optional phase sau)

---

## 5. Dark mode

**v1: Light only.** Token `canvas-night` dự phòng phase sau — không implement v1.

---

## 6. Tailwind / Nuxt mapping (khi code)

```ts
// nuxt.config / tailwind theme extend — ví dụ
colors: {
  primary: { DEFAULT: '#5645d4', pressed: '#4534b3' },
  success: { DEFAULT: '#00a35c', bright: '#00ed64', soft: '#c3f0d2' },
  surface: { DEFAULT: '#f6f5f4', soft: '#fafaf9' },
  lang: { ja: '#e6e0f5', zh: '#dcecfa', it: '#ffe8d4' },
}
```

Font: `@nuxt/fonts` hoặc Google Fonts — **Inter** + **Noto Sans JP/SC**.

---

## 7. Liên kết spec

- Màn hình: [spec/screens/](./spec/screens/)
- Kiến trúc FE: [spec/architecture.md](./spec/architecture.md)

---

*Nguồn gốc: notion/DESIGN.md, mongodb/DESIGN.md, mintlify/DESIGN.md, spotify/DESIGN.md, cal/DESIGN.md trong awesome-design-md.*
