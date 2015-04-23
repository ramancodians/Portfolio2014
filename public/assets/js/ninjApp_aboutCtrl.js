ninjApp.controller('aboutController', ['$scope', function($scope, $http, $state, Page){

	$scope.Page.setTitle('About | Alexis Bertin');

	window.scrollTo(0,0);

	/*TweenLite.to('.overlay', 0, {background: "rgba(0,0,0,.6)"});*/
	TweenLite.to('.overlay', 0.2, {
		background: "rgba(6,6,6,0.8)"
	});

	/*TweenLite.to('.home-bgVideo', 0.2, {top: "-280"});*/
	TweenLite.to('.background', 0.2, {opacity: "0", onComplete:function(){
		setTimeout(function(){
			TweenLite.to('.preloader', 0.2, { opacity:"0", ease:Quart.easeOut, onComplete:function(){
				TweenLite.to('.preloader', 0, { display: "none"});
				TweenLite.to('.alphaTransi', 0.4, {y: "0", opacity: "1", ease:Quart.easeOut });
			}});
		},400);
	}});
	/*TweenLite.to('.about-content', 0, {y: "-20", ease:Quart.easeOut });*/



}]);