# OpenSpec — Synapse-native

Convention **riêng Synapse** — không dùng npm `openspec` CLI từ GitHub.

## Layout

```
openspec/
  config.yaml           # schema + rules
  specs/              # source of truth (theo domain)
  schemas/            # workflow artifact definitions
  changes/<id>/       # one folder per change
  changes/archive/    # completed changes
```

## Workflow

1. `openspec_router` hoặc chọn flow: `sdd`, `bugfix`, `brainstorm`, `audit`, `dispatch`
2. `openspec_propose` — tạo `changes/<id>/`
3. `openspec_apply` + `start_workflow: true`
4. `workflow_next` giữa các bước
5. `openspec_verify` (+ `workflow_step` khi cần)
6. `openspec_archive`

## CLI

```bash
syn openspec init
syn openspec verify <change-id> --step SpecsDraft
```

Chi tiết checklist: [docs/CHECKLIST-OPENSPEC-CODEGRAPH.md](../docs/CHECKLIST-OPENSPEC-CODEGRAPH.md)
