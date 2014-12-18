ninjApp.controller('menuController', function($scope, Page){

	$scope.hoverIn = function(id){
	    /*var xPosL = $('.menuOverlay-mainMenu li:nth-child('+id+')').offset().left;
	    var xPosR = xPosL + $('.menuOverlay-mainMenu li:nth-child('+id+')').width();
	    var xPosMid = xPosL + ((xPosR - xPosL) / 2);
	    var sizePercentBase = 25;
	    var newSizePercent;
	    var newSizePercentNotSelected;*/
	    $('.menuOverlay-mainMenu, .menuOverlay-mainMenu li').addClass('menuOverlay-mainMenu--notSelected');
	    $('.menuOverlay-mainMenu, .menuOverlay-mainMenu li:nth-child('+id+')')
	    		.removeClass('menuOverlay-mainMenu--notSelected')
	    		.addClass('menuOverlay-mainMenu--selected');

	    // Too laggy.. :(
	    /*$('.menuOverlay-mainMenu li:nth-child('+id+')').on('mousemove', function(e){
	    	if(e.pageX < xPosMid){
	    		newSizePercent = (xPosMid / e.pageX) * (sizePercentBase+1);
	    	} else {
	    		newSizePercent = (e.pageX / xPosMid) * (sizePercentBase+1);
	    	}
	    	newSizePercentNotSelected = (100 - newSizePercent) / 3;

	    	$('.menuOverlay-mainMenu li')
	    		.width(newSizePercentNotSelected+'%');

	    	$('.menuOverlay-mainMenu li:nth-child('+id+')')
	    		.width(newSizePercent+'%');
	    });*/


	   

	};

	$scope.hoverOut = function(id){
	    $('.menuOverlay-mainMenu, .menuOverlay-mainMenu li').removeClass('menuOverlay-mainMenu--notSelected').removeClass('menuOverlay-mainMenu--selected');
	};



});