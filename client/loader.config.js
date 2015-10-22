System.config({
  // set our baseURL reference path
  // baseURL: '/',
  meta: {
    'app/assets/angular': { format: 'global', exports: 'angular' },
    'app/assets/angular-ui-router': { deps: ['angular'] },
  },
  map: {
    'app': 'app',
    'lodash': 'app/assets/lodash',
    'angular': 'app/assets/angular',
    'angular-ui-router': 'app/assets/angular-ui-router',
  }
});
