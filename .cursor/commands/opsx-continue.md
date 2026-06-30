---
name: /opsx-continue
id: opsx-continue
category: Workflow
description: "Continue expanded planning — generate the next OpenSpec artifact for a change"
---

Continue step-by-step planning for an active change (expanded OpenSpec flow).

**Prerequisites:** `syn up`, MCP `synapse` green, change folder from `/opsx-new` or partial work.

**Input:** Optional `change_id` after `/opsx-continue`. If omitted, list `openspec/changes/` (skip `archive/`) and ask the user.

---

## Steps

1. **Select change** — announce `Using change: <id>`.

2. **Assess artifacts** — read `openspec/changes/<id>/`:
   - `meta.json`, `proposal.md`, `design.md`, `tasks.md`, `specs/**`
   - Determine the **next missing or thin** artifact in order:
     1. `proposal.md` (scope, goals)
     2. `design.md` (technical approach)
     3. `specs/<domain>/spec.md` (delta specs)
     4. `tasks.md` (implementation checklist)

3. **Ground in codebase** — before writing:
   - `search_docs`, `code_context`, `code_impact`, `memory_context`
   - `search_registry` type `skill` for SDD/OpenSpec skills

4. **Produce one artifact** — draft or improve **only the next** file in the sequence. Stop after one major artifact unless the user asks for more in the same turn.

5. **Checkpoint** — offer:
   - Another `/opsx-continue` for the next artifact
   - `/opsx-ff` if user wants remaining artifacts generated at once
   - `/opsx-apply` when planning is complete

---

## Output

```
## Continued: <artifact>

**Change:** <id>
**Updated:** <file(s)>

Next: `/opsx-continue` or `/opsx-apply` when ready.
```

---

## Guardrails

- One planning artifact per invocation (default)
- No application code — planning files only
- Do not archive or sync specs here
