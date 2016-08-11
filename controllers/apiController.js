var Todos = require('../models/todoModel');
var bodyParser = require('body-parser');

module.exports = function(app) {
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));

	app.get('/api/todos/:username', function(req, res) {
		Todos.find({username: req.params.username}, function(err, result){
			res.send(result);
		});
	});

	app.get('/api/todo/:id', function(req, res) {
		Todos.findById({_id: req.params.id}, function(err, result){
			res.send(result);
		});
	});

	app.post('/api/todo', function(req, res) {
		if(req.body.id){
			Todos.findByIdAndUpdate({
				todo: req.body.todo,
				isDone: req.body.isDone,
				hasAttachment: req.body.hasAttachment
			}, function(err, result){
				if(!err){
					res.send('Success');
				}
			});
		}else{
			var newTodo = Todos({
				username: 'Mo',
				todo: req.body.todo,
				isDone: req.body.isDone,
				hasAttachment: req.body.hasAttachment
			});

			newTodo.save(function(err, result){
				if(!err){
					res.send('Success');
				}
			});
		}
	});

	app.delete('/api/todo', function(req, res) {
		Todos.findByIdAndRemove(req.body.id, function(err){
			if(!err){
				res.send('Success');
			}
		});
	});
}