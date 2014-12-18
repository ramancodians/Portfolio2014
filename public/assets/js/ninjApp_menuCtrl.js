ninjApp.controller('menuController', function($scope, Page){




	$scope.hoverIn = function(id, menu){
		$('.menuOverlay ul li').addClass('menuOverlay--notSelected');
		$('.menuOverlay---externalLinks li').addClass('menuOverlay--notSelected-externalLinks');

		if(menu == "mainMenu"){
			$('.menuOverlay-mainMenu li:nth-child('+id+')')
					.removeClass('menuOverlay--notSelected')
					.addClass('menuOverlay--selected')
					.addClass('menuOverlay--selected-mainMenu');
		} else if(menu == "secondMenu"){
			$('.menuOverlay-secondMenu > li:nth-child('+id+')')
					.removeClass('menuOverlay--notSelected')
					.addClass('menuOverlay--selected')
					.addClass('menuOverlay--selected-secondMenu');
		} else if(menu == "subMenu"){
			$('.menuOverlay--subMenu > li:nth-child('+id+')')
					.removeClass('menuOverlay--notSelected')
					.addClass('menuOverlay--selected')
					.addClass('menuOverlay--selected-subMenu');
		} else if(menu == "externalLinks"){
			$('.menuOverlay---externalLinks li:nth-child('+id+')')
					.removeClass('menuOverlay--notSelected-externalLinks')
					.addClass('menuOverlay--selected-externalLinks');
		} else {
			console.log('nope');
		}
	    
	};

	$scope.hoverOut = function(id, menu){
		$('.menuOverlay ul li')
		   	.removeClass('menuOverlay--notSelected')
		    .removeClass('menuOverlay--selected')
		    .removeClass('menuOverlay--selected-mainMenu')
		    .removeClass('menuOverlay--selected-secondMenu')
			.removeClass('menuOverlay--selected-subMenu');

		$('.menuOverlay---externalLinks li')
			.removeClass('menuOverlay--selected-externalLinks')
			.removeClass('menuOverlay--notSelected-externalLinks');
	};



});

/*
	$('menuOverlay---externalLinks li a')
		.mouseenter(function(e){
			console.log($(this));
		})
		.mouseleave(function(e){

		});
*/