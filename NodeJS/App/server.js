const http = require('http');
const express = require('express');

const HTTP_PORT = 3000;
const EXPRESS_PORT = 4000;

// 1. Native HTTP Server Setup
const nativeServer = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ 
        source: "Native HTTP Module",
        message: "Hello from plain Node.js!" 
    }));
});

nativeServer.listen(HTTP_PORT, () => {
    console.log(`[Native] Server running on port ${HTTP_PORT}`);
});

// 2. Express Framework Server Setup
const expressApp = express();

expressApp.get('/', (req, res) => {
    res.json({ 
        source: "Express Framework",
        message: "Hello from Express Router!" 
    });
});

expressApp.listen(EXPRESS_PORT, () => {
    console.log(`[Express] Server running on port ${EXPRESS_PORT}`);
});