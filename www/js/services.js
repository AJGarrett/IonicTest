angular.module('aiaService', ['ngResource'])
	.factory('BTUAthlete', function($http) {
		return { get: function() {
			return $http.get('https://api.athletesinaction.org/api/BTUEmbed');
		}
	};
});