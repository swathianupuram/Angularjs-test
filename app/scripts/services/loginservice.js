'use strict';
var app = angular.module('angularjsTestApp');
app.service('loginservice', function() {
    var uname = '';
    return {
        getProperty: function() {
            return uname;
        },
        setProperty: function(value) {
            uname = value;
        }
    };
});
