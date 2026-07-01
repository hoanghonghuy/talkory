# API S13 — Lexicon (Phase sau — Free)

Feature: [features/dictionary-translation.md](../../features/dictionary-translation.md)  
Logic tham chiếu: [references/read-frog.md](../../references/read-frog.md)

## Hai service tách biệt

| Service | Provider | Mục đích |
|---|---|---|
| `TranslateService` | Google, Microsoft (primary) | Dịch từ/câu — chuỗi text |
| `DictionaryService` | Gemini/OpenAI structured JSON | Tra từ trong ngữ cảnh |

**Không** dùng `user_ai_quota` (AI tutor). Có `lookup_cache` + rate limit lexicon riêng.

## Endpoints

| Method | Path | Service | Mô tả |
|---|---|---|---|
| POST | `/translate` | TranslateService | `{ text, from, to, context? }` → string |
| POST | `/dictionary/lookup` | DictionaryService | `{ selection, paragraphs, source_lang, locale }` → JSON schema |
| GET | `/dictionary/character/:char` | Local DB | Stroke link |

## Translate providers (Go)

```go
type TranslateProvider interface {
    Translate(ctx context.Context, text, from, to string) (string, error)
}
// GoogleTranslateProvider — translateHtml API hoặc Cloud Translation
// MicrosoftTranslateProvider — edge auth token + cognitive translator
```

Config: `LEXICON_TRANSLATE_PRIMARY=google`, `LEXICON_TRANSLATE_FALLBACK=microsoft`

**v1 tra từ:** AI only (chưa DB). **v1 dịch:** Google → Microsoft fallback.

## Dictionary AI output

`term`, `phonetic`, `partOfSpeech`, `definition`, `paragraphs`, `paragraphsTranslation`, `difficulty` (JLPT/HSK)

Prompt adapt từ Read Frog `locales/en.yml` dictionary.* — viết lại, không copy GPL code.

## Database

- `lookup_cache`, `dictionary_entries`, `dictionary_senses`
