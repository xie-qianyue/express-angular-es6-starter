class TodoController {
    constructor() {
        // Use local storage.
        this.todos = [{
            title: 'Express 4X',
            completed: false
        }, {
            title: 'Angular 1.3',
            completed: false
        }];
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
}

export default TodoController;