# Tasks: Add Interactive Bar Chart Tool

## Implementation Tasks

### 1. Install Dependencies
- [x] Install `chart.js` (^4.4.0) via pnpm
- [x] Install `react-chartjs-2` (^5.2.0) via pnpm
- [x] Verify installations in package.json
- **Validation**: Run `pnpm list chart.js react-chartjs-2` successfully

### 2. Create Project Structure
- [x] Create `src/components/BarChart/` directory
- [x] Create `src/hooks/` directory
- [x] Create `src/utils/` directory
- **Validation**: Directories exist at specified paths

### 3. Define TypeScript Types
- [x] Create `src/components/BarChart/types.ts`
- [x] Define `ChartData` interface for chart data structure
- [x] Define `Theme` type as `'light' | 'dark'`
- [x] Define `BarChartProps` interface if needed
- **Validation**: TypeScript compiles without errors, no `any` types used

### 4. Implement Theme Utilities
- [x] Create `src/utils/chartColors.ts`
- [x] Implement `getThemeColors()` function returning background, text, grid colors for theme
- [x] Implement `adjustColorForTheme()` function to adapt custom colors
- [x] Add RGB to HSL conversion helper if needed
- **Validation**: Functions are strongly typed and return expected color values

### 5. Implement Theme Hook
- [x] Create `src/hooks/useTheme.ts`
- [x] Implement custom hook managing theme state
- [x] Export theme value and toggle function
- [x] Set initial theme to 'light'
- **Validation**: Hook follows React hooks conventions, TypeScript types are strict

### 6. Implement Basic BarChart Component
- [x] Create `src/components/BarChart/BarChart.tsx`
- [x] Import necessary Chart.js components and register them
- [x] Define sample data (6 months with values)
- [x] Set up initial state for chart data
- [x] Render Chart.js Bar component with sample data
- [x] Create `src/components/BarChart/BarChart.css` for basic styling
- **Validation**: Chart renders in browser, shows 6 bars with labels, no console errors
- **Related spec**: `chart-rendering/spec.md`

### 7. Integrate Theme Toggle
- [x] Add theme state to BarChart component using useTheme hook
- [x] Create theme toggle button in UI
- [x] Implement theme toggle handler
- [x] Apply theme colors to Chart.js options (background, text, grid, ticks)
- [x] Update CSS for light/dark theme backgrounds
- **Validation**: Clicking toggle switches theme, chart colors update immediately
- **Related spec**: `theme-support/spec.md`

### 8. Implement Legend Toggle Control
- [x] Add legend visibility state (useState with boolean)
- [x] Create "Show/Hide Legend" toggle button
- [x] Update Chart.js options.plugins.legend.display based on state
- [x] Update button label dynamically ("Show Legend" / "Hide Legend")
- **Validation**: Clicking toggle shows/hides legend, button label updates correctly
- **Related spec**: `legend-controls/spec.md`

### 9. Implement Color Customization UI
- [x] Add color state for each bar (array of 6 colors)
- [x] Create `src/components/BarChart/ChartControls.tsx` component
- [x] Render 6 color input pickers with labels (one per month)
- [x] Implement color change handlers
- [x] Update chart data backgroundColor array on color change
- [x] Style color pickers layout (horizontal row or grid)
- **Validation**: Each color picker updates its corresponding bar immediately
- **Related spec**: `color-customization/spec.md`

### 10. Implement Theme-Aware Color Adaptation
- [x] Update color change handler to store colors in a format suitable for theme adaptation
- [x] Implement logic to adjust custom colors when theme changes
- [x] Ensure brightness/lightness adjusts while preserving hue
- [x] Test multiple theme switches preserve custom colors
- **Validation**: Custom colors persist through theme changes with appropriate brightness
- **Related specs**: `color-customization/spec.md`, `theme-support/spec.md`

### 11. Integrate Into App Component
- [x] Update `src/App.tsx` to import BarChart component
- [x] Replace demo counter content with BarChart
- [x] Update `src/App.css` to style the new layout
- [x] Remove unused demo assets if desired
- **Validation**: App loads showing bar chart, no broken imports

### 12. Polish and Accessibility
- [x] Add ARIA labels to theme toggle button
- [x] Add ARIA labels to legend toggle button
- [x] Add labels to color pickers for screen readers
- [x] Verify keyboard navigation works for all controls
- [x] Check color contrast meets WCAG AA standards
- **Validation**: Manual accessibility testing, keyboard navigation works

### 13. Final Testing and Validation
- [x] Test all features work together (theme + legend + colors)
- [x] Verify no TypeScript errors (`pnpm run build`)
- [x] Verify no ESLint errors (`pnpm run lint`)
- [x] Test in both light and dark modes
- [x] Test all color customizations
- [x] Verify responsive behavior
- **Validation**: Build succeeds, lint passes, all features work as specified

## Notes on Dependencies and Parallelization
- Tasks 1-5 can be done in parallel after task 1 completes
- Task 6 depends on tasks 1, 2, 3
- Task 7 depends on task 6 and task 5
- Task 8 depends on task 6
- Task 9 depends on task 6
- Task 10 depends on tasks 4, 7, 9
- Task 11 depends on all component tasks (6-10)
- Tasks 12-13 depend on task 11

## Testing Notes
Since Vitest is planned but not yet set up, validation will be manual for this change:
- Visual inspection in browser
- Manual interaction testing
- TypeScript compilation checks
- ESLint validation

Future work should add automated tests for:
- Theme toggle behavior
- Legend toggle behavior
- Color picker updates
- Color persistence across theme changes
