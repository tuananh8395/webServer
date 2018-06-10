var http = require('http');
// var fs = require("fs")

var count = 0

http.createServer(function(req, res) {
	count = count + 1
	console.log("login")
	res.writeHead(200, {'Content-Type':'text/html'})
	// var data = fs.readFileSync(__dirname + "/index.html", "utf-8")
	// data = data.replace("{count}", count)
	res.end("count = " + count)
}).listen(7777)