//* Creating a Simple Web Server

const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Hello from the server!");
});

server.listen(3000, "127.0.0.1", () => {
    console.log("Listening to requests on port 3000");
});