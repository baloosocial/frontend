(function () {
    'use strict';

    function BalooSocialInstagram($scope, $location, $interval, balooSocialInstagramService, showPostsCount, showPostedUser, showCompanyLogo, backgroundStyle, slideFromDownToUp) {
        var _self = this;
        _self.config = {};
        _self.instagramData = [];
        _self.config.showPostsCount = showPostsCount === 'true';
        _self.config.showPostedUser = showPostedUser === 'true';
        _self.config.showCompanyLogo = showCompanyLogo === 'true';
        //_self.config.backgroundColor = backgroundColor;
        _self.config.backgroundStyle = backgroundStyle;
        _self.config.slideFromDownToUp = slideFromDownToUp === 'true';

        var location = $location.search();

        _self.getInstagramData = function () {
            var sendData = { authToken: '-1', pageID: location.id }
            balooSocialInstagramService.getInstagramData(sendData)
            .then(function (response) {
                if (angular.toJson(_self.instagramData) !== angular.toJson(response.data)) {
                    _self.instagramData = response.data;
                }
            }, function (response) {
            });
        }
        _self.getInstagramData();
        

        $interval(function () { _self.getInstagramData(); }, 98000);
    }

    //BalooSocialInstagram.$inject = ['$scope'];

    angular.module('balooSocial.instagram')
        .controller('balooSocialInstagramContoller', ['$scope', '$location', '$interval', 'balooSocialInstagramService', 'showPostsCount', 'showPostedUser', 'showCompanyLogo', 'backgroundStyle', 'slideFromDownToUp', BalooSocialInstagram]);
})();