var local=angular.module('kuaimao.cacheService', []);
local.factory('cacheService', ['$http', function($http) {
    return {
        get: function(key) {
            return $http({
                method: 'GET',
                url: '/web/cache/' + key
            });
        },
        set: function(key, value) {
            return $http({
                method: 'PUT',
                url: '/web/cache',
                data: {
                    'key': key,
                    'value': value
                }
            });
        }
    }
}]);
module.exports=local.name;