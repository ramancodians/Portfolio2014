$(document).ready(function(){

	function getPageName() {
	    var pathName = window.location.pathname,
	        pageName = "";

	    if (pathName.indexOf("/") != -1) {
	        pageName = pathName.split("/").pop();
	    } else {
	        pageName = pathName;
	    }
	    return pageName;
	}

	function navigateToPage() {
	    var pageName = getPageName();
	    $.get(pageName+'index.html', function (response) {
	        var markup = $("<div>" + response + "</div>"),

	        // Extract the fragment out of the markup.
	            fragment = markup.find("section").html();

	        $("section").html(fragment);

	        /*$('section').empty().html(html).fadeIn(200, function(){ $(this).addClass(title+' opacity'); });*/
	    });
	}

	$("a[data-role='ajax']").click(function (e) {
	    if (Modernizr.history) {
	        e.preventDefault();
	        $('.home .homeMenu li a').not(this).addClass('homeMenuActive');
	        /*$(this).parents('section').fadeOut(200,function(){ $(this).removeClass(); });*/

	        var pageName = $(this).attr("href");
	        var title = pageName.slice(0, -1);

	        window.history.pushState(null, "", pageName);
	        navigateToPage();
	    } else { console.log('no Modernizr History'); }
	});


	/* ---------------- Home ---------------- */
		$('.home .homeMenu li a').mouseover(function(){ $('.home .homeMenu li a').not(this).addClass('homeMenuHover'); })
			.mouseout(function(){ $('.home .homeMenu li a').not(this).removeClass('homeMenuHover'); })

	/* -------------------------------------- */
	var _popStateEventCount = 0;
	$(window).on('popstate', function (e) {
	    this._popStateEventCount++;
	    if ($.browser.webkit && this._popStateEventCount == 1) {
	        return;
	    }
	    navigateToPage();
	});


});


