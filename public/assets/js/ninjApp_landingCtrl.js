ninjApp.controller('landingController', function($scope, $http, $state, Page){

	Page.setTitle('Landing Page | Alexis Bertin');

	/*TweenLite.to('.overlay', 0, {background: "rgba(0,0,0,.6)"});*/
	TweenLite.to('.overlay', 0.2, { background: "rgba(6,6,6,0.4)"});
	TweenLite.to('.background', 0.2, {opacity: "1", onComplete:function(){
		TweenLite.to('.alphaTransi', 0, {opacity: "1", ease:Quart.easeOut });
	}});

	
	/*TweenLite.to('.home-bgVideo', 0.2, {top: "-280"});*/
	/*TweenLite.to('.background', 0, {opacity: "0"});*/
	/*TweenLite.to('.about-content', 0, {y: "-20", ease:Quart.easeOut });*/



});