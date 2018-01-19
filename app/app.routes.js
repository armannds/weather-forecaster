(function () {
  'use strict';

  angular
    .module('weatherForecasterApp')
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'home/home.html',
          controller: 'HomeCtrl',
          controllerAs: 'home'
        })
        .when('/forecast', {
          templateUrl: 'forecast/forecast.html',
          controller: 'ForecastCtrl',
          controllerAs: 'forecast'
        })
        .when('/forecast/:days', {
          templateUrl: 'forecast/forecast.html',
          controller: 'ForecastCtrl',
          controllerAs: 'forecast'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
})();
