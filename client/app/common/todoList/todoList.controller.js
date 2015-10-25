class TodoListController {
  constructor() {
  	// this.itemList = [];
  	this.editedTodo = null;
  	this.originalTodo = null;
    this.allChecked = !this.remainingCount;
  }

      // Make css style effective.
    editTodo(todo) {
        this.editedTodo = todo;
        // Clone the original todo to restore it on demand.
        this.originalTodo = angular.extend({}, todo);
    };

toggleCompleted(todo, completed) {
        if (angular.isDefined(completed)) {
            todo.completed = completed;
        }
    };

  markAll(completed) {
        this.itemList.forEach((todo) => {
            if (todo.completed !== completed) {
                toggleCompleted(todo, completed);
            }
        });
    };
}

export default TodoListController;
