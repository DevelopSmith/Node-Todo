var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var controllers = require('./controllers');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/dist'));
app.set('view engine', 'ejs');

mongoose.connect(config.getDBConnectionStr(), function(err, db){
	if(!err){
		console.log('Connected to mongo!');
	}
});

controllers(app); // module.export will ask for it

app.listen(port);