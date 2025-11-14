# Proposal: Add Interactive Bar Chart Tool

## Summary
Add an interactive bar chart visualization tool that allows users to create customizable bar charts with legend controls, color customization, and automatic theme-aware color adaptation between light and dark modes.

## Motivation
The application currently only shows a simple counter demo. Adding a bar chart tool will:
- Provide users with a practical data visualization feature
- Demonstrate React state management with complex UI interactions
- Showcase theme-aware design patterns
- Create a foundation for future data visualization features

## Scope
This change introduces:
1. **Chart Rendering**: Display a bar chart using Chart.js with sample data
2. **Theme Support**: Light/dark mode toggle with theme-aware chart colors
3. **Legend Controls**: Show/hide legend functionality
4. **Color Customization**: Allow users to change individual bar colors via color picker

### Out of Scope
- Data import from external sources (CSV/JSON files)
- Multiple datasets or grouped/stacked bars
- Chart export functionality
- Advanced chart types (line, pie, etc.)
- Chart animation customization

## User Impact
Users will be able to:
- View a pre-populated bar chart with sample data
- Toggle between light and dark themes with automatic chart color updates
- Show or hide the chart legend
- Customize the color of each bar using a color picker
- See immediate visual feedback for all customization changes

## Dependencies
New dependencies required:
- `chart.js` (^4.4.0): Core charting library
- `react-chartjs-2` (^5.2.0): React wrapper for Chart.js

## Implementation Phases
1. **Phase 1**: Basic chart rendering with Chart.js and sample data
2. **Phase 2**: Theme system with light/dark mode toggle
3. **Phase 3**: Legend show/hide controls
4. **Phase 4**: Color customization for individual bars

## Alternatives Considered
- **Recharts**: Easier React integration but less flexible customization
- **Custom SVG**: Maximum control but significantly more implementation effort
- **Victory**: Good composability but larger bundle size

Chart.js was chosen for its mature ecosystem, extensive customization options, and good performance with reasonable bundle size.

## Success Criteria
- Chart renders correctly with sample data
- Theme toggle switches colors instantly without visual glitches
- Color changes persist during theme switches
- Legend toggle works without layout shifts
- All interactions are smooth and responsive
- Code follows project conventions (functional components, named exports, strict typing)
