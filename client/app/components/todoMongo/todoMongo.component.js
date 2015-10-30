import template from './todoMongo.html';
import controller from './todoMongo.controller';

let todoMongoComponent = function () {
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
