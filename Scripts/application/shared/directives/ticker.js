(function () {
    'use strict';

    function tickDirective($timeout) {

        return {
            restrict: 'A',
            scope: {
                data: '=',
                refreshed: '&',
                init: '&'
            },
            link: function (scope, element, attrs) {

                var initializeTicker, delayt = 100, incremental = 1, separators = true,
                    separator=".";

                if (attrs.delayt)
                    delayt = attrs.delayt;

                if (attrs.separators)
                    separators = attrs.separators;

                if (attrs.incremental)
                    incremental = attrs.incremental;

                if (attrs.separator)
                    separator = attrs.separator;

                initializeTicker = function (startValue, endValue) {
                    return $timeout(function () {
                        var tick;
                        tick = element;

                        console.log(endValue);

                        tick.html(thousandSep(startValue, separator))

                        tick.ticker({
                            incremental: incremental,
                            delay: delayt,
                            maxvalue: endValue -1,
                            separators: separators,
                            separator: separator
                        });

                        if (scope.init)
                            scope.init(element);

                    });
                };

                scope.$watch('data', function (newValue, oldValue) {
                    if (newValue) {
                        if (!oldValue) {
                            initializeTicker(newValue, newValue);
                        }
                        else {
                            if (oldValue != newValue) {
                                var startValue, endValue;
                                startValue = oldValue;
                                endValue = newValue;
                                if (oldValue > newValue)
                                    startValue = newValue;
                                initializeTicker(endValue, startValue);
                            }
                        }

                        if (scope.refreshed)
                            scope.refreshed();
                    }
                });
                

                if (scope.dataValue)
                    initializeSlick(scope.dataValue.Likes, scope.dataValue.Likes);


                var thousandSep = function (val, separator) {
                    separator = separator || ".";
                    var res = String(val).split("").reverse().join("").replace(/(\d{3}\B)/g, "$1" + separator).split("").reverse().join("");
                    return res;
                };
            }
        };
    }

    angular.module('ticker', []).directive('ticker', ['$timeout', tickDirective]);
})();

