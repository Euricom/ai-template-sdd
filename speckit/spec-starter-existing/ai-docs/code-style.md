# Coding Style Guide

## General Guidelines
- Keep the code simple and readable.
- Use Prettier for code formatting.

## File Naming and Organization
- Files and folder follow the dash-casing (e.g `src/coding-style.md`)
- React components use PascalCasing  (e.g. `src/components/Button.tsx`) 
- Colocate files in the folder where they're used unless they can be used across the app
- If a component can be used in many places, place it in the `src/components` folder
- Shadcn components are in `src/components/ui`, all other components are in `src/components/`
  
## JavaScript
- Use `const` and `let` instead of `var`.
- Prefer arrow functions for anonymous functions.
- Use template literals for string concatenation.
- Always use semicolons.
- Follow the Prettier configuration for formatting.
  
