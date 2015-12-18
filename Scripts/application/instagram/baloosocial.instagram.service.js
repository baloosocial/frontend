(function () {
    'use strict';

    /**
	 *
	 * @param {myqWebapiService} myqWebapiService [description]
	 */
    function BalooSocialInstagramService(serviceApiService) {
        var _self = this;

        _self.getInstagramData = function (data) {
            return serviceApiService.get("/instagramgetdata/-1/19");
        }

    }

    angular.module('balooSocial.instagram')
		.service('balooSocialInstagramService',['serviceApiService',BalooSocialInstagramService] );
})();