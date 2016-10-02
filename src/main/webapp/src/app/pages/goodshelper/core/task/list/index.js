var local = angular.module('kuaimao.goodshelper.core.task.list', [

]);

local.config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('goodshelper.core.task.list', {
        url: '/list',
        template: require('./index.html'),
        controller: 'goodsHelperCoreTaskListCtrl'
    });
}]);

local.controller('goodsHelperCoreTaskListCtrl', ['$scope', function($scope) {

}]);

module.exports = local.name;