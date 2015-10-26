import angular from 'angular';
import Navbar from './navbar/navbar';
import NewTodo from './newTodo/newTodo';
import TodoFooter from './todoFooter/todoFooter';
import TodoList from './todoList/todoList';

let commonModule = angular.module('app.common', [
    Navbar.name,
    NewTodo.name,
    TodoFooter.name,
    TodoList.name
]);

export default commonModule;