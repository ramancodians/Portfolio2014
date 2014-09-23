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

	var homeTitleContent = [
		$('.home .homeTitle p:first-of-type').text().split(""),
		$('.home .homeTitle h1').text().split(""),
		$('.home .homeTitle p:last-of-type').text().split(""),
		$('.home .homeTitle h2').text().split("")
	];


	function killHomeFunction(){
		w = 0;
		console.log('over');
		setTimeout(function(){
			$('home .homeTitle h2 span').css({'color':'rgba(255,255,255,.8)'});
		},500);
		return w;
	}




	$('.home .homeTitle')
		.empty()
		.delay(1000)
		.queue(function(){
			$(this).html('<p></p><h1>Alexis</h1><p></p><h2></h2>');
			
			var x = 0;
			var w = 0;
			function lightMyWord(w){
				/*console.log(homeTitleContent[w]);*/
				function lightMyFire(w){
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
								'-webkit-transition': 'opacity .4s ease-out, color .4s ease-out',
								'-moz-transition': 'opacity .4s ease-out, color .4s ease-out',
								'-ms-transition': 'opacity .4s ease-out, color .4s ease-out',
								'-o-transition': 'opacity .4s ease-out, color .4s ease-out',
								'transition': 'opacity .4s ease-out, color .4s ease-out',
								'color': 'rgba(255,255,255,1)'
							});
							
							$('.home .homeTitle '+homeTitleAttr+' span:last-of-type')
								.css({'opacity':'1'})
								.delay(200)
								.queue(function(){
									$(this).css({'color': 'rgba(255,255,255,.4)'});	
								});					
							
							if(w == "0" && homeTitleContent[w][x] == "o"){ // Break after the "Hello"
								setTimeout(function(){
									x++;
									if(x < homeTitleContent[w].length){
										lightMyFire(w);
									} else {
										x = 0;
										w++;
										if(w < homeTitleContent.length){
											lightMyWord(w);
										} else if(w >= homeTitleContent.length){
											killHomeFunction();
										}
									}
								},2000);
							} else {
								x++;
								if(x < homeTitleContent[w].length){
									lightMyFire(w);
								} else {
									x = 0;
									w++;
									if(w < homeTitleContent.length){
										if(w == 1){
											w++;
											lightMyWord(w);
										} else {
											lightMyWord(w);
										}
									} else if(w >= homeTitleContent.length){
										killHomeFunction();
									}
								}
							}
					},100);	
				}
				lightMyFire(w);
				
			}
			lightMyWord(w);
		});
/* -------------------------------------- */



/* ---------------- Others ---------------- */
	var navMenuWidth = 0;
	for(var x = 1; x <= $('.works .mainNav li').size(); x++){
		navMenuWidth = navMenuWidth + $('.works .mainNav li:nth-child('+x+') a').width() + 26;
	}

	var homeMenuWidth = 0;
	for(var x = 1; x <= $('.home .homeMenu li').size(); x++){
		homeMenuWidth = homeMenuWidth + $('.home .homeMenu li:nth-child('+x+') a').width() + 26;
	}

	$('.home .homeMenu').css('width',homeMenuWidth);
	$('.works .mainNav').css('width',navMenuWidth);
/* ---------------------------------------- */




});













