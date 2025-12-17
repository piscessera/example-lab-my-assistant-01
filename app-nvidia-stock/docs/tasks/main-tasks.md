# Project Tasks: Nvidia Stock Week Trend

## Pre-Development
- [x] **Research Data Source**: Selected **Yahoo Finance API**.
    -   *Action*: Verify specific endpoint (e.g., `v8/finance/chart/NVDA`) and find a working CORS proxy (e.g., `cors-anywhere` or similar) for pure client-side fetching.
- [x] **Finalize Design Concept**: Defined color palette (Nvidia Green #76B900, Dark Backgrounds) and layout.

## Development
- [x] **Project Setup**: Create `index.html`, `style.css`, `app.js`.
- [x] **Core UI Implementation**: 
    -   Build the layout structure (Header, Main Content, Footer).
    -   Implement "Glassmorphism" card for the stock widget.
- [x] **Data Logic**: 
    -   Write function to fetch/mock stock data.
    -   Process data for weekly trend (last 5-7 closing prices).
- [x] **Visualization**: 
    -   Implement a simple chart using a library (e.g., Chart.js) or CSS-based bars/lines.
    -   Display current price and percentage change.
- [x] **Styling & Polish**: 
    -   Apply animations (fade-in, hover effects).
    -   Ensure responsiveness.

## Post-Development
- [x] **Testing**: Verified data accuracy and UI responsiveness.
    -   *Status*: Verified working on Localhost. Price and Chart loading correctly via Proxy.
- [x] **Documentation**: Update README with how to run.
