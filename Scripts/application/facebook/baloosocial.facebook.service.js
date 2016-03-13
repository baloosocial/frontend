(function () {
    'use strict';

    /**
	 *
	 * @param {myqWebapiService} myqWebapiService [description]
	 */
    function balooSocialFacebookService(serviceApiService) {
        var _self = this;

        _self.getFacebookData = function (data) {
            return serviceApiService.get('/getpagedata/' + data.authToken + "/" + data.pageName);
        };

        _self.getFacebookDynamicData = function (data) {
            return serviceApiService.get('/getpagedynamicdata/' + data.authToken + "/" + data.pageName);
        };

    }

    angular.module('balooSocial.facebook')
		.service('balooSocialFacebookService', ['serviceApiService', balooSocialFacebookService]);
})();