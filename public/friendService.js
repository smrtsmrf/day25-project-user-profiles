angular.module('userProfiles')
.factory('friendService', function( $http ) {
  return {
    
    login: function( user ) {
      return $http.post('http://localhost:4000/api/login', user);
    },

    getFriends: function() {
    	return $http.get('http://localhost:4000/api/profiles').then(function (response) {
    		return response.data;
    	});
    },

    update: function(newUser) {
    	return $http.put('http://localhost:4000/api/settings', newUser)
    }

  }
});