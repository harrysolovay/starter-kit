'use strict';

var example = angular.module('app.example', ['ngRoute']);

example.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/example', {
    templateUrl: 'partials/example.html',
    controller: 'ExampleController'
  });
}]);

example.controller('ExampleController', ['$scope', function($scope) {
	
}]);