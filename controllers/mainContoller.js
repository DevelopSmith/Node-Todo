var Todos = require('../models/todoModel');
var bodyParser = require('body-parser');

module.exports = function(app) {
	app.use(bodyParser.json());

	app.get('/', function(req, res) {
		res.send('result');
	});
}