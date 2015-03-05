ninjApp.controller('worksController', function($scope, $http, $state, Page){

	

	Page.setTitle('Works | Alexis Bertin');

	TweenLite.to('.overlay', 0.2, {background: "rgba(0,0,0,.4)"});
	/*TweenLite.to('.home-bgVideo', 0.2, {top: "-280"});*/
	TweenLite.to('.background', 0.2, {opacity: "0"});
	TweenLite.to('.works-content', 0.2, {y: "-20", ease:Quart.easeOut });

/*
	$http.get('views/worksData.json')
		.success(function(data){
			$scope.works = data;
		})
		.error(function(data){
			console.log(data);
		})
*/
	$http.get('views/worksData.json')
		.success(function(data){
			$scope.works = data;
		})
		.error(function(data){
			console.log(data);
		})


	var oldWorkPage = '';




	/* --- Load / Reload on work page (with a hash) --- */
	workPage = document.URL.split('#');
	var workPageLength = workPage.length;
	if(workPageLength > 1){
		workPage = workPage[1];
		var oldWorkPage = workPage;
		console.log('oldWorkPage: '+oldWorkPage);
		TweenLite.to('.works', 0.4, {opacity: "0", y: "-20", ease:Quart.easeOut, onComplete:function(){
			TweenLite.to('.works', 0, {display: "none"});
			TweenLite.to('.works-content', 0.2, {display: "block", onComplete:function(){
				TweenLite.to('.works-content', 0.2, {opacity: "1", y: "0", ease:Quart.easeOut });
			}});
			TweenLite.to('.works-content #works---'+workPage, 0, {display: "block", onComplete:function(){
				TweenLite.to('.works-content #works---'+workPage, 0.2, {opacity: "1", y:"0", ease:Quart.easeOut});
				var elm = document.getElementById('works---'+workPage).className.replace('ng-hide', 'ng-show');
				document.getElementById('works---'+workPage).className = elm;
				
			}})
		}});
	}


	if (window.history && window.history.pushState) {
		$(window).on('popstate', function() {
			var hash = window.location.hash;
			var workName = hash.replace('#', '');
			if (hash === '') {
				/* STATE 1 --- Back on ALL WORKS ||  --- */
				TweenLite.to('.works-content #works---'+workName, 0.2, {opacity: "0", ease:Quart.easeOut, onComplete:function(){
					TweenLite.to('.works-content #works---'+workName, 0, {display: "none"});
					TweenLite.to('.works-content', 0.2, {opacity: "0", y: "-20", ease:Quart.easeOut, onComplete:function(){
						TweenLite.to('.works-content', 0, {display: "none"});
						TweenLite.to('.works', 0, {display: "block", onComplete:function(){
							TweenLite.to('.works', 0.4, {opacity: "1", y: "0", ease:Quart.easeOut});
							var elm = document.getElementById('works---'+oldWorkPage).className.replace('ng-show', 'ng-hide');
							document.getElementById('works---'+oldWorkPage).className = elm;
							oldWorkPage = '';
						}});
					}});
				}});
			} else if(hash !== ''){
				/* STATE 2 --- work opening --- */
				if(oldWorkPage == ''){
					/* STATE 2.1 --- Prev page was ALL WORKS --- */
					TweenLite.to('.works', 0.4, {opacity: "0", y: "-20", ease:Quart.easeOut, onComplete:function(){
						TweenLite.to('.works', 0, {display: "none"});
						TweenLite.to('.works-content', 0.2, {display: "block", onComplete:function(){
							TweenLite.to('.works-content', 0.2, {opacity: "1", y: "0", ease:Quart.easeOut });
						}});
						TweenLite.to('.works-content #works---'+workName, 0, {display: "block", onComplete:function(){
							TweenLite.to('.works-content #works---'+workName, 0.2, {opacity: "1", y: "0", ease:Quart.easeOut});
							elm = document.getElementById('works---'+workName).className.replace('ng-hide', 'ng-show');
							document.getElementById('works---'+workName).className = elm;
							oldWorkPage = workName;
						}})
					}});
				} else if(oldWorkPage !== ''){
					/* STATE 2.2 --- Prev page was an other WORK --- */
					var elm = document.getElementById('works---'+oldWorkPage).className.replace('ng-show', 'ng-hide');
					document.getElementById('works---'+oldWorkPage).className = elm;
					TweenLite.to('.works-content #works---'+oldWorkPage, 0.2, {opacity: "0", y:"-20", ease:Quart.easeOut, onComplete:function(){
						TweenLite.to('.works-content #works---'+oldWorkPage, 0, {display: "none"});
						TweenLite.to('.works-content #works---'+workName, 0, {display: "block", onComplete:function(){
							TweenLite.to('.works-content #works---'+workName, 0.2, {opacity: "1", y:"0", ease:Quart.easeOut});
							elm = document.getElementById('works---'+workName).className.replace('ng-hide', 'ng-show');
							document.getElementById('works---'+workName).className = elm;
							oldWorkPage = workName;
						}})
					}});
				}
				
			}
	    });
	}





/*	$scope.worksDetail = function(workName, $location){
		console.log(workName);
		TweenLite.to('.works', 0.4, {opacity: "0", y: "-20", ease:Quart.easeOut, onComplete:function(){
			TweenLite.to('.works', 0, {display: "none"});
			TweenLite.to('.works-content', 0.2, {display: "block", onComplete:function(){
				TweenLite.to('.works-content', 0.2, {opacity: "1"});
			}});
			TweenLite.to('.works-content #works---'+workName, 0, {display: "block", onComplete:function(){
				TweenLite.to('.works-content #works---'+workName, 0.2, {opacity: "1", ease:Quart.easeOut});
			}})
		}});
	}*/

});
