# Implementation Plan: Nvidia Stock Week Trend

## 1. Project Setup
-   **Directory**: `app-nvidia-stock/`
-   **Files**:
    -   `index.html`: Main HTML structure (Semantic HTML5).
    -   `style.css`: Visual styling (CSS Variables, Flexbox/Grid, Glassmorphism).
    -   `app.js`: Application logic and API handling.
-   **Dependencies**:
    -   `Chart.js` (via CDN) for the trend chart.
    -   `Phosphor Icons` or `FontAwesome` (via CDN) for icons.

## 2. API & Data Strategy
-   **Endpoint**: `https://query1.finance.yahoo.com/v8/finance/chart/NVDA?interval=1d&range=5d`
-   **CORS Handling**: Use `https://corsproxy.io/?` prepended to the URL to bypass browser restrictions.
-   **Data Parsing**:
    -   Extract `chart.result[0].timestamp` and `chart.result[0].indicators.quote[0].close`.
    -   Calculate "Week Growth" (formatted as percentage).

## 3. UI Design (The "Wow" Factor)
-   **Theme**: Cyberpunk/Tech Dark Mode.
    -   Background: Deep Black/Charcoal (`#0a0a0a`).
    -   Accent: Nvidia Green (`#76B900`).
-   **Components**:
    -   **Hero Card**: Glassmorphic container centering the stock price.
    -   **Chart Area**: Minimalist line chart with gradient fill under the line.
    -   **Trend Indicator**: Green (up) or Red (down) arrow with percentage.

## 4. Execution Steps
1.  **Scaffold**: Create empty files.
2.  **HTML Structure**: Build the skeleton.
3.  **CSS Foundation**: specific fonts (Inter/Roboto), reset, and base colors.
4.  **JS Logic**:
    -   Fetch data.
    -   Handle errors (show "Offline/Demo Data" if proxy fails).
    -   Render Chart.
5.  **Refinement**: precise padding, shadows, and animations.
