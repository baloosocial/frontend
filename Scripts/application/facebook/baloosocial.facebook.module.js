(function () {
    'use strict';

    angular.module('balooSocial.facebook', ['balooSocial.serviceApi', "ticker", 'angular.css.injector', 'ngSanitize'])
        .config(function ($locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    });

})();