
ninjApp.controller('homeController', ['$scope', function($scope, Page){

	$scope.Page.setTitle('Alexis Bertin | Front-End Developer');

	/*TweenLite.to('.overlay', 0.2, { background: "rgba(40,40,48,0.4)" });*/
	TweenLite.to('.overlay', 0.2, { background: "rgba(0,0,0,0.3)" });
	TweenLite.to('.background', 0.2, {opacity: "1", onComplete:function(){
		setTimeout(function(){
			TweenLite.to('.preloader', 0.2, { opacity:"0", ease:Quart.easeOut, onComplete:function(){
				TweenLite.to('.preloader', 0, { display: "none"});
				TweenLite.to('.alphaTransi', 0.4, { opacity: "1", ease:Quart.easeOut });
			}});
		},400);
	}});


/* ---------------------- Home "Alexis" SVG animation ------------------------ */

			function alexisAppears_reset(y, z, alexisNbLetters){
			  	setTimeout(function(){
				    if(z <= alexisNbLetters){
					    $('.alexis:nth-child('+z+')')
					    	.css({'fill':'rgba(0,0,0,0)'})
					    	.queue(function(){
					        	$(this)
					        		.css({
					        			'-webkit-animation': 'dashBack 1s ease-out forwards',
					        			'animation': 'dashBack 1s ease-out forwards'
					        		})
					        		.dequeue();
					    	});
				      
				      	z++;
				      	alexisAppears_reset(y, z, alexisNbLetters);
				    } else {
				      	setTimeout(function(){
					        z = 1;
					        alexisAppears(y, z, alexisNbLetters);
					    },1000);
				    }
			 	},150);
			}


			function alexisAppears(y, z, alexisNbLetters){
				setTimeout(function(){
				    if(y <= alexisNbLetters){
				    	$('.alexis:nth-child('+y+')')
				    		.css({
				    			'-webkit-animation': 'dash 2s ease-out forwards',
				    			'animation': 'dash 2s ease-out forwards'
				    		})
				      		.delay(600)
				      		.queue(function(){
						        $(this)
						        	.css({'fill':'#F1C40F'})
						        	.dequeue();
				      		});
				      	y++;
				      	alexisAppears(y, z, alexisNbLetters);
				    } else {
				      	setTimeout(function(){
				        	y = 1;
				        	alexisAppears_reset(y, z, alexisNbLetters);
				      	},3000);
				    }
				},150);
			}
		

			

		// Ending function, reset the div
		function killHomeFunction(){
			w = 0;
			$('home .home-title h2 span').css({'color':'rgba(255,255,255,1)'});
			var homeTitle = [
				'p:first-of-type',
				'p:last-of-type',
				'h2'
			];

			for(var x = 0; x < homeTitle.length; x++){
				$('.home .home-title '+homeTitle[x])
					.empty()
					.html(homeTitleContent[x]);
			}
			$('.home-btStartUx').fadeIn(600);
			setTimeout(function(){
				$('#home-tips').css('opacity','1');
			}, 600);
			return w;
		}

		var homeTitle = [
			'p:first-of-type',
			'p:last-of-type',
			'h2'
		];
		var homeTitleContent = [
			$('.home .home-title p:first-of-type').html(),
			$('.home .home-title p:last-of-type').html(),
			$('.home .home-title h2').html()
		];
		var homeTitleContentSplit = [
			$('.home .home-title p:first-of-type').text().split(""),
			$('.home .home-title p:last-of-type').text().split(""),
			$('.home .home-title h2').text().split("")
		];
		$.get('assets/svg/svgHomeAlexis.svg', function(data){
			// inject the defs we need from the SVG doc into main file.
			$('.home .home-title svg').empty().html($(data).find('.alexis'));
			var alexisNbLetters = $('.alexis').size();
		});

		



		function homeInit(){
			$('.home-btStartUx').hide();

			for(var x = 0; x < homeTitle.length; x++){
				$('.home .home-title '+homeTitle[x]).empty();
			}
			for(var x = 0; x < homeTitle.length; x++){
				for(var y = 0; y < homeTitleContentSplit[x].length; y++){
					$('.home .home-title '+homeTitle[x]).append('<span>'+homeTitleContentSplit[x][y]+'</span>');
				}
			}
			$('.home .home-title span').css('opacity','0');

			$('.home .home-title').delay(1000)
				.queue(function(){
					var x = 0,
						w = 0,
						alexisNbLetters = $('.alexis').size(),
						y = 1,
						z = 1;
					function lightMyWord(w, x){
				                         
							function lightMyFire(w, x){
								var homeTitleAttr;
								switch(w) {
								    case 0:
								        homeTitleAttr = "p:first-of-type"; break;
								    case 1:
								        homeTitleAttr = "p:last-of-type"; break;
								    case 2:
								        homeTitleAttr = "h2"; break;
								}
								
								setTimeout(function(){
										if(homeTitleContentSplit[w][x] == " "){ x++; }
										$('.home .home-title '+homeTitleAttr+' span:nth-child('+(x+1)+')').css({
											'opacity':'0',
											'color': 'rgba(255,255,255,1)'
										});
										if(w == 2){
											$('.home .home-title '+homeTitleAttr+' span:nth-child('+(x+1)+')')
												.css({'opacity':'1','font-weight':'300'})
												.delay(200)
												.queue(function(){
													$(this).css({'color': 'rgba(255,255,255,1)'});		
												});					
										} else {
											$('.home .home-title '+homeTitleAttr+' span:nth-child('+(x+1)+')')
												.css({'opacity':'1'})
												.delay(200)
												.queue(function(){
													$(this).css({'color': 'rgba(255,255,255,0.4)'});		
												});	
										}
										if((w == "0") && (homeTitleContentSplit[w][x] == "o")) { // Break after the "Hello"
											setTimeout(function(){
												x++;
												if(x < homeTitleContentSplit[w].length){
													lightMyFire(w, x);
												} else {
													x = 0;
													w++;
													if(w < homeTitleContentSplit.length){
														if(w == 1){
															w++;
															lightMyWord(w, x);
														} else {
															lightMyWord(w, x);
														}
													} else if(w >= homeTitleContentSplit.length){
														killHomeFunction();
													}
												}
											},1000);
										} else if((w == "0") && (homeTitleContentSplit[w][x] == "m")){
						// "ALEXIS" fadein =========================
											alexisAppears(y, z, alexisNbLetters);
						// =========================================
											x++;
											if(x < homeTitleContentSplit[w].length){
												lightMyFire(w, x);
											} else {
												x = 0;
												w++;
												if(w < homeTitleContentSplit.length){
													lightMyWord(w, x);
												} else if(w >= homeTitleContentSplit.length){
													killHomeFunction();
												}
											}
										} else {
											x++;
											if(x < homeTitleContentSplit[w].length){
												lightMyFire(w, x);
											} else {
												x = 0;
												w++;
												if(w < homeTitleContentSplit.length){
													lightMyWord(w, x);
												} else if(w >= homeTitleContentSplit.length){
													killHomeFunction();
												}
											}
										}
								},50);	
							}
							lightMyFire(w, x);
					}
					lightMyWord(w, x);
				});
		
		};
	
	/* --------------------------------------------------------------------------- */


	if (document.documentElement.clientWidth > 1100) {
		homeInit();
	} else {
		killHomeFunction();
	}

	window.onresize = function(){
		if (document.documentElement.clientWidth > 1100) {
			homeInit();
		} else {
			/*$('.home-title p span').css('display','none');*/
			killHomeFunction();
		}
	} 

}]);