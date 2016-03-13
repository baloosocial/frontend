(function () {
    'use strict';

    function balooSocialFacebookContoller($scope, $location, $interval, $sce, balooSocialFacebookService, showPageTitle, showFindUs, showCompanyLogo, showCheckIns, promotionText, uploadedLogo, cssInjector, htmlTemplate, cssTemplate) {
        var _self = this;

        _self.config = {};

        _self.config.showPageTitle = showPageTitle === 'true';
        _self.config.showFindUs = showFindUs === 'true';
        _self.config.showCompanyLogo = showCompanyLogo === 'true';
        _self.config.showCheckIns = showCheckIns === 'true';
        _self.config.promotionText = promotionText;

        if (htmlTemplate !== '') {
            _self.templateURL = htmlTemplate;
        }  else {
            _self.templateURL = "/socialpages/templates/facebook/default.html";
        }

        var location = $location.search();

        //inject css
        if(cssTemplate !== '')
            cssInjector.add(cssTemplate);

        _self.deliberatelyTrustDangerousSnippet = function () {
            return $sce.trustAsHtml(_self.config.promotionText);
        };

        _self.getFacebookData = function () {
            var sendData = {
                authToken: '-1', pageName: location.pagename
            };
            balooSocialFacebookService.getFacebookData(sendData)
                .then(function (response) {
                    _self.facebookData = response.data;
                    ///setLikeIconHeight();
                    if (uploadedLogo !== '') {
                        _self.facebookData.PicURL = uploadedLogo.replace("~","");
                    }
                }, function (response) {
                });
        };

        _self.getFacebookDynamicData = function () {
            var sendData = { authToken: '-1', pageName: location.pagename }
            balooSocialFacebookService.getFacebookDynamicData(sendData).then(function (response) {
                if (angular.toJson(_self.facebookDynamicData) !== angular.toJson(response.data)) {
                    _self.facebookDynamicData = response.data;
                }
            }, function (response) {

            });
        };

        _self.dataInit = function () {
            //setLikeIconHeight();
        };

        var setLikeIconHeight = function () {
            setStyles();
            var likeIconHeight = $(".likecounter").outerHeight();
            $(".wrp-like-icon1 img").height(likeIconHeight);
        };

        function setStyles() {
            var ratio;
            if (_self.facebookData && _self.facebookData.Likes) {
                var l = String(_self.facebookData.Likes).length;
                if (l < 6) {
                    ratio = 11;
                } else if (l === 6) {
                    ratio = 10;
                } else {
                    ratio = 8;
                }
            }

            var $tick = $(".wrp-likes .tick");

            var $tickWheel = $(".likecounter .tick-wrapper, .likecounter .tick-separator");
            var windowWidth = $(window).width();
            var fontSize = windowWidth * ratio / 100;
            var height = fontSize + 10;

            $tick.css({
                'font-size': fontSize + 'px',
                //'height': height + 'px'
            });

            var m;
            if (windowWidth < 640) {
                m = 3;
            } else if (windowWidth > 640 && windowWidth < 1200) {
                m = 5;
            } else {
                m = 10;
            }

            $tickWheel.css({
                'margin-left': m + 'px',
                'margin-right': m + 'px'
            });

        };

        //$(window).on('resize', function () {
        //    setLikeIconHeight();
        //});

        _self.getFacebookData();
        _self.getFacebookDynamicData();

        $interval(function () {
            _self.getFacebookDynamicData();
        }, 2000);
    };

    //BalooSocialInstagram.$inject = ['$scope'];

    angular.module('balooSocial.facebook')
        .controller('balooSocialFacebookContoller', ['$scope',
            '$location',
            '$interval',
            '$sce',
            'balooSocialFacebookService',
            'showPageTitle',
            'showFindUs',
            'showCompanyLogo',
            'showCheckIns',
            'promotionText',
            'uploadedLogo',
            'cssInjector',
            'htmlTemplate',
            'cssTemplate',
            balooSocialFacebookContoller
        ]);
})();