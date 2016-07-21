angular.module('userProfiles')
.factory('friendService', function( $http ) {
  return {
    
    login: function( user ) {
      return $http.post('http://localhost:3000/api/login', user);
    },

    getFriends: function() {
    	return $http.get('http://localhost:3000/api/profiles').then(function (response) {
    		return response.data;
    	});
    },

    update: function(newUser) {
    	return $http.put('http://localhost:3000/api/settings', newUser)
    }

  }
});