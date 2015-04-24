
	var ninjApp = angular.module('ninjApp', [
		'ui.router',
		'ngTouch'
	]);

	ninjApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
		$locationProvider.html5Mode(true).hashPrefix('!');
	    $stateProvider
	        .state('/', {
	            url: '/',
	            templateUrl: 'views/home-min.html',
	            controller: 'homeController'
	        })
	        .state('works', {
	        	url: '/works',
	        	templateUrl: 'views/works-min.html',
	        	controller: 'worksController'
	        })
	        .state('works/', {
	        	url: '/works/',
	        	templateUrl: 'views/works-min.html',
	        	controller: 'worksController'
	        })
	        .state('about', {
	        	url: '/about',
	        	templateUrl: 'views/about-min.html',
	        	controller: 'aboutController'
	        })
	        .state('about/', {
	        	url: '/about/',
	        	templateUrl: 'views/about-min.html',
	        	controller: 'aboutController'
	        })
	        .state('contact', {
	        	url: '/contact',
	        	templateUrl: 'views/contact-min.html',
	        	controller: 'contactController'
	        })
	        .state('contact/', {
	        	url: '/contact/',
	        	templateUrl: 'views/contact-min.html',
	        	controller: 'contactController'
	        })
	        .state('landingPage',{
	        	url:'/landingPage',
	        	templateUrl: 'views/landingPage-min.html',
	        	controller: 'landingController'
	        })
	        .state('landingPage/',{
	        	url:'/landingPage/',
	        	templateUrl: 'views/landingPage-min.html',
	        	controller: 'landingController'
	        })
	        .state('credits',{
	        	url:'/credits',
	        	templateUrl: 'views/credits-min.html',
	        	controller: 'creditsController'
	        })
	        .state('credits/',{
	        	url:'/credits/',
	        	templateUrl: 'views/credits-min-min.html',
	        	controller: 'creditsController'
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
						TweenLite.to('.preloader', 0, {display: "block", onComplete:function(){
							TweenLite.to('.preloader', 0.2, { opacity:"1", ease:Quart.easeOut});
						}});
					} else {
						setTimeout(function(){
							TweenLite.to('.preloader', 0, { opacity: '0', display: "none"});
						},2000);
					}
				});
			}
		};
	}]);



	ninjApp.directive('homeSvg',function(){
		return {
			restrict: 'A',
			templateNamespace: 'svg',
			templateUrl: 'assets/svg/svgHomeAlexis.svg'
		};
	});


	ninjApp.directive('menuOverlay',function(){
		return {
			restrict: 'E',
			templateUrl: 'views/_menuOverlay-min.html',
			controller: function($scope, $http){
				$http.get('views/_menuOverlayData.json')
					.success(function(data){
						$scope.menuOverlay = data;
					})
					.error(function(data){
						console.log('Error - $http.get(views/_menuOverlayData.json) - '+ data);
					});
			}
		};
	});




	ninjApp.directive('worksContent',function(){
		return {
			restrict: 'A',
			templateUrl: 'views/worksContent-min.html',
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
		};
	});





	ninjApp.controller('mainController', function($scope, $state, Page){
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
			    if(keyEvent.which === 109){
			    	if($('body').hasClass("menu_noClick")){
			    		
			    	} else {
			    	    var elem = $('body');
			    	    elem.addClass("menu_noClick");
			    	    
			    	    setTimeout(function() {
			    	        elem.removeClass("menu_noClick");
			    	    }, 600);

						if($('.menuOverlay').css('display') === 'none'){
							var page =  $('section').attr('class');
							page = page.replace('ng-scope', '').replace(' ','');
							openMenu_fadeOutElements(page);
						} else {
							switchMenu_anim(true);
						}
					} 
				}
			}
		};

		$scope.openMenuOverlay = function(page){
			/*openMenu_fadeOutElements(page, 1);*/
			if($('.menuOverlay').css('display') === 'none'){
				page =  $('section').attr('class');
				page = page.replace('ng-scope', '').replace(' ','');
				openMenu_fadeOutElements(page);
			} else {
				switchMenu_anim(true);
			}
		};
		$scope.closeMenuOverlay = function(){
			switchMenu_anim(true);
		};

		$scope.switchPage = function(link, propertie){
			var page =  $('section').attr('class');
			page = page.replace('ng-scope', '').replace(' ','');
			if(propertie === 'directLink'){
				if(page === 'home'){
					TweenLite.to('.alphaTransi', 0.2, { opacity:"0", ease:Quad.easeOut });
					setTimeout(function(){ TweenLite.to('.preloader', 0.2, {opacity:"1", ease:Quart.easeOut}); },100);
				} else {
					TweenLite.to('.alphaTransi', 0.2, { opacity:"0", y:'10', ease:Quad.easeOut });
					setTimeout(function(){ TweenLite.to('.preloader', 0.2, {opacity:"1", ease:Quart.easeOut}); },100);
				}
				var openMenu = false;
				TweenLite.to('.menuOverlay', 0.2, {opacity: "0", onComplete:function(){
					TweenLite.to('.menuOverlay', 0, {display:"none"});
					setTimeout(function(){
						if(link === 'home'){
							$state.transitionTo('/');
						} else {
							$state.transitionTo(link);
						}
					},400);	
				}});
			} else if(page === link){
				switchMenu_anim(true);
			} else {
				switchMenu_anim(undefined);
				TweenLite.to('.menuOverlay', 0.2, {opacity: "0", onComplete:function(){
					TweenLite.to('.menuOverlay', 0, {display:"none"});
					setTimeout(function(){
						if(link === 'home'){
							$state.transitionTo('/');
						} else {
							$state.transitionTo(link);
						}
					},400);	
				}});
			}			
		};



		$.get('assets/svg/svgdefs.svg', function(data){
			$('.bt-menu svg').empty().html($(data).find('.burgerPath'));
		});




	});
