$(document).ready(function(){

	function getPageName() {
	    var pathName = window.location.pathname,
	        pageName = "";

	    if (pathName.indexOf("/") != -1) {
	        pathNameArray = pathName.split("/");
	        pathNameArray = pathNameArray.filter(function(n){ return n != "" });
	        pageName = pathNameArray[pathNameArray.length - 1];
	    } else {
	        pageName = pathName;
	    }
	    return pageName;
	}

	function navigateToPage() {
	    var pageName = getPageName();
	    $.get('index.html', function (response) {
	        var markup = $("<div>" + response + "</div>");
	        console.log(response);
	        // Extract the fragment out of the markup.
	        var fragment = markup.find("section").html();

	        $("section").html(fragment).addClass(pageName+" opacity");

	        /*$('section').empty().html(html).fadeIn(200, function(){ $(this).addClass(title+' opacity'); });*/
	    });
	}

	$("a[data-role='ajax']").click(function (e) {
		e.preventDefault();
	    if (Modernizr.history) {
	        $('.home .homeMenu li a').not(this).addClass('homeMenuActive');
	        $(this).parents('section').removeClass('opacity');
	        var thisCase = $(this);
	       	window.setTimeout(function(){
	       		thisCase.parents('section').removeClass();
	        	var pageName = thisCase.attr("href");
	        	var title = pageName.slice(0, -1);
	        	window.history.pushState(null, "", pageName);
	        	navigateToPage();
	       	}, 300);
	        	
	        

	        
	    } else { console.log('no Modernizr History'); }
	});


	var _popStateEventCount = 0;
	$(window).on('popstate', function (e) {
	    this._popStateEventCount++;
	    if ($.browser.webkit && this._popStateEventCount == 1) {
	        return;
	    }
	    navigateToPage();
	});





/* ---------------- Home ---------------- */
	$('.home .homeMenu li a').mouseover(function(){ $('.home .homeMenu li a').not(this).addClass('homeMenuHover'); })
		.mouseout(function(){ $('.home .homeMenu li a').not(this).removeClass('homeMenuHover'); })

/* -------------------------------------- */




});


