
	var ninjApp = angular.module('ninjApp', [
		'ui.router'
	]);


	ninjApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

		$urlRouterProvider.otherwise("/");
		$locationProvider.html5Mode(true).hashPrefix('!');
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

	ninjApp.factory('transiArray', function(){
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
		return transiArray;
	})



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
							elm.css({'top': 'auto','bottom': '0','height':'0'});
							setTimeout(function(){
								elm.hide().css({'top': '0','bottom': 'auto','height':'100%'});
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



	ninjApp.controller('mainController', function($scope, $state, Page, transiArray){
		$scope.Page = Page;

		var intro = false;

		$scope.homeTitleContent = [
			$('.home #homeTitle p:first-of-type').html(),
			$('.home #homeTitle p:last-of-type').html(),
			$('.home #homeTitle h2').html()
		];


	
		$scope.menu = function(keyEvent){
			if(keyEvent.which == 109){
				if($('.menuOverlay').css('display') == 'none'){
					var page =  $('section').attr('class');
					page = page.replace('ng-scope', '').replace(' ','');
					openMenu_fadeOutElements(transiArray, page, 1);
				} else {
					switchMenu_anim(transiArray, 0, true);
				} 
			}
		}

		$scope.openMenuOverlay = function(page){
			openMenu_fadeOutElements(transiArray, page, 1);
		}
		$scope.closeMenuOverlay = function(){
			switchMenu_anim(transiArray, 0, true);
		}

		$scope.switchPage = function(link){
			var page =  $('section').attr('class');
			page = page.replace('ng-scope', '').replace(' ','');
			console.log('page: '+page);
			console.log('link: '+link);
			if(page == link){
				switchMenu_anim(transiArray, 0, true);
			} else {
				switchMenu_anim(transiArray, 0, undefined);
				setTimeout(function(){
					if(link == 'home'){
						$state.transitionTo('/');
					} else {
						$state.transitionTo(link);
					}
				},800);						
			}			
		}



		preloaderAnimation(); // functions.js





		
			


	}

	);











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

















