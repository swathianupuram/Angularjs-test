 'use strict';

 /**
  * @ngdoc function
  * @name angularjsTestApp.controller:AboutCtrl
  * @description
  * # AboutCtrl
  * Controller of the angularjsTestApp
  */
 var app = angular.module('angularjsTestApp');
 app.filter('showGreetings', function() {
     return function(user) {
         return 'Hello ' + user;
     };
 });
