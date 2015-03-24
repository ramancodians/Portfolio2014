
	var ninjApp = angular.module('ninjApp', [
		'ui.router',
		'ngTouch'
	]);

	ninjApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

		/*$urlRouterProvider.otherwise("/");*/
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
	        })
	        .state('works/', {
	        	url: '/works/',
	        	templateUrl: 'views/works.html',
	        	controller: 'worksController'
	        })
	        .state('contact', {
	        	url: '/contact',
	        	templateUrl: 'views/contact.html',
	        	controller: 'contactController'
	        })
	        .state('contact/', {
	        	url: '/contact/',
	        	templateUrl: 'views/contact.html',
	        	controller: 'contactController'
	        })
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
				'homeTitle': {
					'y': {
						'oldValue': '',
						'newValue': ''
					}
				},
				'btStartUx':{
					'y': {
						'oldValue': '0',
						'newValue': '20'
					}
				}
			},
			'works': {
				'worksHeader': {
					'y': {
						'oldValue': '0',
						'newValue': '-20'
					}
				},
				'worksList': {
					'y': {
						'oldValue': '0',
						'newValue': '20'
					}
				},
				'footerBanner-works': {
					'y': {
						'oldValue': '0',
						'newValue': '20'
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
						/*TweenLite.to(elm, 0.2, {display:"block", top:"0px", bottom:"auto", height:"100%", ease:Quart.easeOut});*/
						TweenLite.to(elm, 0, {display: "block", onComplete:function(){
							TweenLite.to(elm, 0.2, { opacity:"1", ease:Quart.easeOut });
						}});	
					} else {
						TweenLite.to(elm, 0.2, { opacity:"0", ease:Quart.easeOut, onComplete:function(){
							TweenLite.to(elm, 0, { display: "none"});
						}});
					}
				});
			}
		};
	}]);



	ninjApp.directive('homeSvg',function(){
		return {
			restrict: 'A',
			templateUrl: 'assets/svg/svgHomeAlexis.svg',
		}
	});


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




	ninjApp.directive('worksContent',function(){
		return {
			restrict: 'A',
			templateUrl: 'views/worksContent.html',
			controller: function() {
				this.workTab = 1;
				this.isSet = function(checkTab) {
					return this.workTab === checkTab;
				};
				this.setTab = function(activeTab) {
					this.workTab = activeTab;
					document.getElementById('works--nav').setAttribute("data-workPage", activeTab);
				};
			},
			controllerAs: "workTab"
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
			if($(keyEvent.target).is('input, textarea')){

            } else {
			    if(keyEvent.which == 109){
			    	if($('body').hasClass("menu_noClick")){
			    		
			    	} else {
			    	    var elem = $('body');
			    	    elem.addClass("menu_noClick");
			    	    
			    	    setTimeout(function() {
			    	        elem.removeClass("menu_noClick");
			    	    }, 600);

						if($('.menuOverlay').css('display') == 'none'){
							var page =  $('section').attr('class');
							page = page.replace('ng-scope', '').replace(' ','');
							openMenu_fadeOutElements(transiArray, page, 1);
						} else {
							switchMenu_anim(transiArray, 0, true);
						}
					} 
				}
			}
		}

		$scope.openMenuOverlay = function(page){
			openMenu_fadeOutElements(transiArray, page, 1);
		}
		$scope.closeMenuOverlay = function(){
			switchMenu_anim(transiArray, 0, true);
		}

		$scope.switchPage = function(link, propertie){
			var page =  $('section').attr('class');
			page = page.replace('ng-scope', '').replace(' ','');
			console.log('propertie: '+propertie);
			console.log('page: '+page);
			console.log('link: '+link);
			if(propertie == 'directLink'){
				directLink_fadeOutElements(transiArray, page, 0);
				setTimeout(function(){
					if(link == 'home'){
						$state.transitionTo('/');
					} else {
						$state.transitionTo(link);
					}
				},1500);
			} else if(page == link){
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



		$.get('assets/svg/svgdefs.svg', function(data){
			$('.bt-menu svg').empty().html($(data).find('.burgerPath'));
		});


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

















