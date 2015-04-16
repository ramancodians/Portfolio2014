

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
	/*window.mainMenuElements = function(y, openMenu){
		var mainMenu = $('.menuOverlay-mainMenu li').length;

		setTimeout(function(){
			if(y<=mainMenu){
				if(openMenu === false){
					TweenLite.to('.menuOverlay-mainMenu li:nth-child('+y+')', 0.2, {y: "0", opacity:"1", ease:Quad.easeOut});
				} else {
					TweenLite.to(".menuOverlay-mainMenu li:nth-child("+y+")", 0.2, {opacity:"0", ease:Quad.easeOut});
				}
				y++;
				mainMenuElements(y, openMenu);
			} else {
				y = 1;
				if(openMenu === false){ x = 3; }
				else { x = 1; }
				switchMenu_anim(x, openMenu);
			}
		},timer);
	};*/

	x = 0;
	var y = 1;
	var timer = 200;

	window.switchMenu_anim = function(x, openMenu){
		setTimeout(function(){
			if(openMenu === false){
				switch(x){
					case 0:
						TweenLite.to('.menuOverlay-header', 0.2, {top: '0', opacity:"1", ease:Quad.easeOut});
						x++; 
						switchMenu_anim(x, openMenu); break;
					case 1:
						TweenLite.to('.menuOverlay-footerMenu', 0.2, {bottom: '0', opacity:"1", ease:Quad.easeOut});
						x++; 
						switchMenu_anim(x, openMenu); break;
					case 2:
						TweenLite.to('.menuOverlay-secondMenu', 0.2, { bottom:'8%', opacity:"1" , ease:Quad.easeOut});
						x++; 
						switchMenu_anim(x, openMenu);
						break;
					case 3: 
						TweenLite.to('.menuOverlay-mainMenu', 0.2, {y:'0', opacity:"1" , ease:Quad.easeOut});
						x = 4;
						switchMenu_anim(x, openMenu);
						break;
					default:
						openMenu = true;
						x = 0;
				}
			} else if(openMenu === true) {
				switch(x){
					case 0:
						TweenLite.to('.menuOverlay-mainMenu', 0.2, {opacity:"0" , ease:Quad.easeOut});
						x++;
						switchMenu_anim(x, openMenu);
						break;
					case 1:
						TweenLite.to('.menuOverlay-secondMenu', 0.2, {bottom: "-5%",opacity:"0", ease:Quad.easeOut});
						x++;
						switchMenu_anim(x, openMenu);
						break;
					case 2:
						TweenLite.to('.menuOverlay-footerMenu', 0.2, {bottom: "-8%",opacity:"0", ease:Quad.easeOut});
						x++;
						switchMenu_anim(x, openMenu);
						break;
					case 3:
						TweenLite.to('.menuOverlay-header', 0.2, {top: "-15%",opacity:"0", ease:Quad.easeOut});
						x++;
						switchMenu_anim(x, openMenu);
						break;
					default:
						openMenu = false;
						x = 1;
						page = $('section').attr('class');
						page = page.replace('ng-scope','').replace(' ', '');
						
						TweenLite.to('.menuOverlay', 0.2, {opacity: "0", display:"none", ease:Quad.easeOut});
						$('.menuOverlay-contentscale').removeClass('open');
						setTimeout(function(){
							closeMenu_fadeInElements(page, x);
						}, 200);
					}
			} else if(openMenu === undefined){
				switch(x){
					case 0:
						TweenLite.to('.menuOverlay-mainMenu', 0.2, {opacity:"0" , ease:Quad.easeOut});
						x++;
						switchMenu_anim(x, openMenu);
						break;
					case 1:
						TweenLite.to('.menuOverlay-secondMenu', 0.2, {bottom: "-5%",opacity:"0", ease:Quad.easeOut});
						x++;
						switchMenu_anim(x, openMenu);
						break;
					case 2:
						TweenLite.to('.menuOverlay-footerMenu', 0.2, {bottom: "-8%",opacity:"0", ease:Quad.easeOut});
						x++;
						switchMenu_anim(x, openMenu);
						break;
					case 3:
						TweenLite.to('.menuOverlay-header', 0.2, {top: "-15%",opacity:"0", ease:Quad.easeOut});
						x++;
						switchMenu_anim(x, openMenu);
						break;
					default:
						openMenu = false;
						x = 0;
						page = $('section').attr('class');
						page = page.replace('ng-scope','').replace(' ', '');

						TweenLite.to('.menuOverlay', 0.2, {opacity: "0", onComplete:function(){
							TweenLite.to('menuOverlay', 0, {display:"none"});
						}});
						$('.menuOverlay-contentscale').removeClass('open');
				}
			} else {
				console.log('functions.js -> bug switchMenu_anim.openMenu');
			}
			
		}, timer);
	}


// =================================================================================================================== //








// ======================================= Page events on Menu Overlay opening ======================================= //
window.openMenu_fadeOutElements = function(page){
	TweenLite.to('.alphaTransi', 0.2, { opacity:"0", y:'10px', ease:Quad.easeOut, onComplete:function(){
		TweenLite.to('.menuOverlay', 0.2, {display: 'block', opacity: "1", ease:Quad.easeOut});
		/*$('.menuOverlay-contentscale').addClass('open');*/
		switchMenu_anim(x, openMenu);
		return page;
	}});
	var openMenu = false;
}
// =================================================================================================================== //







// ======================================= Page events on Menu Overlay closing ======================================= //
window.closeMenu_fadeInElements = function(page){
	TweenLite.to('.alphaTransi', 0.2, {opacity:"1", y:'0', ease:Quad.easeOut});
}
// =================================================================================================================== //









// ======================================= Page events on Direct Page Change ======================================= //
window.directLink_fadeOutElements = function(page){
	TweenLite.to('.alphaTransi', 0.2, { opacity:"0", y:'10px', ease:Quad.easeOut, onComplete:function(){
		Tweenlite.to('.preloader', 0.2, {opacity:"1", ease:Quart.easeOut});
	}});
	var openMenu = false;
}
// =================================================================================================================== //


















