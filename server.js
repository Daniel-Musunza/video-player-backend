const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

// Enable CORS
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname)));

// Define a route to serve your HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'assets', 'index-dac40a44.js'));
});

// Define a route to serve your JavaScript file
app.get('/assets/index-dac40a44.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'assets', 'index-dac40a44.js'));
});
app.get('/assets/index-cd401653.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'assets', 'index-cd401653.css'));
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
