angular.module('userProfiles').controller('settingsCtrl', ['$scope', 'friendService', '$location', function ($scope, friendService, $location) {
	$scope.update = function (newUser) {
		friendService.update(newUser).then(function (response) {
			 $location.path('/profile')
		})
	}
}])