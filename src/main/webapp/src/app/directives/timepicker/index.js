'use strict';

var local = angular.module('datetimepicker', []);

local.directive('datetimepicker', [
    '$timeout',
    function($timeout) {
        return {
            require: '?ngModel',
            restrict: 'EA',
            scope: {
                datetimepickerOptions: '@',
                onDateChangeFunction: '&',
                onDateClickFunction: '&'
            },
            link: function(scope, element, attrs, ctrl) {
                element.on('dp.change', function() {
                    $timeout(function() {
                        var dtp = element.data('DateTimePicker');
                        if (angular.isDefined(dtp.date) && angular.isDefined(dtp.date()) && dtp.date() != null) {
                            ctrl.$setViewValue(dtp.date().format("YYYY-MM-DD HH:mm:ss"));
                        } else {
                            ctrl.$setViewValue('');
                        }
                    });
                });

                // $element.on('click', function() {
                //     $scope.onDateClickFunction();
                // });

                ctrl.$render = function() {
                    if (!!ctrl && !!ctrl.$viewValue) {
                        var result = ctrl.$viewValue;
                        element.data('DateTimePicker').date(result);
                    }
                };

                // $element.datetimepicker($scope.$eval($attrs.datetimepickerOptions));
                element.datetimepicker({
                    icons: {
                        time: "fa fa-clock-o",
                        date: "fa fa-calendar",
                        up: "fa fa-arrow-up",
                        down: "fa fa-arrow-down",
                        left: "fa fa-arrow-left",
                        right: "fa fa-arrow-right",
                        previous: "fa fa-arrow-left",
                        next: "fa fa-arrow-right",
                        clear: 'fa fa-times'
                    },
                    // keepOpen: true,
                    // debug: true,
                    dayViewHeaderFormat: 'YYYY.MM',
                    showClear: true,
                    useCurrent: true,
                    format: 'YYYY-MM-DD HH:mm:ss',
                    tooltips: {
                    }

                });
            }
        };
    }
]);


module.exports = local.name;