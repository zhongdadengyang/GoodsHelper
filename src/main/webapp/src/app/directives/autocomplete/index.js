var local = angular.module('alert.autoComplete', []);
require('jquery');
require('jquery-ui');
require('./../../../../node_modules/jquery-ui/ui/widgets/autocomplete.js');
require('./../../../../node_modules/jquery-ui/themes/base/all.css');
require('./index.css');

local.directive('autoComplete', ['$timeout', '$http', function($timeout, $http) {
    return {
        restrict: 'A',
        require: 'ngModel',
        scope: {
            url: '@',
            searchKey: '@',
            displayKey: '@',
            displayValue: '@'
        },
        link: function(scope, element, attrs, ctrl) {
            element.autocomplete({
                delay: 300,
                source: function(request, response) {
                    var kw = request.term;
                    $http({
                        url: scope.url + "?" + scope.searchKey + "=" + kw,
                        method: 'GET'
                    }).then(function(resp) {
                        var results = [];
                        if (angular.isDefined(resp.data.data) && resp.data.data != null) {
                            angular.forEach(resp.data.data.list, function(it) {
                                it.label = it[scope.displayKey.toString()];
                                it.value = it[scope.displayValue.toString()];
                                results.push(it);
                            })
                        }
                        response(results);
                    });
                },
                focus: function(event, ui) {
                    element.val(ui.item[scope.displayKey.toString()]);
                    return false;
                },
                select: function(event, ui) {
                    element.val(ui.item[scope.displayKey.toString()]);
                    ctrl.$setViewValue(ui.item);
                },
                open: function(event, ui) {
                    $timeout(function() {
                        $('.ui-autocomplete').css('z-index', 99999999999999);
                    }, 0);
                }
            });
        }
    };
}]);

module.exports = local.name;