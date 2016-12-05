
var http = require("http");
var PORT1 = 7000;
var PORT2 = 7500;


function handlePositiveRequest(request, response) {
	chooseCompliment = praises[Math.floor(Math.random()*praises.length)];

	response.end(chooseCompliment + request.url);

}

function handleNegativeRequest(request, response) {
	chooseInsult = insults[Math.floor(Math.random()*insults.length)];

	response.end(chooseInsult + request.url);
}

var insults = [
	"I don't loathe you because you're half-witted or because you're appalling, I loathe you because you're trailer trash.",
	"I will have children and you will be trampled to death.",
	"Listen son, you best step off you shit-ass man mattress.",
	"I will give you a French fishhook.",
	"I am starting to think you adore Animal Planet maybe a little too much.",
	"I don't even feel sorry for that time I forgot your birthday.",
	"When compared to you, being dismembered isn't so bad."
];

var praises = [
	"Sushi chefs are wowed by your chopstick dexterity.",
	"Your principal would call you to the office just to look cool.",
	"You remind everyone of kiwis- delicious and surprisingly fuzzy.",
	"A 3rd tier cable network would totally create a television show about you.",
	"Your parents argue over which one of them you look like.",
	"80% of motorcycle gangs think you’d be a delightful sidecar.",
	"The FBI tapped your phone just to hear the sound of your voice."
];

var server1 = http.createServer(handlePositiveRequest);
var server2 = http.createServer(handleNegativeRequest);

server1.listen(PORT1, function(){
	console.log("Server listening on: http://localhost:%s", PORT1);
});

server2.listen(PORT2, function(){
	console.log("Server listening on: http://localhost:%s", PORT2)

});

