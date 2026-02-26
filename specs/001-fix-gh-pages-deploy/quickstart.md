# Quickstart: GitHub Pages Deployment Verification

This guide validates foundational deployment behavior for `001-fix-gh-pages-deploy`.

## Prerequisites

- Node.js 20+
- Dependencies installed with `npm ci`
- Access to GitHub Actions for this repository

## Local Baseline Check

1. Run `npm run build`.
2. Confirm `src/css/tailwind.css` exists.
3. Confirm `src/index.html` references CSS assets.

## Workflow Baseline Check

1. Open `.github/workflows/static.yml` and confirm:
   - CSS build step runs before artifact upload.
   - Artifact upload path is `src`.
   - Artifact verification script runs before upload.
2. Trigger workflow via push to `main` or `workflow_dispatch`.

## Foundation Acceptance

- Deployment job completes only when required artifacts exist.
- Missing required artifact fails workflow before upload.
- Published artifact source remains `src/`.

## US1 Styled-Page Verification

1. Trigger the workflow from `main` using a commit that updates CSS-related source files.
2. Wait for `Deploy static content to Pages` to finish successfully.
3. Open the GitHub Pages URL from workflow output.
4. Hard refresh the page (`Ctrl+F5`) and confirm:
   - Typography and spacing are styled (not browser-default plain HTML).
   - Hero/background effects are visible.
   - Network tab shows successful load of `src/css/tailwind.css` in deployed output.
5. If styles are missing, inspect workflow logs for `Fail-fast: verify required CSS artifact` and resolve build issues before re-run.

## US2 Source-Path Regression Verification

1. Edit a visible text string in `src/index.html` (for example, change a heading temporarily).
2. Commit and push to `main` (or run `workflow_dispatch` on a branch that deploys in your environment).
3. In workflow logs, verify `Diagnose source publish path` prints:
   - `Publishing directory: src`
   - file listings for `src/` and `src/css/`
4. Confirm `Upload artifact` uses the path resolved from `${{ env.PUBLISH_PATH }}`.
5. Open the live site and verify the temporary text change is visible.
6. Revert the temporary text change and redeploy.

## US3 Failure-Reproduction Checklist (Missing Artifact)

1. Temporarily rename `src/css/tailwind.css` to `src/css/tailwind.css.bak`.
2. Trigger the Pages workflow.
3. Confirm workflow fails at `Fail-fast: verify required CSS artifact` before `Upload artifact`.
4. Confirm logs contain:
   - `Required CSS artifact is missing (expected: src/css/tailwind.css)`
   - fix guidance to run `npm ci` and `npm run build`
5. Restore file by running `npm run build` (or renaming back), then re-run workflow.
6. Confirm deployment succeeds and site remains styled.

## Final Verification Run (2026-02-26)

Executed locally in repository root:

- `npm run build` → PASS (exit 0)
- `bash .github/scripts/verify-build-artifacts.sh` with normal files → PASS (exit 0)
- Missing-artifact simulation (temporary rename of `src/css/tailwind.css`) → FAIL as expected (exit 2)
- File restore after simulation → PASS (`src/css/tailwind.css` restored)

Recorded outcome:

- Guard script behavior is deterministic for success and failure paths.
- Workflow fail-fast messaging and troubleshooting guidance align with observed local behavior.
- Remote GitHub Actions execution should be run on push or manual dispatch to confirm end-to-end publish in hosted environment.
