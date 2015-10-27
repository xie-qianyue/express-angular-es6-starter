import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Todo from './todo/todo';
import NewTodo from './newTodo/newTodo';
import TodoFooter from './todoFooter/todoFooter';
import TodoList from './todoList/todoList';

let componentModules = angular.module('components', [
    Home.name,
    About.name,
    Todo.name,
    NewTodo.name,
    TodoFooter.name,
    TodoList.name
]);

export default componentModules;