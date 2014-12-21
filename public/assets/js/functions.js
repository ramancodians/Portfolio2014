

// ========================================== Preloader - Triskel animation ========================================== //
window.preloaderAnimation = function(){
	var preloaderLength = $('.preloader h4').html().length;
	var preloaderArray = $('.preloader h4').html().split('');
	$('.preloader h4').empty();
	for(var x=0; x<preloaderLength; x++){ 
		$('.preloader h4').append('<span>'+preloaderArray[x]+'</span>');
	}
	var y = 0,
		z = 0,
		timer = 100;
	function preloaderAnimation_reset(y,z){
		setTimeout(function(){
			if(z<=preloaderLength){
				$('.preloader h4 span:nth-child('+z+')').css({
					'opacity':'0.2'
				});
				z++;
				preloaderAnimation_reset(y,z);
			} else {
				z=0;
				preloaderAnimation_color(y,z);	
			}
		},timer);
	}
	function preloaderAnimation_color(y,z){
		setTimeout(function(){
			if(y<=preloaderLength){
				$('.preloader h4 span:nth-child('+y+')').css({
					'opacity':'0.8'
				});
				y++;
				preloaderAnimation_color(y,z);
			} else {
				y=0;
				preloaderAnimation_reset(y,z);
			}			
		},timer);
	}
	preloaderAnimation_color(y,z);
}
// =================================================================================================================== //









// ======================================= Menu events on Menu Overlay opening ======================================= //
window.openMenu_events = function(){
	/*$('.background').addClass('overlay-open');*/
	$('.overlay').css('background', 'rgba(0,0,0,.4)');
	$('.menuOverlay').fadeIn();
	$('.menuOverlay-contentscale').addClass('open');

	function mainMenuElements(y){
		setTimeout(function(){
			if(y<=mainMenu){
				console.log('-mainMenuLinks Functions - '+y);
				$(".menuOverlay-mainMenu li:nth-child("+y+")").css({
					'-webkit-transform': 'translateY(0%)',
					'-moz-transform': 'translateY(0%)',
					'-ms-transform': 'translateY(0%)',
					'-o-transform': 'translateY(0%)',
					'transform': 'translateY(0%)',
					'opacity':'1'
				});
				y++;
				mainMenuElements(y);
			} else {
				y = 1;
				x++;
				openMenu_anim(x);
			}
		},timer);
	};
	function secondMenuElements(y){
		setTimeout(function(){
			if(y<=secondMenu){
				console.log('--secondMenu Functions - '+y);
				$(".menuOverlay-secondMenu .menuOverlay-secondMenu--elements:nth-child("+y+")").css({
					'-webkit-transform': 'translateY(0%)',
					'-moz-transform': 'translateY(0%)',
					'-ms-transform': 'translateY(0%)',
					'-o-transform': 'translateY(0%)',
					'transform': 'translateY(0%)',
					'opacity':'1'
				});
				y++;
				secondMenuElements(y);
			} else {
				y = 1;
				console.log('--secondMenu Functions ELSE - '+y);
				x++;
				openMenu_anim(2);
			}
		},timer);
	};
	function subMenuElements(y){
		setTimeout(function(){
			if(y<=subMenu){
				console.log('--subMenu Functions - '+y);
				$(".menuOverlay--subMenu li:nth-child("+y+")").css({
					'-webkit-transform': 'translateY(0%)',
					'-moz-transform': 'translateY(0%)',
					'-ms-transform': 'translateY(0%)',
					'-o-transform': 'translateY(0%)',
					'transform': 'translateY(0%)',
					'opacity':'1'
				});
				y++;
				subMenuElements(y);
			} else {
				y = 1;
				console.log('--subMenu Functions ELSE - '+y);
				x++;
				openMenu_anim(3);
			}
		},timer);
	};
	function externalMenuElements(y){
		setTimeout(function(){
			if(y<=externalMenu){
				console.log('---externalLinks Functions - '+y);
				$(".menuOverlay---externalLinks li:nth-child("+y+")").css({
					'-webkit-transform': 'translateY(0%)',
					'-moz-transform': 'translateY(0%)',
					'-ms-transform': 'translateY(0%)',
					'-o-transform': 'translateY(0%)',
					'transform': 'translateY(0%)',
					'opacity':'1'
				});
				y++;
				externalMenuElements(y);
			} else {
				y = 1;
				console.log('---externalLinks Functions ELSE - '+y);
				x++;
				openMenu_anim(4);
			}
		},timer);
	};
	
	var x = 0;
	var y = 1;
	var timer = 100;
	var mainMenu = $('.menuOverlay-mainMenu li').length;
	var secondMenu = $('.menuOverlay-secondMenu--elements').length;
	var subMenu = $('.menuOverlay--subMenu li').length;
	var externalMenu = $('.menuOverlay---externalLinks li').length;
	console.log('secondMenu: '+secondMenu);

	function openMenu_anim(x){
		setTimeout(function(){
			console.log('openMenu_anim, x: '+x);
			switch(x){
				case 0:
					$('.menuOverlay-header').css({'opacity':'1','top':'0'});
					x++;
					openMenu_anim(x);
					break;
				case 1:
					secondMenuElements(y);
					break;
				case 2:
					subMenuElements(y);
					break;
				case 3:
					externalMenuElements(y);
					break;
				case 4:
					mainMenuElements(y)
					break;
				default:
					console.log('Error dans le Switch case | x: '+x+' | y: '+y);
			}
		}, timer);
	}
	openMenu_anim(x);


}
// =================================================================================================================== //








// ======================================= Page events on Menu Overlay opening ======================================= //
window.openMenu_fadeOutElements = function(transiArray, page, x){
	var nbTransi =  $('.'+page+' .alphaTransi').size();

	if(x <= nbTransi){
		var thisTransi = '.alphaTransi:nth-child('+x+')';

		if($(thisTransi).hasClass('transiArray')){
			var thisTransiId = $(thisTransi).attr('id');

			// Property Objects in array to count them and use them with an easier way
				var propertiesKey = [];

				angular.forEach(transiArray[page][thisTransiId], function(value, key) {
					propertiesKey.push(key);
				});
				var nbProperties = propertiesKey.length;

			for(var y=0; y<nbProperties; y++){
				$(thisTransi)
					.css({
						'-webkit-transition': propertiesKey[y]+' '+transiArray[page][thisTransiId][propertiesKey[y]].easing+', opacity 0.2s ease-out',
						'-moz-transition': propertiesKey[y]+' '+transiArray[page][thisTransiId][propertiesKey[y]].easing+', opacity 0.2s ease-out',
						'-ms-transition': propertiesKey[y]+' '+transiArray[page][thisTransiId][propertiesKey[y]].easing+', opacity 0.2s ease-out',
						'-o-transition': propertiesKey[y]+' '+transiArray[page][thisTransiId][propertiesKey[y]].easing+', opacity 0.2s ease-out',
						'transition': propertiesKey[y]+' '+transiArray[page][thisTransiId][propertiesKey[y]].easing+', opacity 0.2s ease-out',
						'opacity': '0'
					})
					.css(propertiesKey[y], transiArray[page][thisTransiId][propertiesKey[y]].newValue);
			}

		} else {
			$('.alphaTransi:nth-child('+x+')')
				.css({
					'-webkit-transition': 'opacity 0.2s ease-out',
					'-moz-transition': 'opacity 0.2s ease-out',
					'-ms-transition': 'opacity 0.2s ease-out',
					'-o-transition': 'opacity 0.2s ease-out',
					'transition': 'opacity 0.2s ease-out',
					'opacity': '0'
				});
		}

		setTimeout(function(){
			x++;
			openMenu_fadeOutElements(transiArray, page, x);
		},200);

	} else {
			x = 1;
			openMenu_events();
	}

	return transiArray, page, x;
}
// =================================================================================================================== //









