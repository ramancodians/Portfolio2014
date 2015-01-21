ninjApp.controller('menuController', function($scope, Page, transiArray){


if (document.documentElement.clientWidth > 900) {


	// ==================================== Hover on the Menu Header ==================================== //
		var In = false;
		var closeContent = $('.menuOverlay--close h5').html();
		function hoverHeader_reset(y,z,timer,closeLength){
			setTimeout(function(){
				if(z<=closeLength){
					$('.menuOverlay--close h5 span:nth-child('+z+')').velocity({
						'opacity':'0.2'
					});
					z++;
					hoverHeader_reset(y,z,timer,closeLength);
				} else {
					z=0;
					hoverHeader_color(y,z,timer,closeLength);	
				}
			},timer);
		}
		function hoverHeader_color(y,z,timer,closeLength){
			setTimeout(function(){
				if(y<=closeLength){
					$('.menuOverlay--close h5 span:nth-child('+y+')').velocity({
						'opacity':'1'
					});
					y++;
					hoverHeader_color(y,z,timer,closeLength);
				} else {
					y=0;
					hoverHeader_reset(y,z,timer,closeLength);
				}			
			},timer);
		}
		
				$('.menuOverlay--close h5').html(closeContent);
				var closeLength = closeContent.length;
				var closeArray = closeContent.split('');
				$('.menuOverlay--close h5').empty();
				for(var x=0; x<closeLength; x++){ 
					$('.menuOverlay--close h5').append('<span>'+closeArray[x]+'</span>');
				}
				var y = 0,
					z = 0,
					timer = 100;
				hoverHeader_color(y,z,timer,closeLength);
		
		

	// ================================================================================================== //











	// =================================== Hover on the Menu Elements =================================== //
		$scope.hoverIn = function(id, menu){
			/*$('.menuOverlay ul li').addClass('menuOverlay--notSelected');*/
			/*$('.menuOverlay---externalLinks li').addClass('menuOverlay--notSelected-externalLinks');*/

			if(menu == "mainMenu"){
				$('.menuOverlay-mainMenu li:nth-child('+id+')')
					.addClass('menuOverlay--selected-mainMenu');
					/*.removeClass('menuOverlay--notSelected');*/
			} else if(menu == "secondMenu"){
				$('.menuOverlay-secondMenu > li:nth-child('+id+')')
					.addClass('menuOverlay--selected')
					.addClass('menuOverlay--selected-secondMenu');
					/*.removeClass('menuOverlay--notSelected');*/
			} else if(menu == "subMenu"){
				$('.menuOverlay--subMenu > li:nth-child('+id+')')
					.addClass('menuOverlay--selected')
					.addClass('menuOverlay--selected-subMenu');
					/*.removeClass('menuOverlay--notSelected');*/
			} else if(menu == "externalLinks"){
				$('.menuOverlay---externalLinks li:nth-child('+id+')')
					.addClass('menuOverlay--selected')
					.addClass('menuOverlay--selected-externalLinks');
					/*.removeClass('menuOverlay--notSelected-externalLinks')*/
			}
		};

		$scope.hoverOut = function(id, menu){
			$('.menuOverlay ul li')
			    .removeClass('menuOverlay--selected')
			    .removeClass('menuOverlay--selected-mainMenu')
			    .removeClass('menuOverlay--selected-secondMenu')
				.removeClass('menuOverlay--selected-subMenu');
				/*.removeClass('menuOverlay--notSelected');*/
			$('.menuOverlay---externalLinks li')
				.removeClass('menuOverlay--selected-externalLinks');
				/*.removeClass('menuOverlay--notSelected-externalLinks');*/
		};
	// ================================================================================================== //





}




});