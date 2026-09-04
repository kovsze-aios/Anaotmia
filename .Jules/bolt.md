
## 2026-09-04 - pnpm-workspace packages field missing error
**Learning:** The CI pipeline fails during `pnpm install --frozen-lockfile` in projects utilizing `pnpm-workspace.yaml` if the file lacks an explicit `packages` array, even if it is only used for configuring features like `allowBuilds`. This error (` ERROR  packages field missing or empty`) causes a sudden CI exit code 1.
**Action:** When a project uses `pnpm-workspace.yaml` (e.g., to configure native module builds), always ensure it includes a `packages` array (e.g., `packages: ['.']`) to maintain compatibility with modern pnpm strictness and prevent CI breakage.
