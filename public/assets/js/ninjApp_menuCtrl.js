ninjApp.controller('menuController', ['$scope', function($scope, Page) {

/*console.log("width: "+document.documentElement.clientWidth);
console.log("height: "+document.documentElement.clientHeight);*/

if (document.documentElement.clientWidth > 900) {



		$scope.toggleFullScreen = function(){
			if ((document.fullScreenElement && document.fullScreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
			    if (document.documentElement.requestFullScreen) {  
			    	document.documentElement.requestFullScreen();  
			    } else if (document.documentElement.mozRequestFullScreen) {  
			    	document.documentElement.mozRequestFullScreen();  
			    } else if (document.documentElement.webkitRequestFullScreen) {  
			    	document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
			    }  
			} else {  
			    if (document.cancelFullScreen) {  
			    	document.cancelFullScreen();  
			    } else if (document.mozCancelFullScreen) {  
			    	document.mozCancelFullScreen();  
			    } else if (document.webkitCancelFullScreen) {  
			    	document.webkitCancelFullScreen();  
			    }  
			}  
		};

}




}]);