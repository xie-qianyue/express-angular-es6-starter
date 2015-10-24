import angular from 'angular';
// import uiRouter from 'angular-ui-router';
import newTodoComponent from './newTodo.component';

let newTodoModule = angular.module('newTodo', [
  // uiRouter
])

.directive('newTodo', newTodoComponent);

export default newTodoModule;
