# Content Strategy

## Nguyên tắc

1. Nội dung bài học **trong DB**, quản lý qua Admin CMS
2. Dataset mở làm nguồn import — **không copy nguyên sách** có bản quyền
3. Lộ trình bám chuẩn JLPT / HSK — map cấu trúc theo sách tham chiếu
4. Giải thích tiếng Việt/Anh do bạn soạn bằng AI → duyệt → lưu DB

---

## HSK 2.0 vs HSK 3.0 — Giải thích

Đây là **hai phiên bản khác nhau** của kỳ thi chuẩn tiếng Trung (HSK — Hanyu Shuiping Kaoshi):

| | HSK 2.0 (cũ) | HSK 3.0 (mới) |
|---|---|---|
| Thời gian | Dùng từ ~2010, quen thuộc lâu năm | Ra mắt ~2021, đang dần thay thế |
| Số level | 6 level (HSK 1–6) | 7 band (HSK 1–6 + band 7–9 gộp) |
| Số từ mỗi level | Ít hơn, phân level khác | Nhiều từ hơn, chuẩn hóa lại |
| Tình trạng | Vẫn có người học theo bộ cũ | **Chuẩn mới**, sách/ app mới ưu tiên |

**Ví dụ:** Từ "你好" có thể xuất hiện ở HSK1 cả hai bộ, nhưng danh sách từ level 4–6 khác nhau đáng kể giữa 2.0 và 3.0.

### Đề xuất cho Talkory

- **Mặc định hiển thị HSK 3.0** — chuẩn hiện tại
- DB lưu field `hsk_version` (`2.0` | `3.0`) trên từ vựng/level để hỗ trợ cả hai nếu cần sau
- UI cho user chọn "HSK 3.0 (khuyến nghị)" — không bắt user hiểu sự khác biệt ngay từ đầu

---

## Tiếng Nhật — JLPT

| Chuẩn | Level | Nguồn data import |
|---|---|---|
| JLPT | N5 → N1 | japanese-language-data, JMdict, KanjiVG, Tatoeba |

Tham chiếu cấu trúc sách: Genki, Minna no Nihongo (chỉ map unit, không copy nội dung).

---

## Tiếng Trung — HSK

| Chuẩn | Level | Nguồn data import |
|---|---|---|
| HSK 3.0 (primary) | 1 → 6 | complete-hsk-vocabulary, CC-CEDICT |
| HSK 2.0 (optional) | 1 → 6 | complete-hsk-vocabulary |

Viết chữ: Make Me a Hanzi (stroke data), radicals từ Unihan.

---

## Track IT — Module riêng biệt

> **Không** gắn vào unit/bài của lộ trình JLPT hay HSK.

### Đặc điểm

- Luồng học độc lập: `it_modules` → `it_lessons` → `it_exercises`
- Nội dung: từ vựng IT, email/meeting phrases, đọc hiểu tài liệu kỹ thuật, viết comment/commit message
- Có thể gợi ý "nên học song song khi đạt N4/HSK2" — chỉ là gợi ý UX, **không** merge vào curriculum chuẩn
- SRS flashcard dùng chung engine nhưng deck tag `source = 'it_track'`

### Phase nội dung IT (gợi ý)

1. IT vocabulary cơ bản (host, deploy, bug, API…)
2. Giao tiếp công việc (standup, code review, email)
3. Đọc tài liệu EN/JP/CN trong ngữ cảnh IT

---

## Pipeline import

```
Dataset mở (JSON/CSV)
    → staging tables (import_jobs, staging_vocab, ...)
    → Admin review & map vào curriculum
    → content_translations (vi, en) — AI soạn + duyệt
    → published lessons (status = published)
```
