


	var ninjApp = angular.module('ninjApp', ['ui.router']);


	ninjApp.config(function($routeProvider) {
	       $routeProvider

	           // route for the home page
	           .when('/', {
	               templateUrl : 'views/home.html',
	               controller  : function($scope, $http){
	               		$http
	               			.get('assets/js/ninjApp_homeCtrl.js')
	               			.success(function(data, status, headers, config) {
	               		    	$scope.posts = data;
	               		   	})
	               		   	.error(function(data, status, headers, config) {
	               		    	console.log('fail HOME js http');
	               		   	});
	               }
	           })

	           // route for the about page
	           .when('/about', {
	               templateUrl : 'views/works.html',
	           })
	   });




// Routes ===============================================================================
	/*ninjApp.config(['$routeProvider', '$locationProvider'],
		function($routeProvider, $locationProvider){
			$routeProvider
				.when('/', {
					templateUrl: 'views/home.html',
					controller: 'homeController'
				})
				.when('/works', {
					templateUrl: 'views/works.html'
				});

			$locationProvider.html5Mode(true);
		}
	);*/
// ======================================================================================

	


// Controllers ==========================================================================
	/*ninjApp.controller('homeController', function($scope){
		$.get('assets/js/ninjApp_homeCtrl.js', function($scope){
			return $scope;
		});
	});*/
// ======================================================================================











/* ---------------- Others ---------------- */
	/* Calcul de la taille du menu en fonction du nombre de li et de leur taille individuelle */

	/*var navMenuWidth = 0;
	for(var x = 1; x <= $('.works .mainNav li').size(); x++){
		navMenuWidth = navMenuWidth + $('.works .mainNav li:nth-child('+x+') a').width() + 26;
	}

	var homeMenuWidth = 0;
	for(var x = 1; x <= $('.home .homeMenu li').size(); x++){
		homeMenuWidth = homeMenuWidth + $('.home .homeMenu li:nth-child('+x+') a').width() + 26;
	}
	console.log(homeMenuWidth);
	$('.home .homeMenu').css('width',homeMenuWidth);
	$('.works .mainNav').css('width',navMenuWidth);*/
/* ---------------------------------------- */

















