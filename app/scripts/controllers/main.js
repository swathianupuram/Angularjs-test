'use strict';

/**
 * @ngdoc function
 * @name angularjsTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularjsTestApp
 */
var app = angular.module('angularjsTestApp');
app.controller('MainCtrl', function($scope, $state) {
    $scope.fnStateChange = function() {
        $state.go('/loginPage');
    };

});
