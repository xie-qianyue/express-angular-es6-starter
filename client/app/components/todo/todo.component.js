import template from './todo.html';
import controller from './todo.controller';
// import './todo.styl';

let todoComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'todoCtrl',
    bindToController: true
  };
};

export default todoComponent;
