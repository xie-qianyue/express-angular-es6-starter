import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import NewTodo from './newTodo/newTodo';
import TodoFooter from './todoFooter/todoFooter';
import TodoList from './todoList/todoList';
import TodoPage from './todoPage/todoPage';

let componentModules = angular.module('components', [
  Home.name,
  About.name,
  NewTodo.name,
  TodoFooter.name,
  TodoList.name,
  TodoPage.name
]);

export default componentModules;