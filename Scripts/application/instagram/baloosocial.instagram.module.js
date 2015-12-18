(function () {
    'use strict';

    var app = angular.module('balooSocial.instagram', ['balooSocial.serviceApi', 'slick'])

    app.config(function ($locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    });
})();