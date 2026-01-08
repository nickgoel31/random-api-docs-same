const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// 1. Data Source: A list of random software features
const features = [
  { id: 1, name: "Dark Mode Toggle", difficulty: "Easy", category: "UI" },
  { id: 2, name: "Real-time Chat", difficulty: "Hard", category: "Communication" },
  { id: 3, name: "Drag and Drop Dashboard", difficulty: "Medium", category: "UX" },
  { id: 4, name: "Voice Command Integration", difficulty: "Hard", category: "Accessibility" },
  { id: 5, name: "PDF Export", difficulty: "Medium", category: "Reporting" },
  { id: 6, name: "Biometric Login", difficulty: "Hard", category: "Security" }
];

// 2. Endpoint: Get a random feature
app.get('/api/feature/random', (req, res) => {
  const randomIndex = Math.floor(Math.random() * features.length);
  const randomFeature = features[randomIndex];

  res.json({
    success: true,
    timestamp: new Date().toISOString(),
    data: randomFeature
  });
});

// 3. Endpoint: Get all features
app.get('/api/features', (req, res) => {
  res.json({
    success: true,
    count: features.length,
    data: features
  });
});

app.get('/api/get-weather', (req, res) => {
  const sampleWeatherData = {
    location: "San Francisco",
    temperature: "18°C",
    condition: "Partly Cloudy",
    humidity: "72%",
    windSpeed: "15 km/h"
  };
  res.json({
    success: true,
    data: sampleWeatherData
  });
});

app.get('/api/get-news', (req, res) => {
  const sampleNewsData = [
    { id: 1, title: "Tech Company Releases New Product", summary: "A leading tech company has unveiled its latest innovation." },
    { id: 2, title: "Market Trends in 2024", summary: "An analysis of the current market trends and predictions for the year." },
    { id: 3, title: "Startup Secures Funding", summary: "A promising startup has secured significant funding to expand its operations." }
  ];  
  res.json({
    success: true,
    data: sampleNewsData
  });
});

app.get('/api/get-stocks', (req, res) => {
  const sampleStockData = [
    { symbol: "AAPL", price: 145.32, change: "+1.25%" },
    { symbol: "GOOGL", price: 2734.57, change: "-0.75%" },
    { symbol: "AMZN", price: 3342.88, change: "+0.50%" }
  ];
  res.json({
    success: true,
    data: sampleStockData
  });
});



// Start server
app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});
