'use strict';

const mongoose = require('mongoose');
const api = require('express').Router();

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost');

// Define the shcema.
const todoSchema = new mongoose.Schema({
	title: String,
	completed: Boolean
});

// Define model with a pre-exist collection 'todo'.
let Todo = mongoose.model('Todo', todoSchema, 'todo');

api.get('/todos', (req, res) => {
	Todo.find((err, todos) => {
		if(err){
			res.send(err);
		}
		console.log(todos);
		res.json(todos);
	});
});

// Create a todo item.
api.post('/todos', (req, res) => {
	Todo.create({
		title : req.body.title,
		completed : false
	}, (err) => {
		if (err) {
			res.send(err);
		}

        // Get and return all the todos after create.
        Todo.find((err, todos) => {
        	if (err) {
        		res.send(err);
        	}		
        	res.json(todos);
        });
    });
});

// Delete a todo item.
api.delete('/todos/:todo_id', (req, res) => {
	Todo.remove({
		_id : req.params.todo_id
	}, (err, todo) => {
		if (err) {
			res.send(err);
		}

        // Get and return all the todos after delete.
        Todo.find((err, todos) => {
        	if (err) {
        		res.send(err);
        	}
        	res.json(todos);
        });
    });
});

// Modify a todo title.
// After update, it doesn't return a result list. 
// The refresh of the list is done by angular.
api.put('/todos', (req, res) => {
	Todo.update(
		{_id: req.body._id}, 
		{title: req.body.title},
		(err) => {
			if (err) {
				res.send(err);
			}
		});
});

// Mark the todo completed.
// After update, it doesn't return a result list. 
// The refresh of the list is done by angular.
api.put('/todos/completed', (req, res) => {
	Todo.update(
		{_id: req.body._id},
		{completed: req.body.completed},
		(err) => {
			if (err) {
				res.send(err);
			}
		});
});

module.exports = api;