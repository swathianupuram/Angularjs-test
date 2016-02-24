'use strict';

/**
 * @ngdoc function
 * @name angularjsTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularjsTestApp
 */
var app = angular.module('angularjsTestApp');
app.controller('dashboardCtrl', function($scope, loginservice) {
    $scope.un1 = loginservice.getProperty();

});
