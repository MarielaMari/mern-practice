const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Incoming Request");
  console.log(req.method, req.url);

  res.end("<h1>Success!!!</h1>");
});

server.listen(5000); //server on the local computer, not connected to the Internet
