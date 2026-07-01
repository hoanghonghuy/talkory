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
  # — Default theme "Talkory Classic" (user có thể đổi — xem § Themes)
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

## 5. Linh vật (Mascots) — Phương án B (đã chốt)

Hai guide đôi — mỗi ngôn ngữ học một nhân vật. Tone: thân thiện, bài bản (học Brottin [gamification + streak](https://brottin.quest/) nhưng không copy ong).

### Sakko（桜子）— Tiếng Nhật / JLPT

| Thuộc tính | Chi tiết |
|---|---|
| Giới | Nữ — tinh linh hoa anh đào |
| Hình tượng | Chibi anime, tóc lavender ngắn, cánh cánh hoa, váy cánh hoa hồng pastel |
| Asset | `docs/assets/mascots/sakko-idle-transparent.png` |
| Màu gắn | `lang-ja` lavender, accent `#7b3ff2` |
| Tính cách | Kiên nhẫn, nhắc ôn SRS, thích kanji |
| Xuất hiện | `/learn/ja`, placement JP, streak dashboard khi học Nhật |

### Longmi（龙米）— Tiếng Trung / HSK

| Thuộc tính | Chi tiết |
|---|---|
| Giới | Nam — rồng con |
| Hình tượng | **Cùng tỷ lệ chibi người với Sakko** (không copy cánh hoa) — bé trai, tóc xanh sky, sừng nhỏ, đuôi rồng, áo hanfu + váy vảy teal |
| Asset | `docs/assets/mascots/longmi-idle-transparent.png` |
| Màu gắn | `lang-zh` sky `#dcecfa`, accent `#2a9d99` |
| Tính cách | Năng động, thích hán tự và pinyin |
| Xuất hiện | `/learn/zh`, placement CN, dashboard khi học Trung |

### Quy tắc dùng chung

- **Dashboard:** cả hai nếu user học song song; hoặc mascot của track “tiếp tục học”
- **IT track:** không dùng Sakko/Longmi — icon neutral hoặc badge `#` (peach), tránh nhầm ngôn ngữ
- **Admin CMS:** không mascot
- **Empty / error / guest:** một trong hai theo `locale` hoặc ngôn ngữ bài học
- **Phong cách:** flat vector, viền `charcoal`, scale 32–64px UI / 120px onboarding
- **Asset production:** PNG nền trong suốt, **chỉ nhân vật** (không icon UI, không bóng đổ, không hoạ tiết quanh) — `docs/assets/mascots/`

### Trạng thái (poses — v1 tối thiểu)

| State | Sakko | Longmi |
|---|---|---|
| idle | đứng, cười | ngồi, đuôi lắc |
| streak | cánh tay giơ cờ | giơ long châu mini |
| celebrate | cánh hoa rơi | pháo giấy xanh |
| sleepy (hết quota AI) | ngủ trên sách | cuộn tròn |

---

## 5b. Phương án A — Tori（ không dùng, lưu tham khảo）

> **Trạng thái:** archived — không implement. Giữ để đối chiếu sau này.

**Tori** — “hạt mực biết nói”: giọt mực / nét bút có mắt miệng; gắn **viết CJK + talk bubble**; một mascot thay vì đôi; đuôi nét bút vẽ trên canvas S07.

Lý do không chọn: Talkory học **hai ngôn ngữ song song** — đôi Sakko/Longmi phân nhánh rõ hơn trên curriculum.

---

## 6. Themes — Giao diện tự chọn màu

**Không chỉ sáng/tối** — user chọn **theme** = tông màu (palette) × **mode** (light / dark).

### Mô hình

```
Theme = Palette (màu thương hiệu) + Mode (light | dark)
```

| Thành phần | Mô tả |
|---|---|
| **Palette** | Bộ màu semantic: `primary`, `canvas`, `surface`, `ink`, `success`, … |
| **Mode** | Light hoặc dark cho **cùng palette** — không phải 2 theme riêng biệt |
| **Default** | `talkory-classic` light — token ở đầu file YAML |
| **Lưu** | `users.theme_id` + `users.theme_mode` — sync đa thiết bị |

### Palette v1 (đề xuất ship)

| ID | Tên | Primary | Đặc trưng |
|---|---|---|---|
| `talkory-classic` | Talkory Classic | `#5645d4` tím Notion | Mặc định |
| `sakura` | Sakura | `#e85d8a` hồng | Gắn Sakko / JP |
| `jade` | Jade | `#0d9488` ngọc | Gắn Longmi / CN |
| `ink` | Ink | `#37352f` charcoal | Tối giản, đọc lâu |
| `dawn` | Dawn | `#f59e0b` amber | Ấm, sáng |
| `night` | Night | `#5e6ad2` lavender | Dark-friendly |

Mỗi palette có **2 bộ token** (light + dark) — tổng 6×2 = 12 biến thể ban đầu; có thể thêm palette sau.

### Token CSS (implementation)

Dùng **CSS variables** trên `:root` / `[data-theme][data-mode]`:

```css
[data-theme="talkory-classic"][data-mode="light"] {
  --color-primary: #5645d4;
  --color-canvas: #ffffff;
  --color-surface: #f6f5f4;
  --color-ink: #1a1a1a;
  /* ... */
}
[data-theme="talkory-classic"][data-mode="dark"] {
  --color-primary: #7c6cf0;
  --color-canvas: #1a1a1a;
  --color-surface: #252525;
  --color-ink: #f5f5f4;
  /* ... */
}
```

**Không đổi theo theme:** `lang-ja`, `lang-zh`, `lang-it` tints (nhận diện track); mascot colors; semantic `error` / `warning`.

### UI chọn theme (S11 Settings)

- Section **Giao diện**
- Grid preview palette (swatch primary + canvas)
- Toggle **Sáng / Tối** (mode)
- Preview trực tiếp — apply ngay, không reload
- Optional: theo `prefers-color-scheme` lần đầu, user override sau

### Nguyên tắc accessibility

- Mỗi palette×mode phải đạt contrast WCAG AA cho `ink` trên `canvas`, `on-primary` trên `primary`
- Không dùng pure `#000` / `#fff` làm nền chính ở dark mode — giảm chói

### v1 scope

| v1 | Sau |
|---|---|
| 3 palette: classic, sakura, jade | Thêm ink, dawn, night |
| light + dark mỗi palette | Custom user palette (không) |
| Lưu settings | — |

---

## 7. Tailwind / Nuxt mapping (khi code)

```ts
// CSS variables — colors reference var(--color-primary), không hardcode hex trong component
// composables/useTheme.ts — set data-theme, data-mode, persist localStorage + API PATCH /me
colors: {
  primary: 'var(--color-primary)',
  canvas: 'var(--color-canvas)',
  surface: 'var(--color-surface)',
  ink: 'var(--color-ink)',
  // lang.* giữ cố định
}
```

Font: `@nuxt/fonts` hoặc Google Fonts — **Inter** + **Noto Sans JP/SC**.

---

## 8. Liên kết spec

- Màn hình: [spec/screens/](./spec/screens/)
- Kiến trúc FE: [spec/architecture.md](./spec/architecture.md)

---

*Nguồn gốc: notion/DESIGN.md, mongodb/DESIGN.md, mintlify/DESIGN.md, spotify/DESIGN.md, cal/DESIGN.md trong awesome-design-md.*
