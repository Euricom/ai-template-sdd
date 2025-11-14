# Tasks: Claude Code Agent File Sharing Platform

**Feature Branch**: `001-agent-file-sharing`
**Generated**: 2025-11-13
**Input**: Design documents from `/specs/001-agent-file-sharing/`

## Format: `- [ ] [ID] [P?] [Story?] Description with file path`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (US1, US2, US3, US4)
- File paths use `@/*` alias mapping to project root

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [X] T001 Install required dependencies: react-markdown, remark-gfm, zod via pnpm
- [X] T002 [P] Initialize shadcn/ui with `npx shadcn@latest init`
- [X] T003 [P] Add shadcn/ui components: button, card, input, textarea, badge
- [X] T004 [P] Create component directory structure: src/components/client/ and src/components/server/
- [X] T005 [P] Create server directory structure: src/server/data/ and src/server/actions/
- [X] T006 [P] Create lib directory structure: src/lib/utils/ and src/lib/validation/
- [X] T007 [P] Create types directory: src/types/
- [X] T008 Configure TypeScript strict mode if not already enabled in tsconfig.json

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T009 [P] Create AgentFile type interface in src/types/AgentFile.ts
- [X] T010 [P] Create Pagination types (PaginationState, PaginatedResponse) in src/types/Pagination.ts
- [X] T011 [P] Create Clipboard types (CopyResult) in src/types/Clipboard.ts
- [X] T012 [P] Create validation schema with Zod for agent file form in src/lib/validation/agentFileSchema.ts
- [X] T013 [P] Create app constants (PAGE_SIZE, max lengths) in src/lib/constants.ts
- [X] T014 Create mock agent files data store with initial dataset (5 files) in src/server/data/mockAgentFiles.ts
- [X] T015 Implement helper functions (getAgentFiles, getAgentFileById, addAgentFile) in src/server/data/mockAgentFiles.ts
- [X] T016 [P] Create clipboard utility function (copyToClipboard) in src/lib/utils/clipboard.ts
- [X] T017 [P] Create pagination utility function (calculatePagination) in src/lib/utils/pagination.ts
- [X] T018 Create Server Actions file with getAgentFiles, getAgentFileById, postAgentFile in src/server/actions/agentFileActions.ts
- [X] T019 Add error boundary component in app/error.tsx
- [X] T020 Update root layout metadata for SEO in app/layout.tsx

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Browse Agent Files (Priority: P1) 🎯 MVP

**Goal**: Allow users to browse through a paginated list of agent files to discover useful agent configurations

**Independent Test**: Load the application homepage and verify that a paginated list of agent files displays with titles, descriptions, and pagination controls. Users can navigate between pages without any other features.

### Implementation for User Story 1

- [X] T021 [P] [US1] Create AgentFileCard Server Component to display individual file preview in src/components/server/AgentFileCard.tsx
- [X] T022 [P] [US1] Create EmptyState Server Component for when no files exist in src/components/server/EmptyState.tsx
- [X] T023 [US1] Create AgentFileList Server Component to render grid of file cards in src/components/server/AgentFileList.tsx
- [X] T024 [US1] Create PaginationControls Client Component with next/prev buttons in src/components/client/PaginationControls.tsx
- [X] T025 [US1] Implement home page (app/page.tsx) with pagination using searchParams, fetching files, and rendering list
- [X] T026 [US1] Add navigation link to post page in home page layout
- [X] T027 [US1] Test pagination with >12 mock files by adding more data to mockAgentFiles.ts
- [X] T028 [US1] Verify empty state displays when no files available
- [X] T029 [US1] Verify pagination controls disable at boundaries (first/last page)

**Checkpoint**: User Story 1 complete - users can browse and navigate paginated list of agent files

---

## Phase 4: User Story 2 - View Agent File Details (Priority: P1) 🎯 MVP

**Goal**: Allow users to view the full details and content of an agent file to understand what it does before using it

**Independent Test**: Click on any agent file from the browse list and verify that the detail page displays file name, description, date posted, author, and full markdown-rendered content. Navigation back to list works.

### Implementation for User Story 2

- [ ] T030 [US2] Create AgentFileDetail Server Component to display full file content in src/components/server/AgentFileDetail.tsx
- [ ] T031 [US2] Create dynamic route page for agent detail at app/agents/[id]/page.tsx
- [ ] T032 [US2] Implement markdown rendering with react-markdown and remark-gfm plugins
- [ ] T033 [US2] Add back navigation link to browse list in detail page
- [ ] T034 [US2] Handle 404 case when agent file ID not found using Next.js notFound()
- [ ] T035 [US2] Add metadata generation for SEO (title, description) in detail page
- [ ] T036 [US2] Style markdown content with Tailwind prose classes
- [ ] T037 [US2] Test with long content (>10,000 characters) to verify scrollable container
- [ ] T038 [US2] Verify placeholder text displays for files with empty descriptions

**Checkpoint**: User Story 2 complete - users can view full details and markdown content of any agent file

---

## Phase 5: User Story 3 - Copy Agent File Content (Priority: P1) 🎯 MVP

**Goal**: Allow users to easily copy agent file content to clipboard for reuse in their Claude Code projects

**Independent Test**: On any agent file detail page, click the copy button and verify content is copied to clipboard. Paste into another application to confirm. Test error handling when clipboard permission is denied.

### Implementation for User Story 3

- [ ] T039 [US3] Create CopyButton Client Component with state management in src/components/client/CopyButton.tsx
- [ ] T040 [US3] Integrate clipboard utility function with visual feedback (copied state)
- [ ] T041 [US3] Add error handling UI for clipboard failures (permission denied, unsupported API)
- [ ] T042 [US3] Add CopyButton to AgentFileDetail component in detail page
- [ ] T043 [US3] Add success message display with 2-second timeout
- [ ] T044 [US3] Test copy functionality in Chrome, Firefox, Safari, Edge (last 2 versions)
- [ ] T045 [US3] Test error scenario by denying clipboard permission
- [ ] T046 [US3] Verify copied content pastes correctly with markdown formatting
- [ ] T047 [US3] Add loading state to CopyButton during async operation

**Checkpoint**: User Story 3 complete - users can copy agent file content with one click and receive visual feedback

---

## Phase 6: User Story 4 - Post New Agent Files (Priority: P2)

**Goal**: Allow users to contribute their own agent files to the platform by posting them via a form

**Independent Test**: Navigate to /post, fill out the form with name, description, and content. Submit and verify validation works, success confirmation appears, new file appears in browse list, and user is redirected to the posted file's detail page.

### Implementation for User Story 4

- [ ] T048 [P] [US4] Create MarkdownPreview Client Component for live preview in src/components/client/MarkdownPreview.tsx
- [ ] T049 [US4] Create PostAgentFileForm Client Component with form state management in src/components/client/PostAgentFileForm.tsx
- [ ] T050 [US4] Implement form validation using Zod schema with real-time error display
- [ ] T051 [US4] Add required field indicators and validation error messages to form
- [ ] T052 [US4] Integrate Server Action (postAgentFile) with form submission
- [ ] T053 [US4] Implement markdown preview functionality for content field
- [ ] T054 [US4] Add success confirmation message after submission
- [ ] T055 [US4] Implement redirect to newly posted file's detail page on success
- [ ] T056 [US4] Create post page route at app/post/page.tsx with form
- [ ] T057 [US4] Add navigation link to post page from home page
- [ ] T058 [US4] Style form with proper spacing, labels, and accessibility
- [ ] T059 [US4] Test form validation with invalid inputs (missing fields, too long, wrong extension)
- [ ] T060 [US4] Test form validation with special characters and malformed markdown
- [ ] T061 [US4] Verify new file appears immediately in browse list after posting
- [ ] T062 [US4] Add loading state to submit button during form submission

**Checkpoint**: User Story 4 complete - users can post new agent files and see them in the browse list

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories and overall quality

- [ ] T063 [P] Add hover states and transitions to all interactive elements (cards, buttons)
- [ ] T064 [P] Ensure mobile responsive layouts work on tablet and mobile viewports
- [ ] T065 [P] Add focus states for keyboard navigation accessibility
- [ ] T066 [P] Verify all shadcn/ui components have proper ARIA labels
- [ ] T067 Test complete user journey from browse → detail → copy on desktop
- [ ] T068 Test complete user journey from post → success → browse on desktop
- [ ] T069 Test all scenarios from quickstart.md validation checklist
- [ ] T070 [P] Run `pnpm build` to verify production build succeeds
- [ ] T071 [P] Run `pnpm lint` and fix any linting errors
- [ ] T072 Test Lighthouse score (target >90)
- [ ] T073 Verify First Contentful Paint <1.5s and Time to Interactive <3.5s
- [ ] T074 Test edge cases: extremely long content, special characters, empty descriptions
- [ ] T075 Verify browser compatibility in last 2 versions of Chrome, Firefox, Safari, Edge

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3-6)**: All depend on Foundational phase completion
  - US1, US2, US3, US4 can proceed in parallel after foundational (if staffed)
  - Or sequentially in priority order (P1 stories first: US1 → US2 → US3, then US4)
- **Polish (Phase 7)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1) - Browse**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P1) - View Details**: Can start after Foundational (Phase 2) - Integrates with US1 (links from cards) but independently testable
- **User Story 3 (P1) - Copy**: Can start after Foundational (Phase 2) - Integrates with US2 (button on detail page) but independently testable
- **User Story 4 (P2) - Post**: Can start after Foundational (Phase 2) - Integrates with US1 (new files appear in list) but independently testable

### Within Each User Story

- **US1**: Components before pages → Test edge cases
- **US2**: Component → Page setup → Markdown rendering → Metadata
- **US3**: CopyButton component → Integration → Testing
- **US4**: Preview component → Form component → Page → Validation testing

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel (T002-T007)
- All Foundational tasks marked [P] can run in parallel within Phase 2 (T009-T013, T016-T017)
- Within US1: T021 and T022 can run in parallel (different files)
- Within US4: T048 can be built while T049 is in progress
- Once Foundational phase completes, all user stories can start in parallel (if team capacity allows)
- All Polish tasks marked [P] can run in parallel (T063-T066, T070-T071)

---

## Parallel Example: User Story 1 (Browse)

```bash
# Launch component development in parallel:
Task: "Create AgentFileCard Server Component in src/components/server/AgentFileCard.tsx"
Task: "Create EmptyState Server Component in src/components/server/EmptyState.tsx"
# Then: Create AgentFileList (depends on card + empty state)
# Then: Create PaginationControls
# Then: Implement home page (depends on list + pagination)
```

---

## Parallel Example: Foundational Phase

```bash
# Launch type definitions in parallel:
Task: "Create AgentFile type interface in src/types/AgentFile.ts"
Task: "Create Pagination types in src/types/Pagination.ts"
Task: "Create Clipboard types in src/types/Clipboard.ts"
Task: "Create validation schema in src/lib/validation/agentFileSchema.ts"
Task: "Create app constants in src/lib/constants.ts"

# Launch utilities in parallel:
Task: "Create clipboard utility function in src/lib/utils/clipboard.ts"
Task: "Create pagination utility function in src/lib/utils/pagination.ts"
```

---

## Implementation Strategy

### MVP First (User Stories 1, 2, 3 Only - All P1)

1. Complete Phase 1: Setup (T001-T008)
2. Complete Phase 2: Foundational (T009-T020) - **CRITICAL - blocks all stories**
3. Complete Phase 3: User Story 1 (T021-T029) - Browse agent files
4. Complete Phase 4: User Story 2 (T030-T038) - View details
5. Complete Phase 5: User Story 3 (T039-T047) - Copy content
6. **STOP and VALIDATE**: Test US1, US2, US3 independently
7. Deploy/demo MVP with core browsing and copying functionality

### Full Feature (Add User Story 4 - P2)

1. Complete MVP first (Phases 1-5)
2. Complete Phase 6: User Story 4 (T048-T062) - Post new files
3. **VALIDATE**: Test US4 independently and integration with US1
4. Complete Phase 7: Polish (T063-T075)
5. Deploy full feature

### Incremental Delivery

1. **Sprint 1**: Setup + Foundational (T001-T020) → Foundation ready
2. **Sprint 2**: User Story 1 (T021-T029) → Test independently → Deploy/Demo (Browse works!)
3. **Sprint 3**: User Story 2 (T030-T038) → Test independently → Deploy/Demo (View details works!)
4. **Sprint 4**: User Story 3 (T039-T047) → Test independently → Deploy/Demo (Copy works - MVP complete!)
5. **Sprint 5**: User Story 4 (T048-T062) → Test independently → Deploy/Demo (Post works!)
6. **Sprint 6**: Polish (T063-T075) → Final production release

### Parallel Team Strategy

With 3 developers after Foundational phase completes:

1. **Team completes Setup + Foundational together** (T001-T020)
2. **Once Foundational is done**:
   - Developer A: User Story 1 (Browse) - T021-T029
   - Developer B: User Story 2 (View Details) - T030-T038
   - Developer C: User Story 3 (Copy) - T039-T047
3. **After P1 stories complete**:
   - Developer A: User Story 4 (Post) - T048-T062
   - Developers B & C: Polish tasks - T063-T075
4. Stories integrate seamlessly due to clean contracts (types, Server Actions)

---

## Summary

- **Total Tasks**: 75
- **Task Count by Phase**:
  - Setup: 8 tasks
  - Foundational: 12 tasks (BLOCKS all stories)
  - User Story 1 (P1): 9 tasks
  - User Story 2 (P1): 9 tasks
  - User Story 3 (P1): 9 tasks
  - User Story 4 (P2): 15 tasks
  - Polish: 13 tasks

- **Task Count by User Story**:
  - US1 (Browse): 9 tasks
  - US2 (View Details): 9 tasks
  - US3 (Copy): 9 tasks
  - US4 (Post): 15 tasks

- **Parallel Opportunities**:
  - 17 tasks marked [P] across all phases
  - After foundational complete, 4 user stories can proceed in parallel

- **MVP Scope (P1 stories only)**:
  - Tasks T001-T047 (47 tasks)
  - Delivers: Browse, View Details, Copy functionality
  - Estimated: 2-3 sprints for solo developer, 1 sprint for team of 3

- **Full Feature Scope (P1 + P2 stories)**:
  - Tasks T001-T075 (75 tasks)
  - Adds: Post new agent files, Polish
  - Estimated: 4-5 sprints for solo developer, 2 sprints for team of 3

---

## Notes

- All tasks follow strict format: `- [ ] [ID] [P?] [Story?] Description with file path`
- Tests are NOT included (optional per spec, not explicitly requested)
- Each user story is independently testable per spec requirements
- Foundational phase (T009-T020) is critical path - must complete before any story work
- Use path alias `@/*` which maps to project root
- Verify checkbox format is maintained when marking tasks complete
- Commit after each logical task group (e.g., all US1 components)
- Stop at any checkpoint to validate story independently
