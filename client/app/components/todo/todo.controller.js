class TodoController {
  constructor($scope, $filter) {
    // Use local storage.
    this.todos = [{
      title: 'Express 4X',
      completed: false
    }, {
      title: 'Angular 1.3',
      completed: false
    }];

    this.allChecked = false;
    this.remainingCount = $filter('filter')(this.todos, {
      completed: false
    }).length;

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
    this.todos.push(newTodo);
  }

  editTodo(origin, newTodo) {
    this.todos[this.todos.indexOf(origin)] = newTodo;
  }

  removeTodo(todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
  }

  markAll(completed) {
    this.todos.forEach(todo => {
      if (todo.completed !== completed) {
        this.toggleCompleted(todo, completed);
      }
    })
  }

  toggleCompleted(todo, completed) {
    this.todos[this.todos.indexOf(todo)].completed = completed;
  }
}

export default TodoController;