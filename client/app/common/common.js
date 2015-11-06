import angular from 'angular';
import Navbar from './navbar/navbar';
import TodoTask from './todoTask/todoTask';

let commonModule = angular.module('app.common', [
  Navbar.name,
  TodoTask.name
]);

export default commonModule;