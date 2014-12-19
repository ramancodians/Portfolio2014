ninjApp.controller('menuController', function($scope, Page){



// ==================================== Hover on the Menu Header ==================================== //
	var In = false;
	var closeContent = $('.menuOverlay--close h5').html();
	function hoverHeader_reset(y,z,timer,closeLength){
		setTimeout(function(){
			if(z<=closeLength){
				$('.menuOverlay--close h5 span:nth-child('+z+')').css({
					'opacity':'0.1'
				});
				z++;
				hoverHeader_reset(y,z,timer,closeLength);
			} else {
				z=0;
				if(In == true){
					hoverHeader_color(y,z,timer,closeLength);	
				}
			}
		},timer);
	}
	function hoverHeader_color(y,z,timer,closeLength){
		setTimeout(function(){
			if(y<=closeLength && In == true){
				$('.menuOverlay--close h5 span:nth-child('+y+')').css({
					'opacity':'0.8'
				});
				y++;
				hoverHeader_color(y,z,timer,closeLength);
			} else {
				y=0;
				hoverHeader_reset(y,z,timer,closeLength);
			}			
		},timer);
	}
	

	$scope.hoverHeaderIn = function(){
		if(In == false){
			In = true;
			$('.menuOverlay--close h5').html(closeContent);
			var closeLength = closeContent.length;
			var closeArray = closeContent.split('');
			$('.menuOverlay--close h5').empty();
			for(var x=0; x<closeLength; x++){ 
				$('.menuOverlay--close h5').append('<span>'+closeArray[x]+'</span>');
			}
			var y = 0,
				z = 0,
				timer = 80;
			hoverHeader_color(y,z,timer,closeLength);
			return closeContent;
		}
	}
	$scope.hoverHeaderOut = function(){
		In = false;
		$('.menuOverlay--close h5').empty().html(closeContent);
	}
// ================================================================================================== //











// =================================== Hover on the Menu Elements =================================== //
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
// ================================================================================================== //










// ========================================= Close the Menu ========================================= //
	$scope.closeMenu = function(){
		$('.menuOverlay').fadeOut();
		$('.background').removeClass('overlay-open');
		$('.menuOverlay-contentscale').removeClass('open');
	}
// ================================================================================================== //







});