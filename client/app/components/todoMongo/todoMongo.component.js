import template from './../todo/todo.html';
import controller from './todoMongo.controller';

// use the same template of the todo page
let todoMongoComponent = function() {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'todoCtrl',
    bindToController: true
  };
};

export default todoMongoComponent;