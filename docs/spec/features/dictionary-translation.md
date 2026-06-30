# Dictionary & Translation (Future — Always Free)

> Tính năng phase sau. User sẽ clone thêm dự án tham khảo; spec này rào sẵn kiến trúc.

## Nguyên tắc

- **Luôn miễn phí** — không quota, không rewarded video
- Tách bounded context `lexicon` khỏi curriculum và AI tutor
- Không trộn với `/api/v1/ai/*` (có quota freemium)

## Tính năng dự kiến

| Tính năng | Mô tả |
|---|---|
| Tra từ điển | Tap kanji/hán tự/từ → popover nghĩa, reading, ví dụ |
| Tra theo ký tự | Stroke, radical, component |
| Dịch câu/đoạn | JP/CN ↔ VI/EN — generous rate limit riêng |

## Frontend (khi implement)

- `composables/useDictionary.ts` — `lookup(term)`, debounce
- `components/lexicon/DictionaryPopover.vue` — dùng trong lesson, reading, writing
- Route `/dictionary` — tra cứu độc lập (optional)
- Feature flag `DICTIONARY_ENABLED`

## Backend

```
internal/lexicon/
  provider.go    # DictionaryProvider interface
  service.go
  repository.go
handler/dictionary_handler.go
handler/translate_handler.go
```

### API (draft)

| Method | Path | Mô tả |
|---|---|---|
| GET | `/api/v1/dictionary/lookup` | `?lang=ja&q=食べる&mode=word` |
| GET | `/api/v1/dictionary/character/:char` | Chi tiết ký tự + stroke link |
| POST | `/api/v1/translate` | Body: `{ text, from, to }` |

## Database (phase sau)

Xem stub trong [schema.md](../database/schema.md) — section Lexicon.

## Nguồn data tham khảo

- JMdict, CC-CEDICT (đã import pipeline)
- Dự án clone sau này — bổ sung provider implementation
