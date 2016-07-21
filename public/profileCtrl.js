angular.module('userProfiles')
.controller('profileCtrl', function( $scope, userInfo, $rootScope ) {
	$rootScope.currentUser = userInfo.currentUser;
	$scope.friends = userInfo.friends;
});