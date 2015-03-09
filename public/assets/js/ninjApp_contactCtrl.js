ninjApp.controller('contactController', function($scope, $http, $state, Page){

	

	Page.setTitle('Contact | Alexis Bertin');

	TweenLite.to('.overlay', 0.2, {background: "rgba(0,0,0,.6)"});
	TweenLite.to('.background', 0.2, {opacity: "0"});
	/*TweenLite.to('.works-content', 0.2, {y: "-20", ease:Quart.easeOut });*/


	 /*autosize($('textarea')); */
	/*autosize(document.querySelectorAll('textarea'));*/

/*
	$http.get('/api/sendMail')
        .success(function(data) {
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
*/

	if(typeof msg !== 'undefined'){
		if(!!err){
			console.log('Message Fail');
		} else {
			console.log('Message Envoyé !');
		}
	}



	/*$('.contactForm-submit').click(function (e) {
	         e.preventDefault(); // prevent page reload
	    

	        $http.post('/sendMessage', $(".contactForm").serialize())
	       		.success(function(data, status, headers, config) {
	            // this callback will be called asynchronously
	            // when the response is available
	            console.log('yes: '+data);
	          })
	       		.error(function(data, status, headers, config) {
	       			console.log('nope: '+data);
	            // called asynchronously if an error occurs
	            // or server returns response with an error status.
	          });


	    });*/


	$('.contactForm').on('submit', function(e) {
		e.preventDefault();
		var nomVal = $('.contactForm-name').val();
		var mailVal = $('.contactForm-mail').val();
		var messageVal = $('.contactForm-message').val();

		$.ajax({
		    url: $(this).attr('action'),
		    type: $(this).attr('method'),
		    data: {name: nomVal, mail: mailVal, message: messageVal},
		    success: function(html) {
		  	    /*html = html.replace(/\s/g,""); 
		        if(html == 'done'){
		            $('#contactForm').fadeOut(300,function(){
		            	$('#success_message').fadeIn(300);
		            });
		        }*/
		        console.log(html);
		    }
		});

		/*$http.post('/sendMessage', {})
				.success(function(data, status, headers, config) {
		     // this callback will be called asynchronously
		     // when the response is available
		     console.log('yes: '+data);
		   })
				.error(function(data, status, headers, config) {
					console.log('nope: '+data);
		     // called asynchronously if an error occurs
		     // or server returns response with an error status.
		   });*/
		
		return false;
	});

	
});







