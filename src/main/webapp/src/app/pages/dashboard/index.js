
var local=angular.module('kuaimao.dashborad', []);

local.config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('dashboard', {
        url: '/',
        template: require('./index.html'),
        controller: 'dashboardCtrl'
    })
}]);

local.controller('dashboardCtrl', ['$scope', function ($scope) {
    
}]);

module.exports=local.name;
