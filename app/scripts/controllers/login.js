'use strict';

/**
 * @ngdoc function
 * @name angularjsTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularjsTestApp
 */
var app = angular.module('angularjsTestApp');
app.controller('loginCtrl', function($scope, $state, loginservice, $rootScope) {
    $scope.username = '';
    $rootScope.myUser = false;
    $scope.fnStateChange1 = function() {
        $state.go('/dashboardPage');
        $rootScope.myUser = true;
        $scope.un = loginservice.setProperty($scope.username);
    };

});
