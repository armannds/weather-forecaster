(function () {
  'use strict';

  angular.module('weatherForecasterApp')
    .constant('OPEN_WEATHER_MAP_API_CONFIG', {
      baseUrl: 'http://api.openweathermap.org/data/2.5/forecast',
      //Put your API key here
      apiKey: ''
  });
})();
