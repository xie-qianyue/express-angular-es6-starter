import angular from 'angular';
import Common from './common/common';
import Components from './components/components';
import 'normalize-css/normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
import './app.css';

import template from './app.html';

let appComponent = () => {
  return {
    template,
    restrict: 'E'
  };
};

angular.module('app', [
  Common.name,
  Components.name
])

.directive('app', appComponent);