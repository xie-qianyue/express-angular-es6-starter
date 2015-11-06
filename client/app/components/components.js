import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import NewTodo from './newTodo/newTodo';
import TodoFooter from './todoFooter/todoFooter';
import TodoList from './todoList/todoList';
import TodoMongo from './todoMongo/todoMongo';

let componentModules = angular.module('components', [
  Home.name,
  About.name,
  NewTodo.name,
  TodoFooter.name,
  TodoList.name,
  TodoMongo.name
]);

export default componentModules;