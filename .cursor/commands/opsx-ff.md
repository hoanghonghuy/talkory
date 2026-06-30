---
name: /opsx-ff
id: opsx-ff
category: Workflow
description: "Fast-forward — generate all planning artifacts for a change in one step"
---

Fast-forward OpenSpec planning: create or complete **all** planning artifacts for a change in one pass (same outcome as `/opsx-propose`, useful after `/opsx-new` or a partial `/opsx-continue`).

**Prerequisites:** `syn up`, MCP `synapse` green.

**Input:** Optional `change_id` or description after `/opsx-ff`. If missing, ask for kebab-case id + title.

---

## Steps

1. **Clarify** — `change_id`, `title`, `description`, flow (default `sdd`).

2. **Route** — `openspec_router` with the user prompt.

3. **Propose (full)** — MCP `openspec_propose`:
   ```json
   { "change_id": "<id>", "title": "<title>", "description": "<desc>", "flow_name": "sdd" }
   ```
   If the change folder already exists from `/opsx-new`, **merge** — fill missing `design.md`, `specs/`, and `tasks.md` without deleting user edits.

4. **Review** — read all files under `openspec/changes/<id>/`; fill gaps in proposal, design, specs, tasks.

5. **Hand off** — when complete, suggest `/opsx-apply`.

---

## Output

```
## Fast-forward complete

**Change:** <id>
**Path:** openspec/changes/<id>/

Artifacts: proposal, design, specs, tasks (as applicable)

Next: `/opsx-apply`
```

---

## Guardrails

- Planning artifacts only — no application implementation
- Prefer `openspec_propose` for new changes; use merge behavior when folder exists
- Do not archive
