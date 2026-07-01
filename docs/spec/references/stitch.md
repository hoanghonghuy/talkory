# Stitch — UI mockups Talkory

> Project Stitch: **Talkory — JP & CN Learning App**  
> Project ID: `9503892187295435837`  
> Design system: `assets/636d2f1f8da340c39a39910304c59f75` (Talkory Classic)

## Màn đã generate (×3 device khi có)

| Spec | Desktop | Tablet | Mobile | Ghi chú |
|---|---|---|---|---|
| S03 Dashboard | ✅ `4f0def32…` | ✅ `a33d2255…` | ✅ `2d6278e9…` (Complete) | Mobile bản cũ `3c57b232` bị HTML cắt — dùng bản Complete |
| S11 Settings | ✅ `97a8e387…` (Fixed Layout) | ✅ `a4eac404…` (Updated) | ✅ `3c184c6a…` | Bỏ bản `4516f180` (layout lỗi flex) |

## Màn chưa generate

| Spec | Route | Ưu tiên |
|---|---|---|
| S01 Auth | `/auth/*` | Cao |
| S02 Placement | `/placement` | Cao |
| S04 Curriculum | `/learn/*` | Cao |
| S05 Lesson | `/lesson/*` | Cao |
| S06 SRS | `/review` | Trung bình |
| S07 Writing | `/writing` | Trung bình |
| S08 AI Tutor | `/tutor` | Trung bình |
| S09 IT Track | `/it` | Trung bình |
| S10 Rewards | `/rewards` | Thấp |
| S12 Admin | `/admin` | Thấp (phase sau) |

**Tổng:** 2/12 màn spec (chưa kể auth sub-routes). Mỗi màn cần ×3 device ≈ **30 mockup** còn lại.

## Mascot assets (production — dùng bản này)

| Nhân vật | File | Ghi chú |
|---|---|---|
| Sakko (nữ) | `docs/assets/mascots/sakko-idle-transparent.png` | Chibi spirit hoa anh đào |
| Longmi (nam, rồng) | `docs/assets/mascots/longmi-idle-transparent.png` | Chibi người (nam), sừng + đuôi rồng, tông xanh — không cánh |

> **Không dùng** mascot Stitch (`d8d9b5c0…`, `fb33e397…`) — có nền trắng và hoạ tiết UI thừa.

Quy tắc: PNG transparent, chỉ nhân vật — xem DESIGN.md §5.

## Lỗi Stitch hay gặp (khi implement)

1. `body { display: flex }` + header/main sibling → layout vỡ (S11 desktop)
2. HTML export bị truncate (S03 mobile)
3. Copy AI sai (Jinbi → Jade, subtitle mascot)
4. Tablet tag `deviceType: DESKTOP` trong metadata

## Layout chuẩn khi code (không copy HTML Stitch)

```
sidebar fixed 240px
└─ div.ml-[240px].flex.flex-col.w-full
   ├─ header (optional)
   └─ main.flex-1 → max-w content
```
