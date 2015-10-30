class TodoMongoController {
  constructor() {
  	this.todos = [];
  	TodoTask.getTodos()
  		.then(
  			(data) => {
  				this.todos = data;
  			},
  			(errMsg) => {
  				console.log(errMsg);
  			} 
  		);
  }

  addTodo(newTodo) {
        TodoTask.createTodo(newTodo)
        	.then(
        		(data) => {
        			this.todos = data;		
        		},
        		(errMsg) => {
        			console.log(errMsg);
        		}
        	);
    }
/*
    editTodo(origin, newTodo) {
        this.todos[this.todos.indexOf(origin)] = newTodo;
    }

    removeTodo(todo) {
        this.todos.splice(this.todos.indexOf(todo), 1);
    }
*/

	
}

export default TodoMongoController;
