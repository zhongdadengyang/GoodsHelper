var local = angular.module('alert.echarts', []);
window.echarts = require("echarts");
require('../../../../node_modules/echarts/theme/macarons.js');
//require('../../../../node_modules/echarts/theme/infographic.js');


local.directive('echarts', [function() {
    return {
        restrict: 'EA',
        scope: {
            option: '=',
            config: '=',
            labels: '=',
            series: '=',
            legend: '=',
            title: '@',
            subtitle: '@',
            type: '@'
        },
        link: function(scope, element, attrs, ctrl) {
            var $ = require('jQuery');

            function refreshChart() {
                var theme = (scope.config && scope.config.theme) ? scope.config.theme : 'macarons';
                var chart = echarts.init(element[0], theme);
                if (scope.config && scope.config.dataLoaded === false) {
                    chart.showLoading();
                }

                if (scope.config && scope.config.dataLoaded) {
                    chart.setOption(scope.option);
                    chart.resize();
                    chart.hideLoading();
                }

                if (scope.config && scope.config.event) {
                    if (angular.isArray(scope.config.event)) {
                        angular.forEach(scope.config.event, function(value, key) {
                            for (var e in value) {
                                chart.on(e, value[e]);
                            }
                        });
                    }
                }
            };

            var defaultOptions = {
                title: {
                    text: scope.title,
                    subtext: scope.subtitle,
                    x:'center'
                },
                legend: scope.legend,
                tooltip: {
                    trigger: 'axis'
                },
                toolbox: {
                    show: true,
                    orient: 'vertical',
                    feature: {
                        dataZoom: {
                            yAxisIndex: 'none'
                        },
                        magicType: { type: ['line', 'bar'] },
                        restore: {}
                    },
                    itemGap: 26,
                    itemSize: 18
                },
                xAxis: {
                    splitLine: {
                        show: false
                    },
                    type: 'category',
                    boundaryGap: false,
                    data: scope.labels
                },
                yAxis: {
                    splitLine: {
                        show: false
                    },
                    type: 'value'
                },
                series: scope.series
            }

            scope.option = $.extend({}, defaultOptions, scope.option);

            //自定义参数 - config
            // event 定义事件
            // theme 主题名称
            // dataLoaded 数据是否加载

            // scope.$watch(scope.series, function(newVal, oldVal) {
            //     debugger
            //     refreshChart();
            // });

            scope.$watch(
                function() {
                    return scope.config;
                },
                function(value) {
                    if (value) { refreshChart(); }
                },
                true
            );

            //图表原生option
            scope.$watch(
                function() {
                    return scope.option;
                },
                function(value) {
                    if (value) { refreshChart(); }
                },
                true
            );
        }

    }
}]);

module.exports = local.name;