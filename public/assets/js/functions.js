

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
	window.mainMenuElements = function(transiArray, y, openMenu){
		var mainMenu = $('.menuOverlay-mainMenu li').length;

		setTimeout(function(){
			if(y<=mainMenu){
				if(openMenu == false){
					$(".menuOverlay-mainMenu li:nth-child("+y+")").css({
						'-webkit-transform': 'translateY(0%)',
						'-moz-transform': 'translateY(0%)',
						'-ms-transform': 'translateY(0%)',
						'-o-transform': 'translateY(0%)',
						'transform': 'translateY(0%)',
						'opacity':'1'
					});
				} else {
					$(".menuOverlay-mainMenu li:nth-child("+y+")").css({
						'opacity':'0'
					});
				}
				y++;
				mainMenuElements(transiArray, y, openMenu);
			} else {
				y = 1;
				x++;
				switchMenu_anim(transiArray, x, openMenu);
			}
		},timer);
	};

	window.secondMenuElements = function(transiArray, y, openMenu){
		setTimeout(function(){
			if(openMenu == false){
				$(".menuOverlay-secondMenu").css({
					'-webkit-transform': 'translateY(0%)',
					'-moz-transform': 'translateY(0%)',
					'-ms-transform': 'translateY(0%)',
					'-o-transform': 'translateY(0%)',
					'transform': 'translateY(0%)',
					'opacity':'1'
				});
			} else {
				$(".menuOverlay-secondMenu").css({
					'-webkit-transform': 'translateY(100%)',
					'-moz-transform': 'translateY(100%)',
					'-ms-transform': 'translateY(100%)',
					'-o-transform': 'translateY(100%)',
					'transform': 'translateY(100%)',
					'opacity':'0'
				});
			}
			x++;
			switchMenu_anim(transiArray, 2, openMenu);
		},timer);
	};

	var x = 0;
	var y = 1;
	var timer = 50;

	window.switchMenu_anim = function(transiArray, x, openMenu){
		setTimeout(function(){
			if(openMenu == false){
				switch(x){
					case 0:
						$('.menuOverlay-header').css({'opacity':'1','top':'0'});
						x++; 
						switchMenu_anim(transiArray, x, openMenu); break;
					case 1: secondMenuElements(transiArray, y, openMenu); break;
					case 2: mainMenuElements(transiArray, y, openMenu); break;
					default:
						openMenu = true;
						x = 0;
				}
			} else {
				switch(x){
					case 0: mainMenuElements(transiArray, y, openMenu); break;
					case 1: secondMenuElements(transiArray, y, openMenu); break;
					case 2:
						$('.menuOverlay-header').css({'opacity':'0','top':'-10%'});
						x++;
						switchMenu_anim(transiArray, x, openMenu);
						break;
					default:
						openMenu = false;
						x = 0;
						$('.overlay').css('background', 'rgba(0,0,0,0)');
						$('.menuOverlay').fadeOut();
						$('.menuOverlay-contentscale').removeClass('open');
						setTimeout(function(){
							var x = 1;
							page = $('section').attr('class');
							page = page.replace('ng-scope','').replace(' ', '');
							closeMenu_fadeInElements(transiArray, page, x);
						}, 200);
				}	
			}
		}, timer);
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
		x = 0;
		var openMenu = false;

		$('.overlay').css('background', 'rgba(0,0,0,.4)');
		$('.menuOverlay').fadeIn();
		$('.menuOverlay-contentscale').addClass('open');
		
		switchMenu_anim(transiArray, x, openMenu);
	}

	return transiArray, page, x;
}
// =================================================================================================================== //









// ======================================= Page events on Menu Overlay closing ======================================= //
window.closeMenu_fadeInElements = function(transiArray, page, x){
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
						'opacity': '1'
					})
					.css(propertiesKey[y], transiArray[page][thisTransiId][propertiesKey[y]].oldValue);
			}

		} else {
			$('.alphaTransi:nth-child('+x+')')
				.css({
					'-webkit-transition': 'opacity 0.2s ease-out',
					'-moz-transition': 'opacity 0.2s ease-out',
					'-ms-transition': 'opacity 0.2s ease-out',
					'-o-transition': 'opacity 0.2s ease-out',
					'transition': 'opacity 0.2s ease-out',
					'opacity': '1'
				});
		}

		setTimeout(function(){
			x++;
			closeMenu_fadeInElements(transiArray, page, x);
		},200);

	} else {
			/*x = 1;
			openMenu_events();*/
	}

	return transiArray, page, x;
}
// =================================================================================================================== //











// =================================================== Switch Page =================================================== //




// =================================================================================================================== //





