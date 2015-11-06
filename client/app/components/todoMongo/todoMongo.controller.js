class TodoMongoController {
  constructor(todoTask, $scope, $filter) {

    this.todos = [];
    this.allChecked = false;
    this.todoTask = todoTask;

    this.todoTask.getTodos()
      .then(
        data => {
          this.todos = data;
          this.remainingCount = $filter('filter')(this.todos, {
            completed: false
          }).length;
        },
        errMsg => {
          console.log(errMsg);
        }
      );

    $scope.$watch(
      () => {
        return this.todos
      }, () => {
        
        this.remainingCount = $filter('filter')(this.todos, {
          completed: false
        }).length;

        if (this.remainingCount === 0) {
          this.allChecked = true;
        } else {
          this.allChecked = false;
        }
      }, true);
  }

  addTodo(newTodo) {
    console.log('mongo add');
    this.todoTask.createTodo(newTodo)
      .then(
        data => {
          this.todos = data;
        },
        errMsg => {
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
        },
        errorMsg => {
          console.log(errorMsg);
        }
      );
  }

  markAll(completed) {
    this.todos.forEach(todo => {
      if (todo.completed !== completed) {
        this.toggleCompleted(todo, completed);
      }
    });
  }

  toggleCompleted(todo, completed) {
    todo.completed = completed;
    this.todoTask.completeTodo(todo)
          .then(() => {
            todo.completed = completed;
          });
  }
}

export default TodoMongoController;