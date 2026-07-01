# Dictionary & Translation (Future — Always Free)

> Logic: [references/read-frog.md](../references/read-frog.md)

## Quyết định v1 (đã chốt)

| Hạng mục | v1 |
|---|---|
| Tra từ | **Chỉ AI** (structured JSON) — chưa có DB từ điển |
| Dịch | **Google** → fallback **Microsoft** — server proxy, cache |
| UI | `LexiconPopover` — **2 tab**: Tra từ (mặc định từ ngắn) / Dịch (mặc định câu dài) |
| Quota | Free — **không** `user_ai_quota`; rate limit lexicon riêng |
| Local DB | Phase sau — JMdict/CEDICT merge vào lookup |

## Nguyên tắc

- Tách `internal/lexicon` khỏi AI tutor (`/api/v1/ai/*`)
- Viết lại prompt/logic từ Read Frog — không copy GPL code

## API

| Method | Path | Engine |
|---|---|---|
| POST | `/api/v1/dictionary/lookup` | Gemini/OpenAI structured |
| POST | `/api/v1/translate` | Google → Microsoft fallback |
| GET | `/api/v1/dictionary/character/:char` | `stroke_data` (khi có data) |

## Dictionary output (AI)

```json
{
  "term": "食べる",
  "phonetic": "たべる",
  "partOfSpeech": "verb",
  "definition": "ăn",
  "paragraphs": "毎日ご飯を食べる。",
  "paragraphsTranslation": "Mỗi ngày tôi ăn cơm.",
  "difficulty": "N5"
}
```

## Frontend

- `components/lexicon/LexiconPopover.vue` — 2 tab, lazy API
- `composables/useDictionary.ts`, `useTranslate.ts`
- Gắn S04/S05 — tap selection trong reading/lesson blocks

## Backend

`internal/lexicon/` — `DictionaryService` (AI), `TranslateService` (Google/Microsoft chain)

## Database v1

- `lookup_cache` — cache cả dictionary AI và translate (hash input)
- `dictionary_entries` — phase sau
