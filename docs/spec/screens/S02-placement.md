# S02 — Placement Test

> Frontend only. API: [backend/api/S02-placement.md](../backend/api/S02-placement.md)

## Route & Layout

| Route | Layout |
|---|---|
| `/onboarding/placement` | Chọn ngôn ngữ JP / CN |
| `/onboarding/placement/:lang` | Full focus — không bottom nav |

## Components

| Component | Vai trò |
|---|---|
| `LanguagePicker` | Card JP / CN |
| `PlacementProgress` | Thanh tiến độ câu hỏi |
| `PlacementQuestion` | MCQ, fill-blank |
| `PlacementResult` | Level đề xuất + CTA vào curriculum |
| `SkipPlacementLink` | Bỏ qua → mặc định N5/HSK1 |

## UI States

| State | Hiển thị |
|---|---|
| `loading` | Skeleton câu hỏi |
| `answering` | Chọn đáp án, nút Next |
| `submitting` | Chấm điểm |
| `result` | Level + nút "Bắt đầu học" |

## Luồng người dùng

1. Onboarding sau auth/guest
2. Chọn ngôn ngữ → làm 15–25 câu
3. Kết quả → redirect `/learn/ja` hoặc `/learn/zh` tại level đề xuất
4. Skip → N5 hoặc HSK1

## Tương tác & Edge cases

- Làm placement cả JP và CN — quay lại picker sau khi xong một ngôn ngữ
- Guest làm placement — lưu local + gửi kèm guest token
