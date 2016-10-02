var local = angular.module('kuaimao.goodshelper.core', [
	require('./task')
]);

local.config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('goodshelper.core', {
        abstract: true,
        url: '/core',
        template: require('./index.html'),
        controller: 'goodsHelperCoreCtrl'
    });
}]);

local.controller('goodsHelperCoreCtrl', ['$scope', function($scope) {

}]);

module.exports = local.name;