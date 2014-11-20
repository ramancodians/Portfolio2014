$(document).ready(function(){


	var ninjApp = angular.module('ninjApp', []);



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
	/*angular.controller('homeController', function(){
		$.get('assets/js/ninjApp_homeCtrl.js', function(data){
			return data;
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




});













