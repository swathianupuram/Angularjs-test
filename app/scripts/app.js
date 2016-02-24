'use strict';

/**
 * @ngdoc overview
 * @name angularjsTestApp
 * @description
 * # angularjsTestApp
 *
 * Main module of the application.
 */
var app = angular
    .module('angularjsTestApp', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.router'
    ]);
app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('/home', {
            url: '/home',
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .state('/loginPage', {
            url: '/loginPage',
            templateUrl: 'views/login.html',
            controller: 'loginCtrl'

        })
        .state('/dashboardPage', {
            url: '/dashboardPage',
            templateUrl: 'views/dashboard.html',
            controller: 'dashboardCtrl'

        })

});
app.controller('homeCtrl', function($scope, $state, loginservice, $rootScope) {
    $scope.fnget = function() {
        $scope.un2 = loginservice.getProperty();
    };

    $scope.fnStateChange2 = function() {
        $state.go('/home');
        $rootScope.myUser = false;
        $scope.username = '';
    };
});
