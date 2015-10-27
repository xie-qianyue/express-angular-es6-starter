import template from './todoList.html';
import controller from './todoList.controller';
import './todoList.css';

let todoListComponent = function() {
    return {
        restrict: 'E',
        scope: {},
        template,
        controller,
        controllerAs: 'todoListCtrl',
        bindToController: {
            itemList: '=',
            onSaveEdits: '&',
            onRemoveTodo: '&'
        }
    };
};

export default todoListComponent;