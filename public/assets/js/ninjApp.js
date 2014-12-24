
	var ninjApp = angular.module('ninjApp', [
		'ui.router'
	]);


	ninjApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

		$urlRouterProvider.otherwise("/");
		$locationProvider.html5Mode(true);
	    $stateProvider
	        .state('/', {
	            url: '/',
	            templateUrl: 'views/home.html',
	            controller: 'homeController'
	        })
	        .state('works', {
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
						setTimeout(function(){
							elm.show().css({'top': '0','bottom': 'auto','height':'100%'});
						},1000);
					} else {
						setTimeout(function(){
							elm.css({'top': 'auto','bottom': '0','height':'0'})
							setTimeout(function(){
								elm.hide().css({'top': '0','bottom': 'auto','height':'0'})
							},1000);
						},1000);
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
					})
					.error(function(data){
						console.log('Error - $http.get(views/_menuOverlayData.json) - '+ data);
					})

			}
		}
	});



	ninjApp.controller('mainController', function($scope, Page){
		$scope.Page = Page;

		var intro = false;

		/*$scope.homeReset = function (){
		
			openMenuOverlay();
		}
*/

		$scope.homeTitleContent = [
			$('.home #homeTitle p:first-of-type').html(),
			$('.home #homeTitle p:last-of-type').html(),
			$('.home #homeTitle h2').html()
		];

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
				'home-tips': {
					'opacity':{
						'easing': '0.2s ease-out',
						'oldValue': '1',
						'newValue': '0'
					},
					'margin-top':{
						'easing': '0.2s ease-out',
						'oldValue': '0',
						'newValue': '10px'
					}
				},
				'homeTitle': {
					'top': {
						'easing': '0.2s ease-out',
						'oldValue': '50%',
						'newValue': '48%'
					}
				}
			}
		};

		$scope.openMenuOverlay = function(page){
			var x = 1;
			openMenu_fadeOutElements(transiArray, page, x);
		}
		$scope.closeMenuOverlay = function(){
			var x = 0;
			switchMenu_anim(transiArray, x, true);
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

















