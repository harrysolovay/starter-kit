


WebFont = require('webfontloader').load({
	typekit : {
		id : 'scn0ojn' // replace with your ID
	}
});



var // ...
	angular = require('angular'),
	ngRoute = require('angular-route');
	
require('./example.js');



var app = angular.module('app', [
  'ngRoute',
  'app.example'
]);



app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/example'});
}]);