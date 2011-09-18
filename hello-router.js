// Load the node-router library by creationix
var server = require('node-router').getServer();

// Configure our HTTP server to respond with Hello World the root request
server.get("/", function (request, response) {
  console.log("processing request for url: " + request.url);
  response.simpleText(200, "Hello World!");
});

// Listen on port 8080 on localhost
server.listen(process.env.C9_PORT, "0.0.0.0");