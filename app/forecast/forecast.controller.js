(function () {
  'use strict';

  angular.module('weatherForecasterApp')
    .controller('ForecastCtrl', ['$scope', '$resource', '$routeParams', 'cityService',
        function ($scope, $resource, $routeParams, cityService) {

        $scope.city = cityService.city;

        $scope.days = $routeParams.days * 8 || '8';

        $scope.weatherApi = $resource('http://api.openweathermap.org/data/2.5/forecast',
            {get: {method: 'GET'}}
        );

        $scope.weatherResult = $scope.weatherApi.get({
            q: $scope.city,
            cnt: $scope.days,
            APPID: 'fc07c59f1bf89ce1e89ec0746734c35f'
        });

        $scope.convertToCelsius = function(degK) {

            return Math.round(degK - 273);
        };

        $scope.convertToDate = function(dt) {
            return new Date(dt * 1000);
        };

    }]);
})();
