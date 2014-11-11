$(document).ready(function(){

	function navigateToPage(pageName, title) {
	    /*var pageName = getPageName();*/
	    $.get('index.html', function (response) {
	        var markup = $("<div>" + response + "</div>"),
	            fragment = markup.find("section").html();
	        $("section").html(fragment).addClass(title+" opacity");
	    });
	}

	$("a[data-role='ajax']").click(function (e) {
		e.preventDefault();
	    if (Modernizr.history) {
	        $('.home .homeMenu li a').not(this).addClass('homeMenu_jsActive');
	        var thisPage =  $(this);
	        var thisSection = $(this).parents('section');
	        thisSection.removeClass('opacity');

	        window.setTimeout(function(){
	        	thisSection.removeClass();
	         	var pageName = thisPage.attr("href");
	         	var title = pageName.slice(0, -1);
	         	window.history.pushState(null, "", pageName);
	         	navigateToPage(pageName, title);
	        }, 300);
	    } else { console.log('no Modernizr History'); }
	});


	/*var _popStateEventCount = 0;*/
	$(window).on('popstate', function (e) {
	    this._popStateEventCount++;
	    /*if ($.browser.webkit && this._popStateEventCount == 1) {
	        return;
	    }*/
	    var oldPageName = window.location.pathname;
	    oldPageName = oldPageName.split("/");
	    oldPageName = oldPageName.filter(function(n){ return n != "" });

	    $('section').removeClass('opacity');
	    window.setTimeout(function(){
	    	$('section').removeClass();
	    	
	    	if(oldPageName.length > 1){
	    		var title = oldPageName[oldPageName.length - 1];
	    		var pageName = title+'/';
	    	} else {
	    		var pageName = '../';
	    		var title = 'home';
	    	}
	    	navigateToPage(pageName, title);
	    }, 300);
	});





/* ---------------- Home ---------------- */
	
	$('.home-btStartUx').hide().css({
		'-webkit-transform': 'translate(-50%,10px)',
		'-ms-transform': 'translate(-50%,10px)',
		'transform': 'translate(-50%,10px)'
	});
	var homeTitle = $('.home .homeTitle').html();
	var homeTitleContent = [
		$('.home .homeTitle p:first-of-type').text().split(""),
		$('.home .homeTitle h1').text().split(""),
		$('.home .homeTitle p:last-of-type').text().split(""),
		$('.home .homeTitle h2').text().split("")
	]
	function killHomeFunction(){
		w = 0;
		$('home .homeTitle h2 span').css({'color':'rgba(255,255,255,.8)'});
		$('.home .homeTitle').empty().html(homeTitle);
		$('.home-btStartUx').fadeIn(600);
		$('.home-btStartUx').queue(function(){
			$('.home-btStartUx').css({
				'-webkit-transform': 'translate(-50%,0)',
				'-ms-transform': 'translate(-50%,0)',
				'transform': 'translate(-50%,0)'
			}); 
		}).dequeue();
		return w;
	}
	$('.home .homeTitle')
		.empty()
		.delay(1000)
		.queue(function(){
			$(this).html('<p></p><h1></h1><p></p><h2></h2>');
			var x = 0;
			var w = 0;
			function lightMyWord(w, x){
				/*console.log(homeTitleContent[w]);*/
				function lightMyFire(w, x){
					var homeTitleAttr;
					switch(w) {
					    case 0:
					        homeTitleAttr = "p:first-of-type"; break;
					    case 1:
					        homeTitleAttr = "h1"; break;
					    case 2:
					        homeTitleAttr = "p:last-of-type"; break;
					    case 3:
					        homeTitleAttr = "h2"; break;
					}
					
					setTimeout(function(){
							if(homeTitleContent[w][x] == " "){
								x++;
								$('.home .homeTitle '+homeTitleAttr).append(' <span>'+homeTitleContent[w][x]+'</span>');
							} else {
								$('.home .homeTitle '+homeTitleAttr).append('<span>'+homeTitleContent[w][x]+'</span>');
							}
							$('.home .homeTitle '+homeTitleAttr+' span:last-of-type').css({
								'opacity':'0',
								'color': 'rgba(255,255,255,1)'
							});
							$
							if(w == 1){
								$('.home .homeTitle '+homeTitleAttr+' span:last-of-type')
									.css({
										'color': '#f4fd14'
									})
									.delay(200)
									.queue(function(){
										$(this).css({
											'opacity':'1'
										});		
									});					
							} else if(w == 3){
								$('.home .homeTitle '+homeTitleAttr+' span:last-of-type')
									.css({'opacity':'1','font-weight':'500'})
									.delay(200)
									.queue(function(){
										$(this).css({'color': 'rgba(255,255,255,1)'});		
									});					
							} else {
								$('.home .homeTitle '+homeTitleAttr+' span:last-of-type')
									.css({'opacity':'1'})
									.delay(200)
									.queue(function(){
										$(this).css({'color': 'rgba(255,255,255,.4)'});		
									});	
							}
							if(w == "0" && homeTitleContent[w][x] == "o"){ // Break after the "Hello"
								setTimeout(function(){
									x++;
									if(x < homeTitleContent[w].length){
										lightMyFire(w, x);
									} else {
										x = 0;
										w++;
										if(w < homeTitleContent.length){
											if(w == 1){
												w++;
												lightMyWord(w, x);
											} else {
												lightMyWord(w, x);
											}
										} else if(w >= homeTitleContent.length){
											killHomeFunction();
										}
									}
								},1000);
							} else {
								x++;
								if(x < homeTitleContent[w].length){
									lightMyFire(w, x);
								} else {
									x = 0;
									w++;
									if(w < homeTitleContent.length){
										lightMyWord(w, x);
									} else if(w >= homeTitleContent.length){
										killHomeFunction();
									}
								}
							}
					},70);	
				}
				lightMyFire(w, x);
			}
			lightMyWord(w, x);
		});
/* -------------------------------------- */



/* ---------------- Others ---------------- */
	/* Calcul de la taille du menu en fonction du nombre de li et de leur taille individuelle */

	/*var navMenuWidth = 0;
	for(var x = 1; x <= $('.works .mainNav li').size(); x++){
		navMenuWidth = navMenuWidth + $('.works .mainNav li:nth-child('+x+') a').width() + 26;
	}

	var homeMenuWidth = 0;
	for(var x = 1; x <= $('.home .homeMenu li').size(); x++){
		homeMenuWidth = homeMenuWidth + $('.home .homeMenu li:nth-child('+x+') a').width() + 26;
	}
	console.log(homeMenuWidth);
	$('.home .homeMenu').css('width',homeMenuWidth);
	$('.works .mainNav').css('width',navMenuWidth);*/
/* ---------------------------------------- */




});













