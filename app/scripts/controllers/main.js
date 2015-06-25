'use strict';

/**
 * @ngdoc function
 * @name angPactApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angPactApp
 */
 angular.module('angPactApp')
 .controller('MainCtrl', function ($scope, Locations) {
 	var scope = $scope;

 	scope.searchTerm = "";

 	scope.findLocations = function() { 
 		scope.locations = Locations.search({searchTerm: scope.searchTerm});
 	};
 });
