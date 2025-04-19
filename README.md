# GeoMap Draw

A lightweight web tool for drawing and measuring GeoJSON geometries on interactive maps.

## Features
- Draw LineString, Polygon or Circle geometries.
- Set labels
- View coordinates of drawn features
- Calculate measurements (length, area)
- Adapt drawings to terrain elevation
- Export to GeoJSON format

## Demo
This project is available at [GitHub Pages URL]

## Technology Stack
- Vite
- React
- MapLibre GL JS
- Testing Library for unitary or functional testing
- ESLint for code quality and consistency
- PostCSS for CSS styling

## Development

### Prerequisites
- Node.js (v16+)
- npm

### Setup
```bash
# Start development server
npm run dev

# Run tests
npm run test
npm run test:watch

# Run linting
npm run lint

# Check types
npm run check-types
npm run check-types:watch
