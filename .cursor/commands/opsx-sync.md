---
name: /opsx-sync
id: opsx-sync
category: Workflow
description: "Merge delta specs from a change into openspec/specs"
---

Sync delta specs from an active or archived change into canonical `openspec/specs/`.

**Prerequisites:** `syn up` (for MCP) or CLI `syn openspec sync`.

**Input:** Optional `change_id`. If omitted, infer from context or ask.

---

## Steps

1. **Confirm change** — `change_id` with delta under `openspec/changes/<id>/specs/` or `openspec/changes/archive/<id>/specs/`.

2. **Preview** — read delta files (ADDED/MODIFIED/REMOVED sections) and matching `openspec/specs/**`.

3. **Sync** — prefer MCP `openspec_sync`:
   ```json
   { "change_id": "<id>" }
   ```
   Or CLI dry-run first: `syn openspec sync <id> --dry-run`

4. **Summarize** — list domains/files merged.

5. **Re-index** — remind user: `syn migrate` (re-index brain after spec changes).

---

## Output

```
## Spec sync complete

**Change:** <id>
**Merged into:** openspec/specs/

Run `syn migrate` to refresh the doc index.
```

---

## Guardrails

- Show what will merge before applying (especially on archive)
- Do not archive in this command — use `/opsx-archive`
- If no delta specs exist, say so and stop
