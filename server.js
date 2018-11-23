'use strict'
var http = require('http');
var express = require('express');
var path = require('path');
var app = express();
// redirect all others to the index (HTML5 history)

app.use(express.static(path.join(__dirname,'public')));
app.all('*',function(req,res){
	res.sendFile(path.join(__dirname,'./public/index.html'));

});
var port = process.env.PORT || 3000;
app.set('port',port);
var server = http.createServer(app);
server.listen(port,()=> console.log(`API running on localhost:${port}`)); 