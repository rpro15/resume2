# Tasks: GitHub Pages Deployment Fix

**Input**: Design documents from `/specs/001-fix-gh-pages-deploy/`  
**Prerequisites**: plan.md (required), spec.md (required)

**Tests**: Explicit automated tests are not requested in the specification; verification is done through workflow runs and manual acceptance checks.

**Organization**: Tasks are grouped by user story to enable independent implementation and validation.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Every task includes an exact file path

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Prepare deployment-task scaffolding and documentation targets.

- [x] T001 Validate current deployment baseline in .github/workflows/static.yml and package.json
- [x] T002 Create deployment verification guide skeleton in specs/001-fix-gh-pages-deploy/quickstart.md
- [x] T003 [P] Create workflow guard script scaffold in .github/scripts/verify-build-artifacts.sh

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Establish shared deployment guarantees required by all user stories.

**⚠️ CRITICAL**: No user story work starts until this phase is complete.

- [x] T004 Ensure build scripts are canonical (`build-css`, `build`) in package.json
- [x] T005 [P] Normalize Pages workflow permissions/concurrency in .github/workflows/static.yml
- [x] T006 [P] Add executable artifact checks for required files in .github/scripts/verify-build-artifacts.sh
- [x] T007 Wire artifact-check script execution into deployment job in .github/workflows/static.yml
- [x] T008 Document foundational deployment assumptions in specs/001-fix-gh-pages-deploy/plan.md

**Checkpoint**: Foundation complete; user stories can be implemented independently.

---

## Phase 3: User Story 1 - Reliable published styling (Priority: P1) 🎯 MVP

**Goal**: Ensure published site is always styled by guaranteeing CSS build output before publish.

**Independent Test**: Trigger deployment from default branch and verify live page renders with full styles (not raw unstyled HTML).

### Implementation for User Story 1

- [x] T009 [US1] Enforce CSS build step ordering before artifact upload in .github/workflows/static.yml
- [x] T010 [P] [US1] Validate presence of src/css/tailwind.css in .github/scripts/verify-build-artifacts.sh
- [x] T011 [US1] Add explicit workflow failure messaging for missing CSS artifact in .github/workflows/static.yml
- [x] T012 [US1] Add styled-page verification steps in specs/001-fix-gh-pages-deploy/quickstart.md

**Checkpoint**: P1 deploy reliably publishes styled output.

---

## Phase 4: User Story 2 - Correct source publishing path (Priority: P2)

**Goal**: Guarantee GitHub Pages artifact source is the intended `src/` directory.

**Independent Test**: Modify source-only content in `src/`, run deploy, and verify the change appears on live site without manual copying.

### Implementation for User Story 2

- [x] T013 [US2] Set/confirm artifact upload path to src in .github/workflows/static.yml
- [x] T014 [P] [US2] Add source-path diagnostics (directory listing) before upload in .github/workflows/static.yml
- [x] T015 [US2] Document publish-path expectation and maintenance notes in README.md
- [x] T016 [US2] Add source-path regression validation scenario in specs/001-fix-gh-pages-deploy/quickstart.md

**Checkpoint**: P2 deploy consistently publishes from `src/`.

---

## Phase 5: User Story 3 - Predictable deployment feedback (Priority: P3)

**Goal**: Make build-artifact failures explicit and quickly diagnosable.

**Independent Test**: Intentionally break CSS output, run deployment, and confirm failure reason clearly indicates missing build artifact.

### Implementation for User Story 3

- [x] T017 [US3] Ensure guard script exits non-zero on missing artifacts in .github/scripts/verify-build-artifacts.sh
- [x] T018 [US3] Add fail-fast step names and clear log messages in .github/workflows/static.yml
- [x] T019 [P] [US3] Add troubleshooting section for artifact/build failures in README.md
- [x] T020 [US3] Add failure-reproduction and expected-error checklist in specs/001-fix-gh-pages-deploy/quickstart.md

**Checkpoint**: P3 failure mode is deterministic and actionable.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final consistency, traceability, and release hygiene.

- [x] T021 [P] Update deployment change notes in CHANGELOG.md
- [x] T022 Align plan/spec/task cross-references in specs/001-fix-gh-pages-deploy/plan.md and specs/001-fix-gh-pages-deploy/spec.md
- [x] T023 [P] Run final deployment verification checklist and record outcome in specs/001-fix-gh-pages-deploy/quickstart.md

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1 (Setup)**: Starts immediately.
- **Phase 2 (Foundational)**: Depends on Phase 1 and blocks all user stories.
- **Phase 3 (US1)**: Depends on Phase 2.
- **Phase 4 (US2)**: Depends on Phase 2 (can run after US1 or in parallel if staffed).
- **Phase 5 (US3)**: Depends on Phase 2 and benefits from US1 guard script implementation.
- **Phase 6 (Polish)**: Depends on completed target stories.

### User Story Dependencies

- **US1 (P1)**: No dependency on other user stories.
- **US2 (P2)**: No dependency on other user stories.
- **US3 (P3)**: No hard dependency, but reuses guard/check foundations.

### Story Completion Order (Recommended)

US1 → US2 → US3

---

## Parallel Execution Examples

### User Story 1

- Run in parallel after T009: T010 and T012

### User Story 2

- Run in parallel: T014 and T015

### User Story 3

- Run in parallel: T019 and T020

---

## Implementation Strategy

### MVP First (User Story 1 only)

1. Complete Phase 1 and Phase 2.
2. Implement Phase 3 (US1).
3. Validate styled deployment on live URL.
4. Ship MVP deployment fix.

### Incremental Delivery

1. Foundation first (Phases 1-2).
2. Deliver US1 (style reliability).
3. Deliver US2 (source-path correctness).
4. Deliver US3 (predictable failure feedback).
5. Finish with Phase 6 polish.

### Team Parallel Strategy

1. One engineer completes Phases 1-2.
2. After foundation:
   - Engineer A: US1
   - Engineer B: US2
   - Engineer C: US3
3. Merge at Phase 6 with final verification.

---

## Notes

- Tasks marked **[P]** are parallel-safe by file/dependency separation.
- User story labels ensure traceability from tasks to spec priorities.
- Keep each story independently verifiable before moving to next priority.
