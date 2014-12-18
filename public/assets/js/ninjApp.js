
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



	ninjApp.directive('loading', ['$http',function($http){
		return {
			restrict: 'A',
			link: function (scope, elm, attrs){
				scope.isLoading = function () {
					return $http.pendingRequests.length > 0;
				};
				scope.$watch(scope.isLoading, function (v){
					if(v){
						elm.show();
					} else {
						elm.fadeOut();
					}
				});
			}
		};
	}]);



	ninjApp.directive('menuOverlay',function(){
		return {
			restrict: 'E',
			templateUrl: 'views/_menuOverlay.html',
			controller: function($scope, $http){
				$http.get('views/_menuOverlayData.json')
					.success(function(data){
						$scope.menuOverlay = data;
						console.log($scope.menuOverlay);
					})
					.error(function(data){
						console.log('Error - $http.get(views/_menuOverlayData.json) - '+ data);
					})
			}
		}
	});



	ninjApp.controller('mainController', function($scope, Page){
		$scope.Page = Page;


		$scope.homeReset = function (){
			setTimeout(function(){
				
			},200);
			openMenuOverlay();

		}


	// ================ Syntax ================ //
	/*
		var transitionArray = {
			'page' = {
				'divClass': {
					'property': {
						'easing': '',
						'oldValue': '',
						'newValue': ''
					}
				}
			}
		};

		transitionArray.page.divClass.property.easing;
	*/
	// ======================================== //

		var transiArray = {
			'home': {
				'homeTitle': {
					'top': {
						'easing': '0.2s ease-out',
						'oldValue': '50%',
						'newValue': '51%'
					}
				}
			}
		};


		


		$scope.openMenuOverlay = function(page){
			
			var x = 1;
			openMenu_fadeOut(transiArray, page, x);

			$('.close').click(function(){ closeMenuOverlay(); });
		}




		window.closeMenuOverlay = function(){

			$('.menuOverlay').fadeOut();


			



		}










		preloaderAnimation(); // functions.js


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

















