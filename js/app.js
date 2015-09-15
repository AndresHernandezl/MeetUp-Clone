var app = angular.module('meetupApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/', {
		templateUrl: 'views/home.html',
		controller: 'meetupsViewController'
	})
		.when('/grupos', {
		templateUrl: 'views/grupos.html',
		controller: 'meetupController'
	})
		.otherwise({
		redirectTo: 'views/error.html'
	});
}]);

app.controller('homeViewController', ['$scope',function($scope){
	$scope.appTitle="Logo-Meetup"
}]);

app.controller('meetupsViewController', ['$scope',function($scope){

	$scope.meetups = [
		{id: 'meetup-01',name: 'Bogotá Senderismo en la naturaleza Meetup',subTitle:'Somos 810 Caminantes del Retorno',img: 'img/439070461.jpeg'},
		{id: 'meetup-02',name: 'Agiles Colombia',subTitle:'Somos 2,497 Agiles',img: 'img/437404685.jpeg'},
		{id: 'meetup-03',name: 'Bogotá Futbol 5 Meetup',subTitle:'Somos 32 Futboleros',img: 'img/440274279.jpeg'},
		{id: 'meetup-01',name: 'Bogotá Senderismo en la naturaleza Meetup',subTitle:'Somos 810 Caminantes del Retorno',img: 'img/439070461.jpeg'},
		{id: 'meetup-02',name: 'Agiles Colombia',subTitle:'Somos 2,497 Agiles',img: 'img/437404685.jpeg'},
		{id: 'meetup-03',name: 'Bogotá Futbol 5 Meetup',subTitle:'Somos 32 Futboleros',img: 'img/440274279.jpeg'}

	];

}]);

app.controller('meetupController',['$scope','$http',function($scope,$http){
	$scope.meetupsGru = [];
	
	$http.get("http://jsonplaceholder.typicode.com/photos")
		.success(function(data){
			console.log(data);
		$scope.meetupsGru= data;
		})
		.error(function(err){
		
		})
	
}]);