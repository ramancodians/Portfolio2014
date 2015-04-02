ninjApp.controller('aboutController', function($scope, $http, $state, Page){

	Page.setTitle('About | Alexis Bertin');

	/*TweenLite.to('.overlay', 0, {background: "rgba(0,0,0,.6)"});*/

	setTimeout(function(){	TweenLite.to('.about .alphaTransi', 0.4, {y: "0", opacity: "1", ease:Quart.easeOut }); },1000);

	
	/*TweenLite.to('.home-bgVideo', 0.2, {top: "-280"});*/
	TweenLite.to('.background', 0, {opacity: "0"});
	/*TweenLite.to('.about-content', 0, {y: "-20", ease:Quart.easeOut });*/



});