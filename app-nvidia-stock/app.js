const CONFIG = {
    symbol: 'NVDA',
    apiUrl: 'https://query1.finance.yahoo.com/v8/finance/chart/NVDA?interval=1d&range=5d',
    proxyUrl: 'https://corsproxy.io/?'
};

const UI = {
    price: document.getElementById('currentPrice'),
    changePct: document.getElementById('changePercent'),
    trendIcon: document.getElementById('trendIcon'),
    chartCanvas: document.getElementById('stockChart')
};

async function fetchStockData() {
    try {
        const fullUrl = CONFIG.proxyUrl + encodeURIComponent(CONFIG.apiUrl);
        const response = await fetch(fullUrl);
        
        if (!response.ok) throw new Error('Network response was not ok');
        
        const data = await response.json();
        const result = data.chart.result[0];
        
        return {
            timestamps: result.timestamp,
            prices: result.indicators.quote[0].close,
            meta: result.meta
        };
    } catch (error) {
        console.error('Fetch error:', error);
        UI.price.innerText = "Error";
         // Fallback/Demo data if API fails (optional, but good for stability)
        return null;
    }
}

function processData(data) {
    if (!data) return;

    const prices = data.prices;
    const current = prices[prices.length - 1];
    const start = prices[0];
    
    // Calculate Change
    const change = current - start;
    const pctChange = (change / start) * 100;

    // Update Text UI
    UI.price.innerText = `$${current.toFixed(2)}`;
    UI.changePct.innerText = `${pctChange > 0 ? '+' : ''}${pctChange.toFixed(2)}%`;
    
    // Update Style based on trend
    if (pctChange < 0) {
        UI.changePct.classList.remove('positive');
        UI.changePct.classList.add('negative');
        UI.trendIcon.className = 'ph-bold ph-trend-down';
        document.documentElement.style.setProperty('--nv-green', '#ff4d4d'); // Dynamic theme change? Maybe to subtle
        document.documentElement.style.setProperty('--nv-green-glow', 'rgba(255, 77, 77, 0.4)');
    } else {
        UI.changePct.classList.remove('negative');
        UI.changePct.classList.add('positive');
        UI.trendIcon.className = 'ph-bold ph-trend-up';
    }

    renderChart(data.timestamps, prices, pctChange >= 0);
}

let stockChartInstance = null;

function renderChart(timestamps, prices, isPositive) {
    const ctx = UI.chartCanvas.getContext('2d');
    
    // Create Gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    const color = isPositive ? '118, 185, 0' : '255, 77, 77'; // Green or Red
    
    gradient.addColorStop(0, `rgba(${color}, 0.5)`);
    gradient.addColorStop(1, `rgba(${color}, 0.0)`);

    // Format Dates for Labels
    const labels = timestamps.map(ts => {
        const date = new Date(ts * 1000);
        return date.toLocaleDateString('en-US', { weekday: 'short' });
    });

    if (stockChartInstance) {
        stockChartInstance.destroy();
    }

    stockChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Stock Price',
                data: prices,
                borderColor: `rgb(${color})`,
                backgroundColor: gradient,
                borderWidth: 3,
                pointBackgroundColor: `rgb(${color})`,
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: `rgb(${color})`,
                fill: true,
                tension: 0.4 // Smooth curves
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    titleColor: '#888',
                    bodyColor: '#fff',
                    bodyFont: { family: 'Inter', size: 14 }
                }
            },
            scales: {
                x: {
                    grid: { display: false },
                    ticks: { color: '#666', font: { family: 'Inter' } }
                },
                y: {
                    display: false // Clean look, hide Y axis
                }
            },
            interaction: {
                mode: 'nearest',
                axis: 'x',
                intersect: false
            }
        }
    });
}

// Init
(async () => {
    const data = await fetchStockData();
    if (data) {
        processData(data);
    } else {
        // Mock data logic could go here if fetch fails completely
        console.log("Using fallback logic not implemented yet.");
    }
})();
