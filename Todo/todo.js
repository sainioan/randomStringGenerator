var http=require('http')
var server=http.createServer((function(request,response)
{
	response.writeHead(200,
	{"Content-Type" : "text/plain"});
	response.end("Server started in port 7000");
}));
server.listen(7000);
console.log("Server started in port 7000");