(function () {
    'use strict';

    var serviceAPI = angular.module('balooSocial.serviceApi');

    serviceAPI.factory('serviceApiService', ['$http', function ($http) {
        var _serviceURL = 'http://baloosocial.com/RealSocialActivityService/getsocialinformation.svc';
        _serviceURL = "Scripts/test.json";
        var sendRequest = function (config) {

            return $http(config);
        };

        return {
            'get': function (method, data) {

                return sendRequest({
                    url: _serviceURL,// + method,
                    method: 'GET',
                    params: data || []
                });

                // deferred.promise;
            },
            'post': function (method, data) {
                //var deferred = $q.defer();
                return sendRequest({
                    method: 'POST',
                    url: _serviceURL + method,
                    data: data || []
                });

                //return deferred.promise;
            },
            'delete': function (method, data) {
                //var deferred = $q.defer();
                return sendRequest({
                    method: 'DELETE',
                    url: _serviceURL + method,
                    data: data || []
                });

                //return deferred.promise;
            }
        };
    }]);

})();