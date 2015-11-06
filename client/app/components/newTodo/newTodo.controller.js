class NewTodoController {
  constructor() {}

  addTodo() {
    let newTodo = {
      title: this.newTodo.trim(),
      completed: false
    };
    if (!newTodo.title) {
      return;
    }

    this.onAddTodo({
      newTodo: newTodo
    });
    this.newTodo = '';
  }
}

export default NewTodoController;