import angular from 'angular';
import todoListComponent from './todoList.component';

let todoListModule = angular.module('todoList', [])

.directive('todoList', todoListComponent);

export default todoListModule;
