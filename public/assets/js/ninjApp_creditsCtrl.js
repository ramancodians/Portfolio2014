ninjApp.controller('creditsController', ['$scope', function($scope, Page){

	$scope.Page.setTitle('Credits Page | Alexis Bertin');

	window.scrollTo(0,0);

	/*TweenLite.to('.overlay', 0, {background: "rgba(0,0,0,.6)"});*/
	TweenLite.to('.overlay', 0.2, { background: "rgba(6,6,6,0.4)"});
	TweenLite.to('.background', 0.2, {opacity: "1", onComplete:function(){
		setTimeout(function(){
			TweenLite.to('.preloader', 0.2, { opacity:"0", y:'0', ease:Quart.easeOut, onComplete:function(){
				TweenLite.to('.preloader', 0, { display: "none"});
				TweenLite.to('.alphaTransi', 0.4, { opacity: "1", ease:Quart.easeOut });
			}});
		},400);
	}});

}]);