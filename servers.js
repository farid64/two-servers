const http = require("http");

const PORT1 = 7000;
const PORT2 = 7500;

function handleRequest1(request, response){
	response.end("It works! and you are pretty good" + request.url);
}

function handleRequest2(request, response){
	response.end("It works! and You're not handsome:" + request.url);
}

var server1 = http.createServer(handleRequest1);

var server2 = http.createServer(handleRequest2);

server1.listen(PORT1, function(){
	console.log("Server listening on: http://localhost:" + PORT1);
});

server2.listen(PORT2, function(){
	console.log("Server listening on: http://localhost:" + PORT2);
});