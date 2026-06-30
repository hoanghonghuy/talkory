---
name: /opsx-propose
id: opsx-propose
category: Workflow
description: "Create a change and generate planning artifacts in one step"
---

Create a new OpenSpec change and planning artifacts. Default quick path (OpenSpec `core` profile).

**Prerequisites:** `syn up`, MCP `synapse` green.

**Input:** Optional change name or description after `/opsx-propose` (e.g. `/opsx-propose add-dark-mode`). If missing, ask for a kebab-case `change_id` and short title.

---

## Steps

1. **Clarify** — `change_id` (kebab-case), `title`, one-paragraph `description`, flow (default `sdd`).

2. **Route (optional)** — `openspec_router` with the user prompt; note recommended `flow_name`.

3. **Propose** — MCP `openspec_propose`:
   ```json
   { "change_id": "<id>", "title": "<title>", "description": "<desc>", "flow_name": "sdd" }
   ```

4. **Review** — read `openspec/changes/<id>/`:
   - `proposal.md`, `tasks.md`, `meta.json`
   - `design.md`, `specs/` if created

5. **Fill gaps** — improve proposal/design/spec deltas in the change folder only (no app code yet).

---

## Output

```
## Proposal ready

**Change:** <change-id>
**Path:** openspec/changes/<change-id>/

Artifacts:
- proposal.md
- specs/...
- design.md
- tasks.md

Next: `/opsx-apply` when ready to implement.
```

---

## Guardrails

- Do not implement application code
- Do not archive
- Use descriptive ids (`add-jwt-auth`), not `update` or `wip`
- For step-by-step artifacts instead, user can use expanded flow (`/opsx-new` + `/opsx-continue`) after `syn openspec init --profile expanded` (if installed)
