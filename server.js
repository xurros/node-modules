let http = require("http");

let server = http.createServer(function(req, res) {
  res.writeHead(200, {"Content-type": "text/plain"});
  res.end("Hello myNOde!\n");
})

server.listen(3000, function(){
    console.log("My first Node test server is running on Port 3000.")
});
