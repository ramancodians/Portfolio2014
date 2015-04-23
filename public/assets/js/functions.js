// ======================================= Menu events on Menu Overlay opening ======================================= //
	var timer = 100;

	window.switchMenu_anim = function(openMenu){
		var mainMenuLi = $('.menuOverlay-mainMenu > li').size();
			if(openMenu === false){
				TweenLite.to('.menuOverlay-headerMenu', 0.2, {y:'0', opacity:"1", ease:Quad.easeOut});
				$('.bt-menu').addClass('bt-menu-open');
				setTimeout(function(){
					var x = 1;
					function openMenu_false(x){
						if(x <= mainMenuLi){
							setTimeout(function(){
								TweenLite.to($('.menuOverlay-mainMenu li:nth-child('+x+')'), 0.2, {opacity:'1', ease:Quad.easeOut});
								x++;
								openMenu_false(x);
							},timer);
						}
					}
					openMenu_false(x);
				},timer);
				openMenu = true;

			} else if(openMenu === true) {
				TweenLite.to($('.menuOverlay-mainMenu li'), 0.2, {opacity:'0', ease:Quad.easeOut});
				TweenLite.to('.menuOverlay-headerMenu', 0.2, {y:'-200', opacity:'0', ease:Quad.easeOut});
				$('.bt-menu').removeClass('bt-menu-open');
				openMenu = false;
				page = $('section').attr('class');
				page = page.replace('ng-scope','').replace(' ', '');
				
				TweenLite.to('.menuOverlay', 0.2, {opacity: "0", ease:Quad.easeOut, onComplete:function(){
					TweenLite.to('.menuOverlay', 0, {display:"none"});
					setTimeout(function(){
						closeMenu_fadeInElements(page);
					}, 200);
				}});

			} else if(openMenu === undefined){
				TweenLite.to($('.menuOverlay-mainMenu li'), 0.2, {opacity:'0', ease:Quad.easeOut});
				TweenLite.to('.menuOverlay-headerMenu', 0.2, {y:'-200', opacity:'0', ease:Quad.easeOut});
				$('.bt-menu').removeClass('bt-menu-open');
				openMenu = false;
				page = $('section').attr('class');
				page = page.replace('ng-scope','').replace(' ', '');
			} else {
				console.log('functions.js -> bug switchMenu_anim.openMenu');
			}
	};


// =================================================================================================================== //








// ======================================= Page events on Menu Overlay opening ======================================= //
window.openMenu_fadeOutElements = function(page){
	if(page === 'home'){
		TweenLite.to('.alphaTransi', 0.2, { opacity:"0", ease:Quad.easeOut, onComplete:function(){
			TweenLite.to('.menuOverlay', 0.2, {display: 'block', opacity: "1", ease:Quad.easeOut});
			switchMenu_anim(openMenu);
		}});
	} else {
		TweenLite.to('.alphaTransi', 0.2, { opacity:"0", y:'10px', ease:Quad.easeOut, onComplete:function(){
			TweenLite.to('.menuOverlay', 0.2, {display: 'block', opacity: "1", ease:Quad.easeOut});
			switchMenu_anim(openMenu);
		}});
	}
	var openMenu = false;
};
// =================================================================================================================== //





// ======================================= Page events on Menu Overlay closing ======================================= //
window.closeMenu_fadeInElements = function(page){
	if(page === 'home'){
		TweenLite.to('.alphaTransi', 0.2, {opacity:"1", ease:Quad.easeOut});
	} else {
		TweenLite.to('.alphaTransi', 0.2, {opacity:"1", y:'0', ease:Quad.easeOut});
	}
};
// =================================================================================================================== //
















