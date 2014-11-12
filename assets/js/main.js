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

var alexisNbLetters = $('.alexis').size(),
    y = 1,
    z = 1;

for(var x=1; x<= alexisNbLetters; x++){
  $('.alexis:nth-child('+x+')').css({
    'stroke-dasharray': '1000',
    'stroke-dashoffset': '1000'
  });  
}


function alexisAppears_reset(y, z){
  setTimeout(function(){
    if(z <= alexisNbLetters){
      $('.alexis:nth-child('+z+')').css({
        'fill':'rgba(0,0,0,0)'
      }).queue(function(){
        $(this).css({
           'animation': 'dashBack 1s ease-out forwards'
         }).dequeue();
      });
      
      z++;
      alexisAppears_reset(y, z);
    } else {
      setTimeout(function(){
        z = 1;
        alexisAppears(y, z);
      },1000);
    }
  },150);
}



function alexisAppears(y, z){
  setTimeout(function(){
    if(y <= alexisNbLetters){
      $('.alexis:nth-child('+y+')').css({
        'animation': 'dash 3s ease-out forwards'
      }).delay(400).queue(function(){
        $(this).css({
           'fill':'#f4fd14'
        }).dequeue();
      });
    
      y++;
      alexisAppears(y, z);
    } else {
      setTimeout(function(){
        y = 1;
        alexisAppears_reset(y, z);
      },3000);
    }
  },150);
}
alexisAppears(y, z);



	// Tux image is from creative commons, I didn't create it!

/*	var s = Snap("#svgout"); 
	var g = s.group();
	var tux = Snap.load("Dreaming_tux.svg", function ( loadedFragment ) { 
							g.append( loadedFragment );	
							g.hover( hoverover, hoverout );
							g.text(300,100, 'hover over me');
						} );  

	var hoverover = function() { g.animate({ transform: 's2r45,150,150' }, 1000, mina.bounce ) };
	var hoverout = function() { g.animate({ transform: 's1r0,150,150' }, 1000, mina.bounce ) };*/




/*
	$('.home .homeTitle h1').load('assets/svg/svgdefs.svg',function(e){
		var homeAlexisPath = [];
		var al = 0;
		var homeAlexisContent;

		$('.home .homeTitle h1 .alexis').each(function(){
			homeAlexisPath[al] = $(this).attr('d');
			al++;
		});
		for(var x = 0; x < al; x++){
			homeAlexisContent += '<path class="alexis" d="'+homeAlexisPath[x]+'" />';
		}
		
		$('.home .homeTitle h1 svg').empty().append(homeAlexisContent);

		var alexisNbLetters = $('#homeAlexis .alexis').size(),
		    y = 1,
		    z = 1;*/

		/*for(var x=1; x<= alexisNbLetters; x++){
		  $('#homeAlexis .alexis:nth-child('+x+')').css({
		    'stroke-dasharray': '1000',
		    'stroke-dashoffset': '1000'
		  });  
		}*/


		
		/*alexisAppears();*/

/*	});*/
	


	
		




		
		
	


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













