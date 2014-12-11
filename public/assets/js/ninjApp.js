
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


	ninjApp.directive('menuOverlay',function(){
		return {
			restrict: 'E',
			templateUrl: 'views/_menuOverlay.html',
			controller: function($scope, $http){
				$http.get('views/_menuOverlayData.json')
					.success(function(data){
						$scope.menuOverlay = data;
						console.log($scope.menuOverlay.mainMenu);
					})
					.error(function(data){
						console.log('Error - $http.get(views/_menuOverlayData.json) - '+ data);
					});
			}
		}
	});



	ninjApp.controller('mainController', function($scope, Page){
		$scope.Page = Page;

		function preloaderAnimation(){
			var preloaderLength = $('.preloader h4').html().length;
			var preloaderArray = $('.preloader h4').html().split('');
			$('.preloader h4').empty();
			for(var x=0; x<preloaderLength;x++){ 
				$('.preloader h4').append('<span>'+preloaderArray[x]+'</span>');
			}
			var y = 0,
				z = 0,
				timer = 100;
			function preloaderAnimation_reset(y,z){
				setTimeout(function(){
					if(z<=preloaderLength){
						$('.preloader h4 span:nth-child('+z+')').css({
							'opacity':'0.2'
						});
						z++;
						preloaderAnimation_reset(y,z);
					} else {
						z=0;
						preloaderAnimation_color(y,z);	
					}
				},timer);
			}
			function preloaderAnimation_color(y,z){
				setTimeout(function(){
					if(y<=preloaderLength){
						$('.preloader h4 span:nth-child('+y+')').css({
							'opacity':'0.8'
						});
						y++;
						preloaderAnimation_color(y,z);
					} else {
						y=0;
						preloaderAnimation_reset(y,z);
					}			
				},timer);
			}
			preloaderAnimation_color(y,z);
		}
		preloaderAnimation();


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

















