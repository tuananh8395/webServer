var app = require('express')(),
// port = process.env.PORT || 3000;
port = 3000;

app.get('/',function(req,res){
	res.sendFile(__dirname + "/index.html", "utf-8");
	console.log('Accessing to Server')
	var ip = req.connection.remoteAddress;
	console.log('IP: ' + ip);
})

app.listen(port, function() {
	console.log('Listening on port ' + port)
})

// var http = require('http');
// var fs = require("fs")

// var count = 0

// http.createServer(function(req, res) {
// 	count = count + 1
// 	console.log('Accessing to Server')
// 	var ip = req.connection.remoteAddress;
// 	console.log('IP: ' + ip);
// 	res.writeHead(200, {'Content-Type':'text/html'})
// 	var data = fs.readFileSync(__dirname + "/index.html", "utf-8")
// 	// data = data.replace("{count}", count)
// 	res.end(data)
// }).listen(3000)