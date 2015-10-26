import template from './newTodo.html';
import controller from './newTodo.controller';
import './newTodo.css';

let newTodoComponent = function() {
    return {
        restrict: 'E',
        scope: {},
        template,
        controller,
        controllerAs: 'newTodoCtrl',
        bindToController: {
        	newTodo : '=',
        	onAddTodo: '&'
        }
    };
};

export default newTodoComponent;