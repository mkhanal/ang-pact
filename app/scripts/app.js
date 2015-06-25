'use strict';

/**
 * @ngdoc overview
 * @name angPactApp
 * @description
 * # angPactApp
 *
 * Main module of the application.
 */
angular
  .module('angPactApp', [
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
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
