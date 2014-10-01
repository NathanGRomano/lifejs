var express = require('express');
var app = express();
app.use(express.static(__dirname+'/'));
require('http').Server(app).listen(3000);
