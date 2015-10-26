import template from './newTodo.html';
import controller from './newTodo.controller';
import './newTodo.css';

let newTodoComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'ctrl',
    bindToController: true
  };
};

export default newTodoComponent;
