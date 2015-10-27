import angular from 'angular';
import newTodoComponent from './newTodo.component';

let newTodoModule = angular.module('newTodo', [])

.directive('newTodo', newTodoComponent);

export default newTodoModule;