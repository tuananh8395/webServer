var http = require('http');
// var fs = require("fs")

var count = 0

http.createServer(function(req, res) {
	count = count + 1
	console.log(res.url)
	res.writeHead(200, {'Content-Type':'text/html'})
	var data = fs.readFileSync(__dirname + "/index.html", "utf-8")
	// data = data.replace("{count}", count)
	res.end(data)
}).listen(3000)