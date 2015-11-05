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

    $scope.$watch(
        () => { return this.todos}, 
        () => {
            this.remainingCount = $filter('filter')(this.todos, { completed: false }).length;
            this.allChecked = !this.remainingCount;
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
        if (typeof completed === 'boolean') {
            todo.completed = completed;
        }
    }
}

export default TodoController;