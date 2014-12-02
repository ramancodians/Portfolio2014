


	var ninjApp = angular.module('ninjApp', [
		'ui.router'
	]);



	ninjApp.config(function($stateProvider, $urlRouterProvider) {
	    $urlRouterProvider.otherwise('/');
	    $stateProvider
	        .state('/', {
	            url: '/',
	            templateUrl: 'views/home.html',
	            controller: 'homeController'
	        })
	        
	        .state('/works', {
	        	url: '/works',
	        	templateUrl: 'views/works.html',
	        	controller: 'worksController'
	        });
	});



	ninjApp.factory('Page', function(){
	  var title = 'Alexis Bertin | Front-End Developer';
	  return {
	    title: function() { return title; },
	    setTitle: function(newTitle) { title = newTitle; }
	  };
	});



	ninjApp.controller('mainController', function($scope, Page){
		$scope.Page = Page;
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

















