import angular from 'angular';
import todoFooterComponent from './todoFooter.component';

let todoFooterModule = angular.module('todoFooter', [])

.directive('todoFooter', todoFooterComponent);

export default todoFooterModule;
