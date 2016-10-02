var local = angular.module('alert.charjs', []);


local.directive('sparkLine', [function() {
    return {
        restrict: 'A',
        scope: {
            data: '=',
            labels: '=',
            options: '='
        },
        link: function(scope, element, attrs) {
            //var Chart = require("../../components/chart/chart.js");
            var Chart = require('../../../../node_modules/chart.js/Chart.js');
            var $ = require("jquery");
            var sparklineStyle = $.extend({
                scaleShowLabels: false,
                scaleShowGridLines: false,
                datasetFill: true,
                // Sadly if you set scaleFontSize to 0, chartjs crashes
                // Instead we'll set it as small as possible and make it transparent
                scaleFontSize: 2,
                scaleFontColor: "rgba(0,22,0,0)",
                animation: true,
                responsive: true,
                bezierCurve: true,
                bezierCurveTension: 0.25,
                showScale: false,
                pointDotRadius: 0,
                pointDotStrokeWidth: 0,
                pointDot: false,
                strokeColor: '#fff',
                tooltipXPadding: 30
            }, scope.options);

            var ctx = element[0].getContext('2d');

            function destroyChart(scope) {
                if (!scope.chart) return;
                scope.chart.destroy();
            }

            function watchData(newVal, oldVal) {
                if (!newVal || !newVal.length || (Array.isArray(newVal[0]) && !newVal[0].length)) {
                    return;
                }
                destroyChart(scope);
                var data = {};
                var datasets = [{
                    strokeColor: '#fff',
                    fillColor: 'rgba(255,255,255, 0.3)',
                    pointStrokeColor: '#fff',
                    data: newVal
                }];

                // Add to data object
                data['labels'] = scope.labels;
                data['datasets'] = datasets;
                scope.chart = new Chart(ctx).Line(data, sparklineStyle);
            }

            scope.$watch('data', watchData, true);
        }
    };
}])

module.exports = local.name;