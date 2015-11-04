class TodoMongoController {
  constructor(todoTask) {
  	
    this.todos = [];
    this.todoTask = todoTask;
  	
    this.todoTask.getTodos()
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
    console.log('mongo add');
        this.todoTask.createTodo(newTodo)
        	.then(
        		(data) => {
        			this.todos = data;		
        		},
        		(errMsg) => {
        			console.log(errMsg);
        		}
        	);
    }

    editTodo(origin, newTodo) {
        // update the db todo list
        this.todoTask.editTodo(newTodo);

        // refresh the local todo list
        this.todos[this.todos.indexOf(origin)] = newTodo;
    }

    removeTodo(todo) {
        this.todoTask.deleteTodo(todo._id)
            .then(
              () => {
                this.todos.splice(this.todos.indexOf(todo), 1);
              }
            ,
            (errorMsg) => {
                console.log(errorMsg);
            });
    }


	
}

export default TodoMongoController;
