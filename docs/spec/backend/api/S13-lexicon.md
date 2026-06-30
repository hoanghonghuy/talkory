# API S13 — Lexicon (Phase sau — Free)

Feature: [features/dictionary-translation.md](../../features/dictionary-translation.md)

## Endpoints

| Method | Path | Auth | Mô tả |
|---|---|---|---|
| GET | `/dictionary/lookup` | optional | `?lang=&q=&mode=` |
| GET | `/dictionary/character/:char` | optional | |
| POST | `/translate` | optional | `{ text, from, to }` |

## Quy tắc

- **Không** trừ `user_ai_quota`
- Rate limit riêng (generous)
- `LexiconService` + `DictionaryProvider`

## Database

- `dictionary_entries`, `dictionary_senses`, `lookup_cache`
