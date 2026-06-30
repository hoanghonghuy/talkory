# S01 — Auth & Guest

> Frontend only. API: [backend/api/S01-auth.md](../backend/api/S01-auth.md)

## Route & Layout

| Route | Layout |
|---|---|
| `/auth/login` | `auth` — centered card, không sidebar |
| `/auth/register` | `auth` |
| `/auth/continue-guest` | `auth` hoặc inline trên landing |

## Components

| Component | Vai trò |
|---|---|
| `AuthForm` | Email, password, validation inline |
| `GoogleOAuthButton` | Redirect OAuth |
| `GuestContinueButton` | "Tiếp tục không đăng ký" |
| `LocalePicker` | Chọn vi/en lúc đăng ký |
| `GuestBanner` | Banner nhắc đăng ký (dùng ở layout lesson sau) |

## UI States

| State | Hiển thị |
|---|---|
| `idle` | Form sẵn sàng |
| `submitting` | Disable nút, spinner |
| `error` | Message dưới field hoặc toast (email trùng, sai password) |
| `success` | Redirect dashboard / onboarding |

## Luồng người dùng

1. Lần đầu → chọn Guest hoặc đăng ký/đăng nhập
2. Guest → vào app ngay, banner "Đăng ký để lưu tiến độ"
3. Sau ~2 bài học (N5/HSK1) → modal full-screen bắt đăng ký (không chặn cứng guest ở auth)
4. Đăng ký sau khi guest → màn hình xác nhận merge progress

## Tương tác & Edge cases

- Link "Quên mật khẩu" — phase sau (ẩn hoặc disabled v1)
- Google OAuth lỗi → quay lại login + toast
- Đã đăng nhập truy cập `/auth/*` → redirect `/`

## Ghi chú implement (cập nhật sau)

- Pinia `auth` store, `useAuth()` composable — bổ sung spec khi code xong
