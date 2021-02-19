'use strict';

/**
 * @ngdoc overview
 * @name ausampleApp
 * @description
 * # ausampleApp
 *
 * Main module of the application.
 */
angular
  .module('ausampleApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
