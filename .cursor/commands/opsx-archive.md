---
name: /opsx-archive
id: opsx-archive
category: Workflow
description: "Archive a completed change and optionally sync specs"
---

Archive a completed OpenSpec change (Synapse-native).

**Prerequisites:** `syn up`, MCP `synapse` green.

**Input:** Optional `change_id`. If omitted, list active changes under `openspec/changes/` and **ask the user to choose** — do not guess.

---

## Steps

1. **Select change** — user must confirm `change_id`.

2. **Verify readiness**
   - Read `tasks.md` — warn on incomplete `- [ ]` items
   - MCP `openspec_verify` with `{ "change_id": "<id>" }`
   - If warnings: confirm with user before proceeding

3. **Delta specs**
   - If `openspec/changes/<id>/specs/` exists: summarize diff vs `openspec/specs/`
   - Offer: **Sync now (recommended)** → run `/opsx-sync` logic via `openspec_sync`
   - Or archive without sync if user insists

4. **Archive** — MCP `openspec_archive`:
   ```json
   { "change_id": "<id>", "sync_specs": true }
   ```
   (Set `sync_specs: false` only if user declined sync.)

5. **Log** — optional `log_decision` with tags `openspec`, outcome archived.

6. **Re-index** — remind: `syn migrate`

---

## Output

```
## Archive complete

**Change:** <id>
**Location:** openspec/changes/archive/<id>/
**Specs:** synced | skipped | none

Run `syn migrate` to refresh the doc index.
```

---

## Guardrails

- Always confirm change selection
- Warn on incomplete tasks/verify failures; proceed only with user OK
- Prefer `sync_specs: true` when deltas exist
