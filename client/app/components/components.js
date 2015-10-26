import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Todo from './todo/todo';

let componentModules = angular.module('components', [
    Home.name,
    About.name,
    Todo.name
]);

export default componentModules;