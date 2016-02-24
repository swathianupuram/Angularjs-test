'use strict';
var app = angular.module('angularjsTestApp');
app.directive('footerDirective', function() {
    return {
        restrict: 'A',
        templateUrl: 'views/footer.html'

    };
});
