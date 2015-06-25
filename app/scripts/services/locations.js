'use strict';

 angular.module('angPactApp')
 .constant('ApiPath', 'http://localhost:8888')
 .factory('Locations', function ($resource, ApiPath) {
 	return $resource(ApiPath+'/locations/:id', {id: '@id' }, {'search': {method: 'GET', isArray: true}});
 });
