# Nvidia Stock Week Trend Tracker

A modern, glassmorphic web application to track the weekly trend of NVIDIA (NVDA) stock.

## Features
- **Real-time Data**: Fetches latest stock data via Yahoo Finance API (using CORS Proxy).
- **Dynamic Visualization**: Interactive line chart showing the last 5 days of data.
- **Adaptive Theme**: The interface changes color based on the stock trend (Green for profit, Red for loss).
- **Glassmorphism Design**: Sleek, modern UI with neon glow effects.

## How to Run
This is a static HTML/JS application, but due to CORS (Cross-Origin Resource Sharing) policies of the Yahoo API, it is best run on a local server.

### Prerequisites
- Node.js installed

### Steps
1. Navigate to the project folder:
   ```bash
   cd app-nvidia-stock
   ```
2. Start a local server:
   ```bash
   npx serve .
   ```
3. Open your browser to: `http://localhost:3000`

## Tech Stack
- **Core**: HTML5, CSS3, Vanilla JavaScript
- **Libraries**: Chart.js 
- **Icons**: Phosphor Icons
- **Data**: Yahoo Finance API (unofficial)
