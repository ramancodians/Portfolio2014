

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
				TweenLite.to('.preloader h4 span:nth-child('+z+')', 0.2, {opacity:"0.2", ease:Quad.easeOut});
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
				TweenLite.to('.preloader h4 span:nth-child('+y+')', 0.2, {opacity:"0.8", ease:Quad.easeOut});
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
				if(openMenu === false){
					TweenLite.to('.menuOverlay-mainMenu li:nth-child('+y+')', 0.2, {y: "0", opacity:"1", ease:Quad.easeOut});
				} else {
					TweenLite.to(".menuOverlay-mainMenu li:nth-child("+y+")", 0.2, {opacity:"0", ease:Quad.easeOut});
				}
				y++;
				mainMenuElements(transiArray, y, openMenu);
			} else {
				y = 1;
				if(openMenu === false){ x = 3; }
				else { x = 1; }
				switchMenu_anim(transiArray, x, openMenu);
			}
		},timer);
	};

	x = 0;
	var y = 1;
	var timer = 70;

	window.switchMenu_anim = function(transiArray, x, openMenu){
		setTimeout(function(){
			if(openMenu === false){
				switch(x){
					case 0:
						TweenLite.to('.menuOverlay-header', 0.2, {top: "0", opacity:"1", ease:Quad.easeOut});
						x++; 
						switchMenu_anim(transiArray, x, openMenu); break;
					case 1:
						TweenLite.to('.menuOverlay-secondMenu', 0.2, {bottom: "0", opacity:"1" , ease:Quad.easeOut, onComplete:function(){
							x++; 
							switchMenu_anim(transiArray, x, openMenu);
						}});
						break;
					case 2: mainMenuElements(transiArray, y, openMenu); break;
					default:
						openMenu = true;
						x = 0;
				}
			} else if(openMenu === true) {
				switch(x){
					case 0: mainMenuElements(transiArray, y, openMenu); break;
					case 1:
						TweenLite.to('.menuOverlay-secondMenu', 0.2, {bottom: "-5%",opacity:"0", ease:Quad.easeOut});
						x++;
						switchMenu_anim(transiArray, x, openMenu);
						break;
					case 2:
						TweenLite.to('.menuOverlay-header', 0.2, {top: "-10%",opacity:"0", ease:Quad.easeOut, onComplete:function(){
							x++;
							switchMenu_anim(transiArray, x, openMenu);
						}});
						break;
					default:
						openMenu = false;
						x = 1;
						page = $('section').attr('class');
						page = page.replace('ng-scope','').replace(' ', '');
						
						/*
						var backgroundAlpha;

						switch(page){
							case 'home': backgroundAlpha = "rgba(0,0,0,.8)"; break;
							case 'works': backgroundAlpha = "rgba(0,0,0,.6)"; break;
						}
						
						TweenLite.to('.overlay', 0.2, {background: backgroundAlpha, ease:Quad.easeOut});*/

						TweenLite.to('.menuOverlay', 0.2, {opacity: "0", display:"none", ease:Quad.easeOut});
						$('.menuOverlay-contentscale').removeClass('open');
						setTimeout(function(){
							closeMenu_fadeInElements(transiArray, page, x);
						}, 200);
					}
			} else if(openMenu === undefined){
				switch(x){
					case 0: mainMenuElements(transiArray, y, openMenu); break;
					case 1:
						TweenLite.to('.menuOverlay-secondMenu', 0.2, {bottom: "-5%", opacity:"0", ease:Quad.easeOut});
						x++; 
						switchMenu_anim(transiArray, x, openMenu); break;
					case 2:
						TweenLite.to('.menuOverlay-header', 0.2, {top: "-10%", opacity:"0", ease:Quad.easeOut, onComplete:function(){
							x++;
							switchMenu_anim(transiArray, x, openMenu);
						}});
						break;
					default:
						openMenu = false;
						x = 0;
						page = $('section').attr('class');
						page = page.replace('ng-scope','').replace(' ', '');
						
						/*var backgroundAlpha;

						switch(page){
							case 'home': backgroundAlpha = "rgba(0,0,0,.8)"; break;
							case 'works': backgroundAlpha = "rgba(0,0,0,.6)"; break;
						}
						
						TweenLite.to('.overlay', 0.2, {background: backgroundAlpha, ease:Quad.easeOut});*/
						TweenLite.to('.menuOverlay', 0.2, {opacity: "0", display:"none"});
						$('.menuOverlay-contentscale').removeClass('open');
				}
			} else {
				console.log('functions.js -> bug switchMenu_anim.openMenu');
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
			var propertiesNewValue = transiArray[page][thisTransiId]['top'].newValue;
			TweenLite.to(thisTransi, 0.2, { opacity:"0", y: propertiesNewValue , ease:Quad.easeOut});

		} else {
			TweenLite.to('.alphaTransi:nth-child('+x+')', 0.2, { opacity:"0"});
		}
		setTimeout(function(){
			x++;
			openMenu_fadeOutElements(transiArray, page, x);
		},200);

	} else {
		x = 0;
		var openMenu = false;

		/*TweenLite.to('.overlay', 0.2, {background: "rgba(0, 0, 0,0.8)"});*/

		TweenLite.to('.menuOverlay', 0.2, {display:"block", opacity: "1"});
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
			var propertiesOldValue = transiArray[page][thisTransiId]['top'].oldValue;
			TweenLite.to(thisTransi, 0.2, { opacity:"1", y: propertiesOldValue, ease:Quad.easeOut});
		} else {
			TweenLite.to('.alphaTransi:nth-child('+x+')', 0.4, { opacity:"1"});
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















