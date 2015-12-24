import angular from 'angular';
import uiRouter from 'angular-ui-router';
import todoPageComponent from './todoPage.component';

let todoPageoModule = angular.module('todoPage', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  $stateProvider
    .state('todoPage', {
      url: '/todoPage',
      template: '<todopage></todopage>'
    });
})

.directive('todopage', todoPageComponent);

export default todoPageoModule;