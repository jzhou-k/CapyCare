// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

// import { Buffer } from 'buffer';
// import fs from 'fs';
// import path from 'path';

// Create express app
var express = require("express")
var app = express()

// Server port
var HTTP_PORT = 8000
// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});
// Root endpoint
app.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});

app.get("/api", (req, res) => {
    res.json({ message: "Hello from Express!" });
  });

// Insert here other API endpoints

// Default response for any other request
app.use(function(req, res){
    res.status(404);
});




