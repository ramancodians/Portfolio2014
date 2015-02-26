ninjApp.controller('worksController', function($scope, $http, Page){

	Page.setTitle('Works | Alexis Bertin');

	TweenLite.to('.overlay', 0.2, {background: "rgba(0,0,0,.6)"});
	/*TweenLite.to('.home-bgVideo', 0.2, {top: "-280"});*/
	TweenLite.to('.background', 0.2, {opacity: "0"});
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
});
