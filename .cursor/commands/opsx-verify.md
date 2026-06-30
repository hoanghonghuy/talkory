---
name: /opsx-verify
id: opsx-verify
category: Workflow
description: "Validate implementation and artifacts before archive"
---

Validate that implementation matches OpenSpec artifacts (expanded workflow gate).

**Prerequisites:** `syn up`, MCP `synapse` green.

**Input:** Optional `change_id` and workflow step (e.g. `Verifying`, `SpecsDraft`).

---

## Steps

1. **Select change** — `change_id` (ask if ambiguous).

2. **Run tests** — scoped `go test`, `npm test`, or project-appropriate commands for the change.

3. **MCP verify** — `openspec_verify`:
   ```json
   {
     "change_id": "<id>",
     "workflow_step": "Verifying"
   }
   ```
   Optional: `schema_before`, `schema_after` for YAML schema diff.

4. **Workflow** — `workflow_status`; expect step `Verifying` → `Done` when passing.

5. **Report** — PASS/FAIL per check; list `errors` from MCP.

---

## Output

```
## Verify: PASS | FAIL

**Change:** <id>

Checks:
- tests: ...
- openspec_verify: ...
- workflow: ...

Next: `/opsx-archive` if PASS, else fix and re-run `/opsx-verify`.
```

---

## Guardrails

- Do not archive inside this command
- Fail closed on missing change folder or archived change
- Read `openspec/changes/<id>/specs/` for spec coherence
