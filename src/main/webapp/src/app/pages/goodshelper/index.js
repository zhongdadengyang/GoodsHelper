var local = angular.module('kuaimao.goodshelper', [
    require('./intro'),
    require('./core')
]);

local.config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('goodshelper', {
        abstract: true,
        url: '/goodshelper',
        template: require('./index.html'),
        controller: 'goodsHelperCtrl'
    });
}]);

local.controller('goodsHelperCtrl', ['$scope', function($scope) {

}]);

module.exports = local.name;