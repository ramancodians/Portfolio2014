ninjApp.controller('worksController', function($scope, $http, $state, Page){

	

	Page.setTitle('Works | Alexis Bertin');

	TweenLite.to('.overlay', 0.2, {background: "rgba(0,0,0,.6)"});
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
	var stopSpamKiddo = false;

	var worksArray = [
		'darthVader',
		'gifMePlz',
		'portfolio2013',
		'oweme',
		'usaFlight',
		'commeChezSoi',
		'portfolio2012',
		'plasticSurgery',
		'anchl'
	];

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

				var workPageId = worksArray.indexOf(workPage) + 1;
				document.getElementById('works--nav').setAttribute('data-workpage', workPageId);

				document.getElementById('works---count').innerHTML = Number(workPageId).toString(2);
				document.getElementById('works---length').innerHTML = Number(worksArray.length).toString(2);
			}})
		}});
	}

	
	function unlock(){ stopSpamKiddo = false; }

	



	if (window.history && window.history.pushState && !stopSpamKiddo) {
		$(window).on('popstate', function() {
			stopSpamKiddo = true;
			setTimeout(unlock, 200);

			var hash = window.location.hash;
			var workName = hash.replace('#', '');

			var workPageId = worksArray.indexOf(workName) + 1;
			document.getElementById('works--nav').setAttribute('data-workpage', workPageId);
			document.getElementById('works---count').innerHTML = Number(workPageId).toString(2);
			document.getElementById('works---length').innerHTML = Number(worksArray.length).toString(2);

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
						elm = document.getElementById('works---'+workName).className.replace('ng-hide', 'ng-show');
						document.getElementById('works---'+workName).className = elm;
						TweenLite.to('.works-content #works---'+workName, 0, {display: "block", onComplete:function(){
							TweenLite.to('.works-content #works---'+workName, 0.2, {opacity: "1", y: "0", ease:Quart.easeOut});
							oldWorkPage = workName;
						}});
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
						}});
					}});
				}
				
			}
	    });
	}





	$scope.worksClose = function(){
		console.log('Close !');
		var hash = window.location.hash;
		var workName = hash.replace('#', '');
		document.getElementById('works--nav').setAttribute('data-workpage', 0);
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
		history.pushState(null, null, "/works");
	}

	$scope.worksNext = function(){
		/*var workPageId = worksArray.indexOf(workPage) + 1;*/
		workPageId = document.getElementById('works--nav').getAttribute('data-workpage');
		workPage = worksArray[workPageId - 1];

		if(workPageId == worksArray.length){
			workPageNext = worksArray[0];
		} else {
			workPageNext = worksArray[workPageId];
		}
		/*console.log('Next: we are on page '+workPageId+' - '+workPage);
		console.log('Next: we are going to '+workPageId+1+' - '+workPageNext);*/
		TweenLite.to('.works-content #works---'+workPage, 0.2, {opacity: "0", y:"-20", ease:Quart.easeOut, onComplete:function(){
			TweenLite.to('.works-content #works---'+workPage, 0, {display: "none"});
			var elm = document.getElementById('works---'+workPage).className.replace('ng-show', 'ng-hide');
			document.getElementById('works---'+workPage).className = elm;
			TweenLite.to('.works-content #works---'+workPageNext, 0, {display: "block", onComplete:function(){
				elm = document.getElementById('works---'+workPageNext).className.replace('ng-hide', 'ng-show');
				document.getElementById('works---'+workPageNext).className = elm;
				TweenLite.to('.works-content #works---'+workPageNext, 0.2, {opacity: "1", y:"0", ease:Quart.easeOut});
				oldWorkPage = workPageNext;
				var workPageId = worksArray.indexOf(workPageNext) + 1;
				document.getElementById('works--nav').setAttribute('data-workpage', workPageId);
				document.getElementById('works---count').innerHTML = Number(workPageId).toString(2);
				document.getElementById('works---length').innerHTML = Number(worksArray.length).toString(2);
			}});
		}});
		history.pushState(null, null, "/works#"+workPageNext);
	}



	$scope.worksPrev = function(){
		workPageId = document.getElementById('works--nav').getAttribute('data-workpage');
		workPage = worksArray[workPageId - 1];
		
		if(workPageId == 1){
			workPagePrev = worksArray[(worksArray.length)-1];
		} else {
			workPagePrev = worksArray[workPageId-2];
		}
		/*console.log('Next: we are on page '+workPageId+' - '+workPage);
		console.log('Next: we are back to '+workPageId+1+' - '+workPagePrev);*/
		TweenLite.to('.works-content #works---'+workPage, 0.2, {opacity: "0", y:"-20", ease:Quart.easeOut, onComplete:function(){
			TweenLite.to('.works-content #works---'+workPage, 0, {display: "none"});
			var elm = document.getElementById('works---'+workPage).className.replace('ng-show', 'ng-hide');
			document.getElementById('works---'+workPage).className = elm;
			TweenLite.to('.works-content #works---'+workPagePrev, 0, {display: "block", onComplete:function(){
				elm = document.getElementById('works---'+workPagePrev).className.replace('ng-hide', 'ng-show');
				document.getElementById('works---'+workPagePrev).className = elm;
				TweenLite.to('.works-content #works---'+workPagePrev, 0.2, {opacity: "1", y:"0", ease:Quart.easeOut});
				oldWorkPage = workPagePrev;
				var workPageId = worksArray.indexOf(workPagePrev) + 1;
				document.getElementById('works--nav').setAttribute('data-workpage', workPageId);
				document.getElementById('works---count').innerHTML = Number(workPageId).toString(2);
				document.getElementById('works---length').innerHTML = Number(worksArray.length).toString(2);
			}});
		}});
		history.pushState(null, null, "/works#"+workPagePrev);
	}




	$("body").keydown(function(e) {
		var hash = window.location.hash;
		var page = hash.replace('#', '');
		if(e.keyCode == 37 && page != ''){
			$('.works--arrow .works---arrowPrev').addClass('works--arrowHover');
			$('.works--arrow .works---arrowPrev span svg').css('fill','#000');
		} else if(e.keyCode == 39 && page != '') {
			$('.works--arrow .works---arrowNext').addClass('works--arrowHover');
			$('.works--arrow .works---arrowNext span svg').css('fill','#000');
		} else if(e.keyCode == 27 && page != ''){
			$('.works--arrow .works---close').addClass('works--arrowHover');
			TweenLite.to('#works---count, #works---length', 0, { opacity:"0" });
			TweenLite.to('#works---closeTxt', 0, { opacity:"1" });
		}
	});
	$("body").keyup(function(e) {
		var hash = window.location.hash;
		var page = hash.replace('#', '');
		if(e.keyCode == 37 && page != ''){
			$('.works--arrow .works---arrowPrev').removeClass('works--arrowHover');
			$('.works--arrow .works---arrowPrev span svg').css('fill','#f9e30b');
			$scope.worksPrev();
		} else if(e.keyCode == 39 && page != '') {
			$('.works--arrow .works---arrowNext').removeClass('works--arrowHover');
			$('.works--arrow .works---arrowNext span svg').css('fill','#f9e30b');
			$scope.worksNext();
		} else if(e.keyCode == 27 && page != ''){
			$('.works--arrow .works---close').removeClass('works--arrowHover');
			TweenLite.to('#works---count, #works---length', 0, { opacity:"1" });
			TweenLite.to('#works---closeTxt', 0, { opacity:"0" });
			$scope.worksClose();
		}
	});


});





