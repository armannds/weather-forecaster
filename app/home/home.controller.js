(function () {
  'use strict';

  angular.module('weatherForecasterApp')
    .controller('HomeCtrl', ['$scope', 'cityService', function ($scope, cityService) {

      $scope.city = cityService.city;
      $scope.$watch('city', function () {
        cityService.city = $scope.city;
      });
    }]);
})();
