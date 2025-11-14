# Spec: Color Customization

## ADDED Requirements

### Requirement: Individual Bar Color Picker
The system SHALL provide a color picker for each bar in the chart.

#### Scenario: User changes color of first bar
- **Given** the chart is displayed with default colors
- **When** the user opens the color picker for the first bar (January)
- **And** selects a new color (e.g., bright red)
- **Then** the first bar immediately updates to the selected color
- **And** other bars remain unchanged
- **And** the legend reflects the new color if visible

#### Scenario: User changes multiple bar colors
- **Given** the chart is displayed
- **When** the user changes colors for January, March, and May bars
- **Then** only those three bars update to the new colors
- **And** February, April, and June bars retain their original colors
- **And** all changes are immediately visible

### Requirement: Color Picker UI
Color pickers SHALL be implemented using native HTML5 color input controls.

#### Scenario: Color pickers are accessible
- **Given** the color customization UI is rendered
- **When** the user views the controls
- **Then** there are 6 color pickers displayed (one per bar)
- **And** each picker is labeled with the corresponding month name
- **And** each picker shows the current bar color
- **And** pickers are arranged in a horizontal row or grid below the chart

#### Scenario: Color picker interaction is smooth
- **Given** a color picker is displayed
- **When** the user clicks on a color picker
- **Then** the native color picker dialog opens
- **And** the current color is pre-selected
- **And** selecting a color updates the chart without delay
- **And** closing the picker without selecting keeps the current color

### Requirement: Custom Colors Persist in Theme Changes
Custom bar colors SHALL be preserved when switching between light and dark themes.

#### Scenario: Custom color survives theme toggle
- **Given** the user has set the January bar to bright red
- **When** the user toggles from light to dark theme
- **Then** the January bar adjusts brightness for dark theme
- **And** the hue remains red
- **And** the color is still recognizable as the user's choice

#### Scenario: Custom color survives multiple theme toggles
- **Given** the user has customized all 6 bar colors
- **When** the user toggles theme multiple times (light → dark → light)
- **Then** all custom colors are preserved
- **And** colors adjust appropriately for each theme
- **And** returning to the original theme shows the original brightness

### Requirement: Color State Management
Bar colors SHALL be stored in component state and synchronized with Chart.js data.

#### Scenario: Color state is properly typed
- **Given** the color customization is implemented
- **When** reviewing the implementation
- **Then** colors are stored in state as an array of strings
- **And** the array type is explicitly defined as string[]
- **And** color updates use proper setState patterns
- **And** Chart.js backgroundColor property syncs with state

#### Scenario: Color updates are efficient
- **Given** a user changes a bar color
- **When** the state updates
- **Then** only the backgroundColor array is modified
- **And** the entire chart does not re-render from scratch
- **And** the update is visually instantaneous (<100ms)
