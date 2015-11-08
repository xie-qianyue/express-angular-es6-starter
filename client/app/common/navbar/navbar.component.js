import template from './navbar.html';
import controller from './navbar.controller';

let navbarComponent = function() {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'ctrl',
    bindToController: true
  };
};

export default navbarComponent;