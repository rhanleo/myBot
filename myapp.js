
const http = require('http')
const fs = require('fs')
const nodemon = require('nodemon')

http.createServer(function(req, res){
	fs.readFile('app.php', function(err, data){
		res.writeHead(200, {'Content-type': 'text/html'})
		res.write(data)
		res.end()
	})
	
}).listen(5000)