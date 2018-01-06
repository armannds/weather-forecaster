(function () {
  'use strict';

  angular
    .module('weatherForecasterApp')
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'home/home.htm',
          controller: 'HomeCtrl',
          controllerAs: 'home'
        })
        .when('/forecast', {
          templateUrl: 'forecast/forecast.htm',
          controller: 'ForecastCtrl',
          controllerAs: 'forecast'
        })
        .when('/forecast/:days', {
          templateUrl: 'forecast/forecast.htm',
          controller: 'ForecastCtrl',
          controllerAs: 'forecast'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
})();
