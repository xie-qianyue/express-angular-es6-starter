import angular from 'angular';
// import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
// import AppComponent from './app.component';
// import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
import './app.css';

import template from './app.html';
// import './app.styl';

let appComponent = () => {
    return {
        template,
        restrict: 'E'
    };
};

angular.module('app', [
    // uiRouter,
    Common.name,
    Components.name
])

.directive('app', appComponent);