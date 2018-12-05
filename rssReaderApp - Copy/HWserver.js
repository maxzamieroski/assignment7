var http = require("http");
var hostname = process.env.HOSTNAME || "localhost";

var callback = function (req, res) { // req -> request object; res -> response object
   res.writeHead(200, {'Content-Type': 'text/plain'}); // send response header
   res.end("hello world"); // send response body
}

var server = http.createServer(callback) // create an http server
server.listen(1234,hostname);
console.log("Server running...");
