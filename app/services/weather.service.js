(function () {
  'use strict';

  angular.module('weatherForecasterApp')
    .service('weatherService', ['$resource', 'OPEN_WEATHER_MAP_API_CONFIG', function ($resource, apiConfig) {
      this.GetWeather = function (city, days) {
        var weatherApi = $resource(apiConfig.baseUrl, {
          get: {
            method: 'GET'
          }
        });

        return weatherApi.get({
          q: city,
          cnt: days,
          APPID: apiConfig.appId
        });
      };
    }]);
})();
