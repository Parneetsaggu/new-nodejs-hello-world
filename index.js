var https = require('https');

var server = https.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello yo World!");

});

var port = 8080;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
