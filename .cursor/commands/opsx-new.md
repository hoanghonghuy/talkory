---
name: /opsx-new
id: opsx-new
category: Workflow
description: "Start a new change — scaffold folder only (expanded / step-by-step planning)"
---

Start a new OpenSpec change **without** generating all artifacts at once. Use with `/opsx-continue` for one artifact per step.

**Prerequisites:** `syn up`, MCP `synapse` green.

**Input:** `change_id` or short description after `/opsx-new` (e.g. `/opsx-new add-dark-mode`).

---

## Steps

1. **Clarify** — kebab-case `change_id`, `title`, one-line `description`. Default flow: `sdd`.

2. **Route (optional)** — `openspec_router` with the user prompt.

3. **Scaffold only** — create `openspec/changes/<id>/` with minimal files:
   - `meta.json` — `change_id`, `title`, `flow_name`, `created_at`
   - `proposal.md` — title + description stub (user/agent fills in `/opsx-continue`)
   - `tasks.md` — empty checklist template

   Do **not** call `openspec_propose` (that fast-forwards all artifacts). Write files directly or use minimal MCP/file edits in the change folder only.

4. **Confirm** — show path and suggest `/opsx-continue` for the next artifact (`design.md`, `specs/`, …).

---

## Output

```
## Change scaffolded

**Change:** <id>
**Path:** openspec/changes/<id>/

Next: `/opsx-continue` to generate the next planning artifact.
Or `/opsx-ff` to generate all planning artifacts in one shot.
```

---

## Guardrails

- No application code
- No archive
- Descriptive ids only (`add-jwt-auth`, not `wip`)
