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
