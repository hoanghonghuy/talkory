# S11 — Settings & Profile

> Frontend only. API: [backend/api/S11-settings.md](../backend/api/S11-settings.md)

## Route & Layout

| Route | Layout |
|---|---|
| `/settings` | List settings |
| `/settings/account` | Email, password, Google link |

## Components

| Component | Vai trò |
|---|---|
| `ProfileForm` | display_name |
| `LocaleSwitcher` | vi / en |
| `DailyGoalSlider` | Phút/ngày |
| `SubscriptionStatus` | Plan + renew date |
| `LogoutButton` | |

## UI States

Standard form states: loading, saving, error, success toast.

## Luồng người dùng

1. Đổi locale → reload app content language
2. Xem subscription / AI history (optional link)
3. Đăng xuất → `/auth/login`

## Tương tác & Edge cases

- Guest vào settings → chỉ locale + CTA đăng ký
