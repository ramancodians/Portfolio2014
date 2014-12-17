ninjApp.controller('menuController', function($scope, Page){

	$scope.hoverIn = function(id){
	    /*var xPosL = $('.menuOverlay-mainMenu li:nth-child('+id+')').offset().left;
	    var xPosR = xPosL + $('.menuOverlay-mainMenu li:nth-child('+id+')').width();
	    var xPosMid = xPosL + ((xPosR - xPosL) / 2);
	    var sizePercentBase = 25;
	    var newSizePercent;
	    var newSizePercentNotSelected;*/
	    $('.menuOverlay-mainMenu li').addClass('notSelected');
	    $('.menuOverlay-mainMenu li:nth-child('+id+')')
	    		.removeClass('notSelected')
	    		.addClass('selected');

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
	    $('.menuOverlay-mainMenu li').removeClass('notSelected').removeClass('selected');
	};



});