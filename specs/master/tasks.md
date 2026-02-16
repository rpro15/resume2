# Tasks: Create a single-page personal portfolio website for a Junior DevOps engineer with anime aesthetics

**Input**: Design documents from `/specs/master/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Tests are OPTIONAL - not requested in feature specification, so none included.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- Single project: `src/`, `tests/` at repository root
- Paths based on plan.md structure

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [ ] T001 Create project structure per implementation plan
- [ ] T002 Install Tailwind CSS, Lottie-Web, Typed.js dependencies
- [ ] T003 [P] Configure Tailwind build process in src/config/tailwind.config.js

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T004 Create base index.html with section placeholders in src/index.html
- [ ] T005 [P] Setup data.js with sample data per data-model.md in src/js/data.js
- [ ] T006 [P] Initialize basic CSS with Tailwind imports in src/css/styles.css

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Hero Section (Priority: P1) 🎯 MVP

**Goal**: Display hero section with name, title, and avatar using anime aesthetics

**Independent Test**: Open index.html, verify hero section shows name, title, and styled with neon gradients

### Implementation for User Story 1

- [ ] T007 [US1] Add hero HTML structure in src/index.html
- [ ] T008 [US1] Style hero with glass-morphism and neon gradients in src/css/styles.css
- [ ] T009 [US1] Populate hero data in src/js/data.js

**Checkpoint**: Hero section functional and visually appealing

---

## Phase 4: User Story 2 - About Section (Priority: P1)

**Goal**: Show personal bio and highlights in about section

**Independent Test**: Scroll to about section, verify description and highlights display correctly

### Implementation for User Story 2

- [ ] T010 [US2] Add about HTML structure in src/index.html
- [ ] T011 [US2] Style about section with anime card design in src/css/styles.css
- [ ] T012 [US2] Populate about data in src/js/data.js

**Checkpoint**: About section complete and readable

---

## Phase 5: User Story 3 - Skills Section (Priority: P1)

**Goal**: Display technical skills with visual progress indicators

**Independent Test**: View skills section, confirm skills list with levels shown visually

### Implementation for User Story 3

- [ ] T013 [US3] Add skills HTML structure in src/index.html
- [ ] T014 [US3] Style skills with progress bars and icons in src/css/styles.css
- [ ] T015 [US3] Populate skills data in src/js/data.js

**Checkpoint**: Skills section visually represents proficiency levels

---

## Phase 6: User Story 4 - DevOps Toolbox Section (Priority: P1)

**Goal**: Showcase DevOps tools with icons and descriptions

**Independent Test**: Check toolbox section displays tools with logos and descriptions

### Implementation for User Story 4

- [ ] T016 [US4] Add toolbox HTML structure in src/index.html
- [ ] T017 [US4] Style toolbox with tool cards in src/css/styles.css
- [ ] T018 [US4] Populate toolbox data with icons in src/js/data.js
- [ ] T019 [US4] Add tool SVG icons in src/assets/images/

**Checkpoint**: DevOps tools displayed with proper branding

---

## Phase 7: User Story 5 - Experience Section (Priority: P1)

**Goal**: List work experience chronologically with achievements

**Independent Test**: Experience section shows job history in order

### Implementation for User Story 5

- [ ] T020 [US5] Add experience HTML structure in src/index.html
- [ ] T021 [US5] Style experience timeline in src/css/styles.css
- [ ] T022 [US5] Populate experience data in src/js/data.js

**Checkpoint**: Experience history clearly presented

---

## Phase 8: User Story 6 - Projects Section (Priority: P1)

**Goal**: Display portfolio projects with links and technologies

**Independent Test**: Projects section lists projects with tech stack and links

### Implementation for User Story 6

- [ ] T023 [US6] Add projects HTML structure in src/index.html
- [ ] T024 [US6] Style project cards in src/css/styles.css
- [ ] T025 [US6] Populate projects data in src/js/data.js

**Checkpoint**: Projects showcase technical work

---

## Phase 9: User Story 7 - Contact Section (Priority: P1)

**Goal**: Provide contact information and social links

**Independent Test**: Contact section shows email and links

### Implementation for User Story 7

- [ ] T026 [US7] Add contact HTML structure in src/index.html
- [ ] T027 [US7] Style contact form/links in src/css/styles.css
- [ ] T028 [US7] Populate contact data in src/js/data.js

**Checkpoint**: Contact information accessible

---

## Phase 10: User Story 8 - Animations (Priority: P1)

**Goal**: Add particle background and typing effect for DevOps commands

**Independent Test**: Page loads with animated background and typing demo

### Implementation for User Story 8

- [ ] T029 [US8] Integrate Lottie particle animation in src/js/animations.js
- [ ] T030 [US8] Add Lottie JSON file in src/assets/lottie/particles.json
- [ ] T031 [US8] Implement Typed.js for DevOps commands in src/js/animations.js
- [ ] T032 [US8] Style animation containers in src/css/styles.css

**Checkpoint**: Animations enhance visual appeal without performance impact

---

## Phase 11: User Story 9 - Responsive Design (Priority: P1)

**Goal**: Ensure site works perfectly on all devices

**Independent Test**: Test on mobile/desktop, verify layout adapts

### Implementation for User Story 9

- [ ] T033 [US9] Add responsive breakpoints in src/css/styles.css
- [ ] T034 [US9] Optimize mobile navigation in src/index.html
- [ ] T035 [US9] Test and adjust animations for mobile in src/js/animations.js

**Checkpoint**: Fully responsive across devices

---

## Phase 12: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T036 [P] Add semantic HTML and ARIA labels for accessibility in src/index.html
- [ ] T037 [P] Optimize performance (lazy load images, minify) in src/
- [ ] T038 [P] Add smooth scrolling and navigation in src/js/main.js
- [ ] T039 Validate against constitution.md principles
- [ ] T040 Run quickstart.md setup validation

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can proceed in parallel
- **Polish (Final Phase)**: Depends on all user stories being complete

### User Story Dependencies

- All user stories (US1-US9): Independent after Foundational, can run in parallel

### Within Each User Story

- HTML structure first
- Then styling
- Then data population

### Parallel Opportunities

- Setup tasks marked [P] can run in parallel
- Foundational tasks marked [P] can run in parallel
- All user stories can start in parallel after Foundational
- Within stories, HTML and data can be parallel with styling

### Parallel Example: Multiple Sections

```bash
# Launch hero and about together:
Task: "Add hero HTML structure in src/index.html"
Task: "Add about HTML structure in src/index.html"

# But style separately to avoid conflicts
```

---

## Implementation Strategy

### MVP First (Hero + About Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1 (Hero)
4. Complete Phase 4: User Story 2 (About)
5. **STOP and VALIDATE**: Test basic portfolio independently
6. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add sections one by one → Test each independently
3. Add animations and responsive last
4. Each addition enhances without breaking previous

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once ready: Different developers work on different sections in parallel
3. Integrate and test each section independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story
- Each section independently completable
- Commit after each task
- Validate checkpoints to ensure incremental delivery