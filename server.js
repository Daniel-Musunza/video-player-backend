const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const fs = require('fs');

// Enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Update the origin to restrict access to specific domains
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


// Parse JSON bodies
app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname)));

  // Define a route to serve your HTML file
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets', 'index-dac40a44.js'));
    // response.json({ info: "cool video player server" });
  });

  // Define a route to serve your JavaScript file
  app.get('/assets/index-dac40a44.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets', 'index-dac40a44.js'));
  });


  const port = 3000;
  const hostname = 'localhost'; // Replace with your server's IP address
  app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
