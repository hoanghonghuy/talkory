---
name: /opsx-explore
id: opsx-explore
category: Workflow
description: "Enter explore mode — investigate ideas and clarify requirements before a change"
---

Enter explore mode. Think deeply. Visualize freely. Follow the conversation wherever it goes.

**Prerequisites:** `syn up` and green MCP server `synapse` (stdio). Use Synapse MCP tools — not the npm `openspec` CLI.

**IMPORTANT: Explore mode is for thinking, not implementing.** You may read files, search code, and investigate the codebase, but you must NEVER write application code or implement features. If the user asks you to implement something, remind them to start a change with `/opsx-propose`. You MAY create or edit OpenSpec artifacts (proposal, design, specs) if the user asks — that is capturing thinking, not implementing.

**This is a stance, not a workflow.** No fixed steps, no mandatory outputs. You are a thinking partner.

**Input:** The text after `/opsx-explore` is whatever the user wants to explore (idea, problem, change name, comparison, or nothing).

---

## Stance

- **Curious, not prescriptive** — follow interesting threads
- **Visual** — ASCII diagrams when they clarify
- **Grounded** — use the real codebase, not theory only
- **Patient** — do not rush to `/opsx-propose`

---

## Synapse MCP (use when relevant)

1. `memory_context` — handoff, memory-bank, recent bugs
2. `openspec_router` — suggest flow (`sdd`, `bugfix`, `brainstorm`, …)
3. `search_docs` — indexed docs/specs (`limit` 5–8)
4. Code intel: `code_context`, `code_impact`, `diff_impact`, `code_query`, `code_overview`
5. `search_registry` type `skill` — OpenSpec/SDD skills

---

## OpenSpec awareness

At the start, list active changes under `openspec/changes/` (skip `archive/`). If the user names a change, read its `proposal.md`, `design.md`, `tasks.md`, and `specs/`.

When insights crystallize, offer:

- "Ready to formalize? Run `/opsx-propose <change-id>`"
- Or keep exploring — no pressure

| Insight | Capture in |
|---------|------------|
| New/changed requirement | `openspec/changes/<id>/specs/.../spec.md` |
| Design decision | `design.md` |
| Scope change | `proposal.md` |
| New work | `tasks.md` |

Offer to capture; do not auto-write artifacts unless the user agrees.

---

## Guardrails

- Do not implement application code
- Do not auto-run `/opsx-propose`
- Do not fake understanding — dig deeper when unclear
