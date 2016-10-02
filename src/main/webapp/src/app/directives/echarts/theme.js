(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }

    var colorPalette = [
        '#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#d87a80',
        '#8d98b3','#e5cf0d','#97b552','#95706d','#dc69aa',
        '#07a2a4','#9a7fd1','#588dd5','#f5994e','#c05050',
        '#59678c','#c9ab00','#7eb00a','#6f5553','#c14089'
    ];


    var theme = {
        "seriesCnt": "3",
        "backgroundColor": "rgba(252,252,252,0)",
        "titleColor": "#2adec8",
        "subtitleColor": "rgba(28,204,192,0.83)",
        "textColorShow": false,
        "textColor": "#333",
        "markTextColor": "#ffffff",
        "color": [
            "#3fb1e3",
            "#6be6c1",
            "#626c91",
            "#a0a7e6",
            "#c4ebad",
            "#96dee8"
        ],
        "borderColor": "#cccccc",
        "borderWidth": 0,
        "visualMapColor": [
            "#2a99c9",
            "#afe8ff"
        ],
        "legendTextColor": "#27c0d1",
        "kColor": "#e6a0d2",
        "kColor0": "transparent",
        "kBorderColor": "#e6a0d2",
        "kBorderColor0": "#3fb1e3",
        "kBorderWidth": "2",
        "lineWidth": "3",
        "symbolSize": "8",
        "symbol": "emptyCircle",
        "symbolBorderWidth": "2",
        "lineSmooth": false,
        "graphLineWidth": "1",
        "graphLineColor": "#cccccc",
        "mapLabelColor": "#ffffff",
        "mapLabelColorE": "rgb(63,177,227)",
        "mapBorderColor": "#aaaaaa",
        "mapBorderColorE": "#3fb1e3",
        "mapBorderWidth": 0.5,
        "mapBorderWidthE": 1,
        "mapAreaColor": "#eeeeee",
        "mapAreaColorE": "rgba(63,177,227,0.25)",
        "axes": [
            {
                "type": "all",
                "name": "通用坐标轴",
                "axisLineShow": true,
                "axisLineColor": "#52c8cf",
                "axisTickShow": false,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#3bbde6",
                "splitLineShow": true,
                "splitLineColor": [
                    "#eeeeee"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.05)",
                    "rgba(200,200,200,0.02)"
                ]
            },
            {
                "type": "category",
                "name": "类目坐标轴",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": false,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "value",
                "name": "数值坐标轴",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "log",
                "name": "对数坐标轴",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            },
            {
                "type": "time",
                "name": "时间坐标轴",
                "axisLineShow": true,
                "axisLineColor": "#333",
                "axisTickShow": true,
                "axisTickColor": "#333",
                "axisLabelShow": true,
                "axisLabelColor": "#333",
                "splitLineShow": true,
                "splitLineColor": [
                    "#ccc"
                ],
                "splitAreaShow": false,
                "splitAreaColor": [
                    "rgba(250,250,250,0.3)",
                    "rgba(200,200,200,0.3)"
                ]
            }
        ],
        "axisSeperateSetting": false,
        "toolboxColor": "#13adc4",
        "toolboxEmpasisColor": "#26e6b7",
        "tooltipAxisColor": "rgba(207,41,150,0.51)",
        "tooltipAxisWidth": "1",
        "timelineLineColor": "#626c91",
        "timelineLineWidth": 1,
        "timelineItemColor": "#626c91",
        "timelineItemColorE": "#626c91",
        "timelineCheckColor": "#3fb1e3",
        "timelineCheckBorderColor": "rgba(63,177,227,0.15)",
        "timelineItemBorderWidth": 1,
        "timelineControlColor": "#626c91",
        "timelineControlBorderColor": "#626c91",
        "timelineControlBorderWidth": 0.5,
        "timelineLabelColor": "#626c91",
        "datazoomBackgroundColor": "rgba(255,255,255,0)",
        "datazoomDataColor": "rgba(222,222,222,1)",
        "datazoomFillColor": "rgba(114,230,212,0.25)",
        "datazoomHandleColor": "#cccccc",
        "datazoomHandleWidth": "100",
        "datazoomLabelColor": "#999999"
    };

    echarts.registerTheme('macarons', theme);
}));