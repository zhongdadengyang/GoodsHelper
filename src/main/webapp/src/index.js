
'use strict';

var $ = require("jquery");

window.$ = $;
window.jQuery = $;

require('bootstrap');
require('./assets/styles/toolkit-light.min.css');
require("./assets/styles/application.css");
require("./assets/styles/font-awesome.min.css");
var angular = require("angular");

require('ng-tags-input');
require('angular-confirm');
require('angucomplete-alt');
require('../node_modules/ng-tags-input/build/ng-tags-input.bootstrap.min.css');
require('../node_modules/ng-tags-input/build/ng-tags-input.min.css');
require('../node_modules/angular-ui-notification/dist/angular-ui-notification.min.css');
require('../node_modules/angular-loading-bar/build/loading-bar.min.css');
require('../node_modules/angular-bootstrap-datetimepicker/src/css/datetimepicker.css');
require('../node_modules/angucomplete-alt/angucomplete-alt.css');
require("./assets/styles/main.css");
require("moment");
require("./app/components/datetimepicker/datetimepicker.js");

window.crosstab = require("crosstab");

angular.module('kuaimao', [
    require('angular-animate'),
    require('angular-resource'),
    require('angular-cookies'),
    require('angular-sanitize'),
    require('angular-ui-bootstrap'),
    require('angular-ui-router'),
    require('angular-loading-bar'),
    require('angular-chart.js'),
    require('angular-ui-notification'),
    require('./app/constants/global-config.js'),
    require('./app/directives/sparkline'),
    require('./app/directives/btnplus'),
    require('./app/directives/timepicker'),
    require('./app/directives/echarts'),
    require('./app/directives/ngenter'),
    require('./app/directives/autocomplete'),
    require('./app/services/cache'),
    require('./app/services/user'),
    require('./app/pages/dashboard'),
    require('./app/pages/goodshelper'),
    'ngTagsInput',
    'angular-confirm',
    'angucomplete-alt'
]).config(['$urlRouterProvider', '$stateProvider', '$httpProvider', 'NotificationProvider', 'cfpLoadingBarProvider', 'ChartJsProvider', function($urlRouterProvider, $stateProvider, $httpProvider, NotificationProvider, cfpLoadingBarProvider, ChartJsProvider) {
    ChartJsProvider.setOptions({
        colours: ['#1bc98e', '#1ca8dd', '#e5adc3', '#adbae5', '#e4d836'],
        responsive: true,
        maintainAspectRatio: true,
        barShowStroke: true
    });
    // Configure all line charts
    ChartJsProvider.setOptions('Line', {
        datasetFill: true
    });

    NotificationProvider.setOptions({
        delay: 10000,
        startTop: 20,
        startRight: 10,
        verticalSpacing: 20,
        horizontalSpacing: 20,
        positionX: 'right',
        positionY: 'top'
    });

    cfpLoadingBarProvider.includeSpinner = false;

    $httpProvider.interceptors.push('apiInterceptor');

    $urlRouterProvider.otherwise('/');

}]).factory('apiInterceptor', ['$q', '$injector', '$rootScope', function($q, $injector, $rootScope) {
    return {
        request: function(config) {
            if (config.url.indexOf('web/') > 0) {
                config.headers['X-Requested-With'] = 'XMLHttpRequest';
            }
            return config;
        },
        requestError: function(rejection) {
            $rootScope.$broadcast('requestError', {
                code: '?',
                msg: '请求错误！'
            });
            return $q.reject(rejection);
        },
        response: function(response) {
            var deferred = $q.defer();

            if (response.config.url.indexOf("web/") > 0 && response.data.code == '200000') {
                var redirectUrl = response.data.data.redirectUrl;
                $rootScope.$broadcast('sessionTimeout', JSON.parse(response.data.data));
                deferred.reject();
            } else if (response.config.url.indexOf("web/") > 0 && response.data.code != '000000') {
                $rootScope.$broadcast('requestError', {
                    code: response.data.code,
                    msg: response.data.message
                });
                deferred.reject();
            } else {
                deferred.resolve(response);
            }
            return deferred.promise;
        },
        responseError: function(rejection) {
            $rootScope.$broadcast('requestError', {
                code: rejection.status,
                msg: rejection.statusText
            });
            return $q.reject(rejection);
        }
    };
}]).run(['$rootScope', '$global', 'userService', '$uibModal', 'Notification', '$interval', '$timeout', '$confirmModalDefaults', 'cacheService', '$state', function($rootScope, $global, userService, $uibModal, Notification, $interval, $timeout, $confirmModalDefaults, cacheService, $state) {

    $confirmModalDefaults.defaultLabels.ok = '确定';
    $confirmModalDefaults.defaultLabels.cancel = '取消';

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options) {
        $rootScope.$state = toState;

        angular.forEach($global.messages, function(val) {
            val.checked = false;
        });

        if (angular.isDefined($rootScope.realtimeTimer)) {
            $interval.cancel($rootScope.realtimeTimer);
        }
    });

    userService.getSelf().then(function(resp) {
        $rootScope.userSelf = resp.data.data;
    });

    $rootScope.$on('requestError', function(msg, data) {
        Notification.error({ message: '<div class="col-md-12">错误码: ' + data.code + '</div><div class="col-md-12">消息：' + data.msg + '</div><div class="row"><br /></div>' });
    });

    $rootScope.$on('operationSuccess', function(msg, data) {
        Notification.info({ message: data.msg });
    });

    $rootScope.$on('operationFailed', function(msg, data) {
        Notification.error({ message: data.msg });
    });

    $rootScope.$global = $global;

    $rootScope.$on('sessionTimeout', function(event, data) {
        var modalInstance = $uibModal.open({
            animation: true,
            backdrop: false,
            template: require('./app/pages/session-timeout/dialog.tpl.html'),
            controller: require('./app/pages/session-timeout/dialog.js'),
            resolve: {
                data: function() {
                    return data;
                }
            },
            size: 'md'
        });
    });

}]);;

