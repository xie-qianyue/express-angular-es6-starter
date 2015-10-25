import angular from 'angular';
import uiRouter from 'angular-ui-router';
import todoComponent from './todo.component';

let todoModule = angular.module('todo', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  $stateProvider
    .state('todo', {
      url: '/todo',
      template: '<todo></todo>'
    });
})

.directive('todo', todoComponent);

export default todoModule;
