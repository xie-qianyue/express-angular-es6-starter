import template from './todoPage.html';
import controller from './todoPage.controller';
import './todoPage.css';

let todoPageComponent = function() {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'todoCtrl',
    bindToController: true
  };
};

export default todoPageComponent;