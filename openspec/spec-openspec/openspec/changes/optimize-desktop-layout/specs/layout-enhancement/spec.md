# Spec: Layout Enhancement

## MODIFIED Requirements

### Requirement: Desktop Two-Column Layout
The application SHALL display chart and controls in a side-by-side two-column layout on desktop screens.

#### Scenario: User views application on desktop browser
- **Given** the user opens the application on a desktop browser (1024px+ width)
- **When** the page loads
- **Then** the chart appears on the left taking 60-70% of the width
- **And** the controls sidebar appears on the right taking 30-40% of the width
- **And** both columns are visible without scrolling horizontally
- **And** the layout uses the full available width up to 1600px maximum

#### Scenario: User resizes browser window from desktop to tablet
- **Given** the user is viewing the desktop layout (1024px+ width)
- **When** the user resizes the browser window below 1024px
- **Then** the layout switches to a stacked vertical layout
- **And** the chart appears above the controls
- **And** both sections span the full width
- **And** the transition is smooth without layout jumps

### Requirement: Responsive Sidebar Controls
The controls panel SHALL be displayed as a fixed-width sidebar on desktop and full-width on mobile/tablet.

#### Scenario: Controls sidebar on desktop
- **Given** the application is displayed on desktop (1024px+ width)
- **When** the user views the controls
- **Then** the controls are displayed in a 350px fixed-width sidebar
- **And** the sidebar contains theme toggle at the top
- **And** the sidebar contains legend toggle below theme toggle
- **And** the sidebar contains color pickers in a vertical list
- **And** all controls are easily accessible without scrolling within the sidebar

#### Scenario: Controls on mobile
- **Given** the application is displayed on mobile (<768px width)
- **When** the user views the controls
- **Then** the controls span the full width below the chart
- **And** color pickers are displayed in a grid layout
- **And** all controls remain fully functional

### Requirement: Maximum Content Width
The application SHALL enforce a maximum content width to maintain readability on ultra-wide displays.

#### Scenario: User views on ultra-wide display
- **Given** the user has a 2560px wide display
- **When** the application loads
- **Then** the content is limited to 1600px maximum width
- **And** the content is centered horizontally
- **And** there is equal whitespace on both sides
- **And** the chart and sidebar maintain their proportional widths
