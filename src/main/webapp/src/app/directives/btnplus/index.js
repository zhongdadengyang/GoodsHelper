var local=angular.module('alert.btnPlus', []);
local.directive('btnPlus', [function () {
	return {
		restrict: 'EA',
		template: '<a class="btn btn-primary-outline btn-flat" style="margin-left: 0px; margin-bottom: 20px;" ><i class="fa fa-fw fa-plus"></i><span ng-transclude></span></a>',
		transclude: true,
		link: function (scope, element, attrs) {
			element.bind('click', function() {
				var route = attrs.href;
				if (typeof route != 'undefined') {
					window.location = route;
				}
			})
		}
	};
}]);
module.exports=local.name;