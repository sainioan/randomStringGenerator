var http=require('http')
var server=http.createServer((function(request,response)
{
	response.writeHead(200,
	{"Content-Type" : "text/plain"});
	response.end("Server started in port 7000");
}));
server.listen(7000);
console.log("Server started in port 7000");
const express = require("express");
const app = express();

app.listen(5000, () => {
  console.log("Application started and Listening on port 5000");
});

app.get("/GET", (req, res) => {
  res.send("<html> <head>A simple web page:</head><body><h1> Hello World!</p></h1></body></html>");
});
