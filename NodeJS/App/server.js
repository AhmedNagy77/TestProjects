const http = require('http');
const express = require('express');
const os = require('os');
const math = require('./math'); // Importing the math module

const HTTP_PORT = 3000;
const EXPRESS_PORT = 4000;

// 1. Native HTTP Server Setup
const nativeServer = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ 
        source: "Native HTTP ModuleXX",
        message: "Hello from plain Node.jsXX!" ,
        hostname: os.hostname(),
        platform: os.platform(),
        architecture: os.arch(),
        uptime: os.uptime(),
        type: os.type(),
        release: os.release(),
        version: os.version(),
        dirname: __dirname,
        filename: __filename
    }));
});

nativeServer.listen(HTTP_PORT, () => {
    console.log(`[Native] Server running on port ${HTTP_PORT}`);
});

// 2. Express Framework Server Setup
const expressApp = express();
// Middleware to parse incoming JSON payloads
expressApp.use(express.json());
/*
expressApp.get('/', (req, res) => {
    res.json({ 
        source: "Express Framework",
        message: "Hello from Express Router!" 
    });
});*/

// GET Method: Expects query parameters, e.g., /add?num1=5&num2=10
expressApp.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    // Validation check
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Please provide valid num1 and num2 query parameters.' });
    }

    const result = math.add(num1, num2); // Using the add function from math.js
    res.json({ num1, num2, result });
});

// POST Method: Expects a JSON body, e.g., { "num1": 5, "num2": 10 }
expressApp.post('/add', (req, res) => {
    const { num1, num2 } = req.body;

    // Convert to numbers explicitly in case they were passed as strings
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    // Validation check
    if (isNaN(n1) || isNaN(n2)) {
        return res.status(400).json({ error: 'Please provide valid num1 and num2 properties in the request body.' });
    }

    const result = math.add(n1, n2); // Using the add function from math.js
    res.json({ num1: n1, num2: n2, result });
});


expressApp.listen(EXPRESS_PORT, () => {
    console.log(`[Express] Server running on port ${EXPRESS_PORT}`);
});