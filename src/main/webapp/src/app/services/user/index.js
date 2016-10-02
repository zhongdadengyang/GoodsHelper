var local=angular.module('kuaimao.userService', []);

local.factory('userService', ['$http', function ($http) {
	return {
		search: function(form) {

		},
		getSelf: function() {
			return $http({
				method: 'GET',
				url: '/web/user/self'
			});
		},
		getSelfUserGroup: function(param) {
			return $http({
				method: 'GET',
				url: '/web/user/self/userGroup',
				params: param
			});
		},
		getSelfTask: function(param) {
			return $http({
				method: 'GET',
				url: '/web/user/self/task',
				params: param
			});
		},
		getSelfRota: function(param) {
			return $http({
				method: 'GET',
				url: '/web/user/self/rota',
				params: param
			});
		},
		getSelfRecord: function(param) {
			return $http({
				method: 'GET',
				url: '/web/user/self/record',
				params: param
			});
		},
		getSelfStrategy: function(param) {
			return $http({
				method: 'GET',
				url: '/web/user/self/strategy',
				params: param
			});
		},
		getSelfSubscription: function(param) {
			return $http({
				method: 'GET',
				url: '/web/user/self/subscription',
				params: param
			});
		},
		logout: function() {
			return $http({
				method: 'GET',
				url: '/web/user/self/logout'
			});
		}
	}
}]);

module.exports=local.name;