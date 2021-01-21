var http = require("http");

http.createServer(function (request, response){
    // Send the HHTP header
    // HTTP Status: 200 ok
    // Content Type: text/plain

    response.writeHead(200, {'Content-Type': 'text/plain'});

    response.end('Hello World\n');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081');