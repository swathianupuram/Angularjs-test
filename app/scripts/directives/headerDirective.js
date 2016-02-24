'use strict';
var app = angular.module('angularjsTestApp');
app.directive('headerDirective', function() {
    return {
        restrict: 'A',
        templateUrl: 'views/header.html'

    };
});
