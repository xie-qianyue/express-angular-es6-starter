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

    //remainingCount = $filter('filter')(todos, { completed: false }).length;
}

export default TodoController;