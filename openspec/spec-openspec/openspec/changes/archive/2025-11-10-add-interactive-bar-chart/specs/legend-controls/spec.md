# Spec: Legend Controls

## ADDED Requirements

### Requirement: Legend Visibility Toggle
The system SHALL provide a control to show or hide the chart legend.

#### Scenario: User hides the legend
- **Given** the chart is displayed with legend visible
- **When** the user clicks the "Hide Legend" toggle button
- **Then** the legend disappears from view
- **And** the chart resizes to fill the available space
- **And** the toggle button label changes to "Show Legend"
- **And** the chart remains readable without the legend

#### Scenario: User shows the legend
- **Given** the chart is displayed with legend hidden
- **When** the user clicks the "Show Legend" toggle button
- **Then** the legend appears above or below the chart
- **And** the chart resizes appropriately
- **And** the toggle button label changes to "Hide Legend"
- **And** the legend displays the dataset label "Monthly Sales"

### Requirement: Legend Display
When visible, the legend SHALL display dataset information in a readable format.

#### Scenario: Legend shows correct information
- **Given** the legend is visible
- **When** the user views the chart
- **Then** the legend displays the dataset label
- **And** the legend color matches the theme
- **And** the legend text is clearly readable
- **And** the legend uses appropriate font size

### Requirement: Legend State Management
Legend visibility state SHALL be managed using React hooks and passed to Chart.js configuration.

#### Scenario: Legend state controls Chart.js display
- **Given** the legend visibility is implemented
- **When** reviewing the implementation
- **Then** legend state uses useState hook with boolean type
- **And** initial state is set to true (visible)
- **And** state changes update the Chart.js options.plugins.legend.display property
- **And** changes take effect immediately without full page reload
