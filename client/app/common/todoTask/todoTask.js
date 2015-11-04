import angular from 'angular';
import todoTaskFactory from './todoTask.factory';

let todoTaskModule = angular.module('todoTask', [])

.factory('todoTask', todoTaskFactory);

export default todoTaskModule;