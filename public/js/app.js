'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/view1', {templateUrl: 'partial/1', controller: MyCtrl1});
    $routeProvider.when('/view2', {templateUrl: 'partial/2', controller: MyCtrl2});
    $routeProvider.when('/examples/carousel', {templateUrl: 'examples/carousel', controller: MyCtrl2});
    $routeProvider.when('/examples/components', {templateUrl: 'examples/components', controller: MyCtrl2});
    $routeProvider.otherwise({redirectTo: '/view1'});
    $locationProvider.html5Mode(true);
  }]);