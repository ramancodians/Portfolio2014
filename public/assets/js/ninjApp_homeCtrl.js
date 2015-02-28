


ninjApp.controller('homeController', function($scope, Page){

	Page.setTitle('Alexis Bertin | Front-End Developer');

	TweenLite.to('.overlay', 0.2, {background: "rgba(0,0,0,0)"});
	TweenLite.to('.background', 0.2, {opacity: "1"});

	if (document.documentElement.clientWidth > 1100) {




/* ---------------------- Home "Alexis" SVG animation ------------------------ */
			$.get('assets/svg/svgdefs.svg', function(data){
				// inject the defs we need from the SVG doc into main file.
				

				$('.home .home-title svg').empty().html($(data).find('#homeAlexis .alexis'));
				var alexisNbLetters = $('.alexis').size();

				$('.alexis').css({
					'stroke-dasharray': '1000',
					'stroke-dashoffset': '1000'
				}); 
			});

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
				    			'-webkit-animation': 'dash 3s ease-out forwards',
				    			'animation': 'dash 3s ease-out forwards'
				    		})
				      		.delay(400)
				      		.queue(function(){
						        $(this)
						        	.css({'fill':'#F9E30B'})
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
		

			$('.home-btStartUx').hide();


			var homeTitle = [
				'p:first-of-type',
				'p:last-of-type',
				'h2'
			]
			var homeTitleContent = [
				$('.home .home-title p:first-of-type').html(),
				$('.home .home-title p:last-of-type').html(),
				$('.home .home-title h2').html()
			]
			var homeTitleContentSplit = [
				$('.home .home-title p:first-of-type').text().split(""),
				$('.home .home-title p:last-of-type').text().split(""),
				$('.home .home-title h2').text().split("")
			]

			// Ending function, reset the div
			function killHomeFunction(){
				w = 0;
				$('home .home-title h2 span').css({'color':'rgba(255,255,255,1)'});

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



	

			for(var x = 0; x < homeTitle.length; x++){
				$('.home .home-title '+homeTitle[x]).empty();
			}
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
										if(homeTitleContentSplit[w][x] == " "){
											x++;
											$('.home .home-title '+homeTitleAttr).append(' <span>'+homeTitleContentSplit[w][x]+'</span>');
										} else {
											$('.home .home-title '+homeTitleAttr).append('<span>'+homeTitleContentSplit[w][x]+'</span>');
										}
										$('.home .home-title '+homeTitleAttr+' span:last-of-type').css({
											'opacity':'0',
											'color': 'rgba(255,255,255,1)'
										});
										if(w == 2){
											$('.home .home-title '+homeTitleAttr+' span:last-of-type')
												.css({'opacity':'1','font-weight':'500'})
												.delay(200)
												.queue(function(){
													$(this).css({'color': 'rgba(255,255,255,1)'});		
												});					
										} else {
											$('.home .home-title '+homeTitleAttr+' span:last-of-type')
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
											x = 0;
											w++;
											if(w < homeTitleContentSplit.length){
												setTimeout(function(){ lightMyWord(w, x); },800);
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
		
	
	/* --------------------------------------------------------------------------- */

	
	} else {
		$('.home-title p span').css('display','none');
	}

});
