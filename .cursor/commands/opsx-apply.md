---
name: /opsx-apply
id: opsx-apply
category: Workflow
description: "Implement tasks from an OpenSpec change"
---

Implement tasks from an OpenSpec change using Synapse workflow + MCP.

**Prerequisites:** `syn up`, MCP `synapse` green.

**Input:** Optional `change_id` after `/opsx-apply`. If omitted, infer from context or list `openspec/changes/` (exclude `archive/`) and ask the user to choose.

---

## Steps

1. **Select change** — announce: `Using change: <id>` (override with `/opsx-apply <id>`).

2. **Apply + workflow** — MCP `openspec_apply`:
   ```json
   { "change_id": "<id>", "start_workflow": true }
   ```
   Then `workflow_status` — record `workflow_id` and current step.

3. **Read context** — `openspec/changes/<id>/`:
   - `proposal.md`, `design.md`, `tasks.md`, `specs/**`

4. **Show progress** — parse `tasks.md` checkboxes: N/M complete.

5. **Implement (TDD)** — for each pending task:
   - Red: test that reproduces the requirement
   - Green: minimal code to pass
   - Refactor: keep tests green
   - Mark task `- [x]` in `tasks.md`
   - Use `code_impact` / `diff_impact` before risky edits
   - `workflow_next` with `action: "ok"` at milestones
   - `log_decision` for non-obvious architecture choices

6. **Pause when** — task unclear, design mismatch, or blocker. Suggest updating artifacts, then continue.

---

## Output (complete)

```
## Implementation complete

**Change:** <id>
**Progress:** N/N tasks complete

Run `/opsx-verify` then `/opsx-archive`.
```

---

## Guardrails

- Read context before coding
- Minimal, scoped diffs per task
- Update checkboxes immediately after each task
- Do not skip failing tests
- Pause on ambiguity — do not guess
