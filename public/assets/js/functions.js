

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
		},100);

	} else {
		/*setTimeout(function(){*/
			x = 1;
			$('.background').addClass('overlay-open');
			$('.menuOverlay').fadeIn();
			$('.menuOverlay-contentscale').addClass('open');
			
		/*},100);*/
	}
}


// =================================================================================================================== //









