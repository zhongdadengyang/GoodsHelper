var local = angular.module('kuaimao.goodshelper.core.task', [
	require('./list')
]);

local.config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('goodshelper.core.task', {
        abstract: true,
        url: '/task',
        template: require('./index.html'),
        controller: 'goodsHelperCoreTaskCtrl'
    });
}]);

local.controller('goodsHelperCoreTaskCtrl', ['$scope', function($scope) {

}]);

module.exports = local.name;