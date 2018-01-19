(function () {
  'use strict';

  angular.module('weatherForecasterApp')
    .directive('weatherReport', function() {
      return {
        restrict: 'E',
        templateUrl: 'components/weatherReport.html',
        replace: true,
        scope: {
          weatherDay: '=',
          convertToStandard: '&',
          convertToDate: '&',
          dateFormat: '@'
        }
      };
    });
})();
