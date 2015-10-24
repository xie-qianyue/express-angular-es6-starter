import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Todo from './todo/todo';
// import NewTodo from './newTodo/newTodo';

let componentModules = angular.module('components', [
  Home.name,
  About.name,
  Todo.name
  // NewTodo.name
]);

export default componentModules;
