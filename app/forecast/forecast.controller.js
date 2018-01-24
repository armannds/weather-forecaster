(function () {
  'use strict';

  angular.module('weatherForecasterApp')
    .controller('ForecastCtrl', ['$scope', '$routeParams', 'cityService', 'weatherService',
      function ($scope, $routeParams, cityService, weatherService) {

        $scope.city = cityService.city;

        $scope.days = $routeParams.days * 8 || '8';

        $scope.weatherResult = weatherService.GetWeather($scope.city, $scope.days);

        $scope.convertToCelsius = function (degK) {

          return Math.round(degK - 273);
        };

        $scope.convertToDate = function (dt) {
          return new Date(dt * 1000);
        };

      }
    ]);
})();
