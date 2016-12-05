
var http = require("http");
var PORT1 = 7000;
var PORT2 = 7500;


function handlePositiveRequest(request, response) {
	response.end("You smell nice! " + request.url);

}

function handleNegativeRequest(request, response) {
	response.end("You need prescription-strength deodorant! " + request.url);

}

var server1 = http.createServer(handlePositiveRequest);
var server2 = http.createServer(handleNegativeRequest);

server1.listen(PORT1, function(){
	console.log("Server listening on: http://localhost:%s", PORT1);
});

server2.listen(PORT2, function(){
	console.log("Server listening on: http://localhost:%s", PORT2)

});

