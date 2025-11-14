# Spec: Chart Sizing

## MODIFIED Requirements

### Requirement: Expanded Chart Width
The chart SHALL utilize available horizontal space on desktop displays instead of being constrained to 800px.

#### Scenario: Chart sizing on desktop
- **Given** the user is on a desktop browser (1024px+ width)
- **When** the chart renders
- **Then** the chart fills its container width (no 800px max-width limit)
- **And** the chart maintains readability and clarity
- **And** bars are appropriately sized for the wider viewport
- **And** the chart is responsive to container size changes

#### Scenario: Chart sizing on mobile
- **Given** the user is on a mobile device (<768px width)
- **When** the chart renders
- **Then** the chart fills 100% of the container width
- **And** the chart maintains appropriate bar sizing for smaller screens
- **And** labels and ticks remain readable

### Requirement: Flexible Aspect Ratio
The chart SHALL use a flexible aspect ratio that adapts to screen size for optimal viewing.

#### Scenario: Desktop aspect ratio
- **Given** the user is on a desktop browser (1024px+ width)
- **When** the chart renders
- **Then** the chart uses a 2:1 aspect ratio (width to height)
- **And** the chart height adjusts proportionally to width
- **And** the chart does not appear stretched or compressed

#### Scenario: Mobile aspect ratio
- **Given** the user is on a mobile device (<768px width)
- **When** the chart renders
- **Then** the chart uses a 1.5:1 or 1:1 aspect ratio
- **And** the chart is taller relative to width for better mobile viewing
- **And** vertical scrolling is minimized

### Requirement: Responsive Chart Resizing
The chart SHALL automatically resize when the browser window or viewport changes.

#### Scenario: User resizes browser window
- **Given** the chart is displayed
- **When** the user resizes the browser window
- **Then** the chart immediately adjusts its size
- **And** the chart maintains its data visualization integrity
- **And** no layout breaks or overflow occurs
- **And** the resize animation is smooth (if any)

#### Scenario: Device orientation change
- **Given** the user is on a tablet or mobile device
- **When** the user rotates the device
- **Then** the chart adapts to the new orientation
- **And** the appropriate aspect ratio is applied
- **And** all chart elements remain visible and readable
