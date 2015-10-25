import template from './todoList.html';
import controller from './todoList.controller';
//import './todoList.styl';

let todoListComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'todoListCtrl',
    bindToController: {
    	itemList: '='
    }
  };
};

export default todoListComponent;
