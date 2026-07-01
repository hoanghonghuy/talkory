# UI/UX Inspiration — Talkory

> Tổng hợp tham khảo giao diện từ app/web học ngôn ngữ và design system liên quan.  
> **Mục đích:** hướng dẫn mockup HTML tay + implement Nuxt — **không copy** mascot, palette neon, hay layout nguyên khối.  
> **Design tokens chính thức:** vẫn là [`DESIGN.md`](../../DESIGN.md).

---

## 1. Nguyên tắc lọc (Borrow vs Reject)

| Nên học | Không làm |
|---|---|
| Cấu trúc thông tin, luồng học, vị trí CTA | Mascot/icon UI của đối thủ (Brottin ong, Duolingo owl…) |
| Gamification **nhẹ**: streak, XP, leaderboard tinh gọn | Neon gradient, confetti quá mức, âm thanh/hiệu ứng gây nhiễu |
| Copy tiếng Việt thân thiện, giải thích rõ mục tiêu bài | UI “trẻ con” khi nội dung JLPT/HSK nặng |
| SRS: một việc một màn, nút rating cố định | Chrome dày, sidebar khi đang review flashcard |
| Pastel phân level, card catalog | Dark-only hoặc gamified path kiểu game mobile |
| Dictionary popover / tra từ trong ngữ cảnh | Mở tab mới hoặc modal full-screen cho tra 1 từ |

**Talkory = Notion (blocks + đọc dài) + MongoDB University (catalog/progress) + pattern học từ app CJK**, mascot Sakko/Longmi riêng.

---

## 2. Tier A — Cùng đối tượng người Việt

### 2.1 [Brottin](https://brottin.quest/) — học tiếng Đức cho người Việt ⭐ (user chỉ định)

**Vì sao quan trọng:** Cùng positioning (học ngoại ngữ, UI tiếng Việt, gamification vừa phải).

| Pattern | Mô tả | Áp dụng Talkory |
|---|---|---|
| Dashboard hub | Màn trung tâm: tiếp tục học, streak, XP, bài nổi bật | **S03** — widget “Tiếp tục bài”, streak card, 2 track JA/ZH |
| Mascot + motivation | Nhân vật xuất hiện khi chào/nhắc streak, không phủ kín UI | Sakko/Longmi idle PNG — **chỉ nhân vật**, không icon UI quanh (DESIGN §5) |
| Streak / XP | Đếm ngày liên tiếp, điểm kinh nghiệm, milestone 7/30/100 ngày | **S03, S10** — `success-bright`, `card-yellow`; không multiplier neon |
| Leaderboard nhẹ | Xếp hạng tuần, không chiếm cả màn | **S03** sidebar hoặc card nhỏ; **S10** chi tiết hơn |
| Featured lesson | “Bài đề xuất hôm nay” / session CTA lớn | **S03** primary CTA → S05 |
| Tone copy | Tiếng Việt gần gũi, có động lực nhưng không infantilize | Toàn app — onboarding, empty state, lỗi form |
| Progress cards | Thẻ tiến độ theo kỹ năng / level | **S04** header stats; **S03** widget JLPT/HSK |

**Không copy:** ong/mascot Brottin, palette vàng-đen đặc trưng, layout mobile-game.

---

### 2.2 Hệ sinh thái EUP — [Mazii](https://mazii.net/vi-VN/), [Hanzii](https://hanzii.net/), [Migii JLPT](https://jlpt.migii.net/vi/)

**Vì sao quan trọng:** Đối tượng VN học Nhật/Trung; chuẩn UX tra từ + ôn thi quen thuộc.

| Pattern | Nguồn | Áp dụng Talkory |
|---|---|---|
| Search-first header | Mazii/Hanzii web | **S05** popover tra từ; không cần clone trang dictionary |
| Từ vựng trong ngày | Mazii homepage | **S03** widget nhỏ (optional phase 2) |
| Tab kỹ năng JLPT | Migii: đọc / nghe / ngữ pháp / từ vựng | **S04** filter chip; **S05** block tags |
| Đề thi + giải thích đáp án | Migii mock test | **S05** exercise `explanation` sau submit — Mintlify prose |
| Lộ trình cá nhân hóa | Migii roadmap | **S02** placement → **S04** tree unlocked |
| Flashcard + sổ tay | Hanzii vocabulary notebook | **S06** deck từ bài đã học |
| OCR / AI grammar | Hanzii (phase sau) | **S08** tutor — không nhét vào mockup đầu |
| Thuần Việt 100% | Cả ecosystem | Label, lỗi validation, empty state |

**Không copy:** density quảng cáo premium, footer corporate EUP, mobile tab bar 6+ item.

---

### 2.3 [Germanly](https://github.com/ntdcong/germanly) / app flashcard VN khác

| Pattern | Áp dụng |
|---|---|
| Nhóm sổ tay (deck) theo level/chủ đề | **S06** deck list |
| Quiz chỉ lặp câu sai | **S05** exercise “ôn lại lỗi” (phase 2) |
| Chia sẻ deck public + QR | Không ưu tiên MVP |

---

## 3. Tier B — App học CJK / SRS (quốc tế)

### 3.1 [LingoDeer](https://www.lingodeer.com/) — structured CJK courses

| Pattern | Mô tả | Talkory screen |
|---|---|---|
| 3 tab: Learn / Review / Me | Điều hướng rõ; desktop Talkory dùng **sidebar** thay bottom tab | Mobile **S03** ≈ 5-item bottom nav |
| Lesson path tuyến tính | Unit → lesson, progress dot/check | **S04** tree + **S05** prev/next |
| Grammar tips trước bài | Card giải thích ngắn trước exercise | **S05** block `text` + `grammar_callout` |
| Mistake review | Tập trung câu sai cuối bài | **S05** footer “Xem lại N câu sai” |
| Review hub tách biệt | SRS / quiz / word list | **S06** tách khỏi lesson flow |
| Streak + weekly rank + XP chart | Me tab | **S03** + **S10** |
| Audio turtle (chậm) | Nút tốc độ phát âm | **S05** audio control trên vocab block |
| Light palette, ít chrome | Dễ đọc lâu | Khớp Notion warm neutrals |

**Không copy:** illustration style LingoDeer, mascot deer, path zigzag game map.

---

### 3.2 [WaniKani](https://www.wanikani.com/) — SRS kanji

| Pattern | Mô tả | Talkory screen |
|---|---|---|
| Lessons vs Reviews CTA | Hai nút lớn: bài mới / ôn due | **S03** dual CTA: “Học bài mới” + “Ôn SRS (N)” |
| Widget dashboard | Review forecast, recent mistakes, level progress | **S03** grid widgets (cố định MVP, customize phase sau) |
| Review forecast 24h | Biểu đồ due theo giờ | **S06** header “Hôm nay còn N thẻ” |
| Heatmap / study streak | Lịch practice | **S03** streak calendar nhỏ |
| Pink/blue lesson colors | Nhận diện loại session | Talkory dùng `lang-ja` lavender + `success` green thay neon WK |

**Không copy:** neon pink/blue, widget customize phức tạp ở MVP.

---

### 3.3 Anki — flashcard review UX

| Pattern | Mô tả | Talkory screen |
|---|---|---|
| Question → reveal → rate | Hai giai đoạn; không hiện đáp án sớm | **S06** core loop |
| Bottom bar rating cố định | Again / Hard / Good / Easy — luôn visible | **S06** sticky footer; map màu semantic |
| Minimal chrome | Không sidebar khi review | **S06** full focus (`layout: lesson`) |
| Undo snackbar | Hoàn tác rating | **S06** toast 5s |
| Front/back typography | CJK lớn, hint nhỏ | `cjk-display` + `body-sm` reading |

**Không copy:** HTML card tùy biến Anki, theme mặc định xám utilitarian.

---

### 3.4 Duolingo — chỉ tham khảo **phản diện**

| Học được | Tránh |
|---|---|
| Daily goal rõ | Path zigzag chiếm full viewport |
| Streak freeze concept | Owl mascot, league pressure |
| Bài ngắn 5–7 phút | Heart/lives punishment UX |
| Sound design nhẹ (optional) | Neon green + gradient 3D buttons |

Talkory **đã chốt** trong DESIGN.md: không Duolingo-style.

---

## 4. Tier C — Design system (đã map trong DESIGN.md)

| Nguồn | Pattern | Talkory |
|---|---|---|
| **Notion** | Block editor, pastel property tags, warm gray canvas | S05 blocks, S12 admin |
| **MongoDB University** | Course catalog cards, green progress, tag màu | S03, S04, streak |
| **Mintlify** | Prose grammar, sidebar doc tree, readable long-form | S04 sidebar, S05 `text` |
| **Spotify** | CJK font fallback stack | S06, S07 flashcard/writing |
| **Cal.com** | Auth form sạch, centered card, Inter | S01, S11 |

---

## 5. Map theo màn hình Talkory

| Spec | Tham khảo chính | Ghi chú mockup |
|---|---|---|
| **S01 Auth** | Cal.com, Brottin login đơn giản | Centered card, không sidebar; OAuth row |
| **S02 Placement** | LingoDeer level pick + Migii diagnostic | Focus mode, progress top, Sakko/Longmi theo ngôn ngữ |
| **S03 Dashboard** | Brottin hub + MongoDB catalog + WaniKani widgets | Sidebar 240px; streak + continue + 2 track cards |
| **S04 Curriculum** | Mintlify tree + LingoDeer path + MongoDB tags | ✅ Đã có HTML desktop |
| **S05 Lesson** | Notion blocks + LingoDeer exercises + Migii explanations | Max-width 680px; mistake review footer |
| **S06 SRS** | Anki reviewer + WaniKani due count | Full focus; 4 rating buttons sticky |
| **S07 Writing** | Skritter-like grid (concept) + Spotify CJK | Hairline grid, large `font-cjk` |
| **S08 AI Tutor** | Hanzii AI chat + Notion bubbles | User `primary`, assistant `surface` |
| **S09 IT Track** | Mintlify code blocks + `lang-it` peach | Mono font snippets |
| **S10 Rewards** | Brottin badges + LingoDeer weekly rank | Green pill CTA, không league phức tạp |
| **S11 Settings** | Cal.com forms + LingoDeer Me tab | Theme picker classic/sakura/jade |
| **S12 Admin** | Notion CMS | Block list + property tags |

---

## 6. Pattern chi tiết cho mockup tiếp theo

### S03 Dashboard (ưu tiên cao)

```
┌─ Sidebar 240px ─────────────────┬─ Main max 1120px ─────────────────────┐
│ Logo Talkory                      │ Chào {tên} + Sakko/Longmi nhỏ góc phải │
│ Nav: Trang chủ / Học / Ôn / …     │ ┌─ Streak card (card-yellow) ────────┐ │
│                                   │ │ 🔥 12 ngày · XP tuần               │ │
│                                   │ └────────────────────────────────────┘ │
│                                   │ ┌─ Continue ─────┐ ┌─ SRS due ───────┐ │
│                                   │ │ Bài dở N4-3    │ │ 24 thẻ hôm nay  │ │
│                                   │ └────────────────┘ └─────────────────┘ │
│                                   │ ┌─ JA track card ─┐ ┌─ ZH track card ─┐ │
│                                   │ │ JLPT N4 42%    │ │ HSK 3 18%       │ │
│                                   │ └────────────────┘ └─────────────────┘ │
│                                   │ Leaderboard tuần (compact table)         │
└───────────────────────────────────┴──────────────────────────────────────────┘
```

**Cue:** Brottin hub + MongoDB course card + WaniKani “Reviews due” — **không** full-width game path.

### S01 Auth

- Một cột giữa, `card-base`, logo + tagline tiếng Việt ngắn
- Email/password + “Đăng nhập bằng Google”
- Link “Chưa có tài khoản?” — Cal.com spacing

### S05 Lesson

- Top: progress `3/12` + nút thoát
- Body: stack blocks (text → vocab_list → exercise)
- Exercise: một loại mỗi step (không nhồi 5 dạng một scroll như web Mazii)
- Sau bài: summary XP + “Ôn lại câu sai” (LingoDeer)

### S06 SRS

- Một flashcard giữa màn (`flashcard` token)
- Tap / Space → lật
- Bottom: 4 nút rating full-width mobile
- Header tối giản: `Còn 24` + thoát

---

## 7. Mobile vs Desktop

| Desktop | Mobile |
|---|---|
| Sidebar 240px cố định | Bottom nav 5 item (DESIGN §4) |
| Dashboard 2 cột widget | Stack vertical; streak on top |
| S04 tree sidebar + content | Tree collapse → accordion level |
| S05 max-width 680px centered | Full width padding 16px |
| S06 giữ bottom rating bar | Giữ — không chuyển rating lên top (học Anki) |

---

## 8. Checklist trước mỗi mockup HTML

- [ ] Đọc screen spec `docs/spec/screens/S{nn}-*.md`
- [ ] Token từ `DESIGN.md` — không hardcode màu đối thủ
- [ ] Xác định 2–3 nguồn inspiration từ bảng §5
- [ ] Mascot đúng ngôn ngữ (Sakko JA / Longmi ZH) — PNG production
- [ ] Ghi chú “Borrow / Reject” ngắn trong comment đầu file HTML

---

## 9. Link tham khảo nhanh

| Sản phẩm | URL | Loại |
|---|---|---|
| Brottin | https://brottin.quest/ | DE cho VN, gamification |
| Mazii | https://mazii.net/vi-VN/ | JP dictionary VN |
| Hanzii | https://hanzii.net/ | ZH dictionary VN |
| Migii JLPT | https://jlpt.migii.net/vi/ | JLPT mock + roadmap |
| LingoDeer | https://www.lingodeer.com/ | Structured CJK |
| WaniKani | https://www.wanikani.com/ | Kanji SRS dashboard |
| MongoDB University | https://university.mongodb.com/ | Course catalog UI |
| Notion | https://www.notion.so/ | Blocks + CMS |
| Mintlify docs | https://mintlify.com/docs | Prose + sidebar |

---

*Cập nhật: 2026-06-30 — sau research Brottin, EUP, LingoDeer, WaniKani, Anki, Duolingo (anti-pattern).*
