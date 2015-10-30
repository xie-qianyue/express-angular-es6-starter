import angular from 'angular';
import uiRouter from 'angular-ui-router';
import todoMongoComponent from './todoMongo.component';

let todoMongoModule = angular.module('todoMongo', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
        .state('todoMongo', {
            url: '/todoMongo',
            template: '<todoMongo></todoMongo>'
        });
})

.directive('todoMongo', todoMongoComponent);

export default todoMongoModule;
