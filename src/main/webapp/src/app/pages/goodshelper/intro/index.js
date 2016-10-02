var local = angular.module('kuaimao.goodshelper.intro', []);

local.config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('goodshelper.intro', {
        url: '/intro',
        template: require('./index.html'),
        controller: 'goodsHelperIntroCtrl'
    });
}]);

local.controller('goodsHelperIntroCtrl', ['$scope', function($scope) {

}]);

module.exports = local.name;