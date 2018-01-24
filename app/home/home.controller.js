(function () {
  'use strict';

  angular.module('weatherForecasterApp')
    .controller('HomeCtrl', ['$scope', '$location', 'cityService', function ($scope, $location, cityService) {

      $scope.city = cityService.city;

      $scope.$watch('city', function () {
        cityService.city = $scope.city;
      });

      $scope.submit = function() {
        $location.path('/forecast');
      };
    }]);
})();
