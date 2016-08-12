var apiController = require('./apiController');
var mainController = require('./mainController');

module.exports = function(app) {
	apiController(app); // module.export will ask for it
	mainController(app); // module.export will ask for it
}