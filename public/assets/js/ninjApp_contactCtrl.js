ninjApp.controller('contactController', function($scope, $http, $state, Page){

	Page.setTitle('Contact | Alexis Bertin');

	TweenLite.to('.overlay', 0.2, {background: "rgba(0,0,0,.6)"});
	TweenLite.to('.background', 0.2, {opacity: "0", onComplete:function(){
		TweenLite.to('.alphaTransi', 0.4, {y: "0", opacity: "1", ease:Quart.easeOut });
	}});

	autosize(document.querySelectorAll('textarea'));

	

	/*TweenLite.to('.works-content', 0.2, {y: "-20", ease:Quart.easeOut });*/



	$('.contactForm').on('submit', function(e) {
		e.preventDefault();
		
		TweenLite.to('.contactForm-submit', 0.2, {opacity: '0', y:'-10', ease:Quart.easeOut});
		setTimeout(function(){ TweenLite.to('#contactForm--mailLabel', 0.2, {opacity: '0', y:'-10', ease:Quart.easeOut}); }, 100);
		setTimeout(function(){ TweenLite.to('#contactForm-name', 0.2, {opacity: '0', y:'-10', ease:Quart.easeOut}); }, 300);
		setTimeout(function(){ 
			TweenLite.to('#contactForm--nameSpan', 0.2, {opacity: '0', y:'-10', ease:Quart.easeOut, onComplete:function(){
				TweenLite.to('.contactForm', 0.2, {opacity: '0', ease:Quart.easeOut, onComplete:function(){
					TweenLite.to('.contactThankYou', 0, {display: 'block', onComplete:function(){
						TweenLite.to('.contactThankYou', 0.2, {opacity: '1', y:'0', ease:Quart.easeOut});
					}});
				}});
			}});
		}, 500);

		var name = $('#contactForm-name').val();
		var mail = $('#contactForm-mail').val();
		var message = $('#contactForm-message').val();
		message = message.replace(/\r?\n/g, '<br />');

		$.ajax({
		    url: $(this).attr('action'),
		    type: $(this).attr('method'),
		    data: {name: name, mail: mail, message: message},
		    success: function(html) { console.log('Message Well Sent | Thank You !') }
		});
		return false;
	});







// --------------------------------- Contact Form Events | MESSAGE --------------------------------- //
	function hideContactForm_message(){
		TweenLite.to('.contactForm-more', 0.2, {opacity: '0', y: '-10', ease:Quart.easeOut, onComplete:function(){
			TweenLite.to('.contactForm-more', 0, {display: 'none'});
		}});
		setTimeout(function(){
			TweenLite.to('#contactForm--nameLabelTitle', 0.2, {opacity: '0', y: '-10', ease:Quart.easeOut, onComplete:function(){
				TweenLite.to('#contactForm--nameLabelTitle', 0, {display: 'none'});
			}});
		}, 100);
	}
	function showContactForm_message(){
		TweenLite.to('#contactForm--nameLabelTitle', 0, {display: 'block', onComplete:function(){
			TweenLite.to('#contactForm--nameLabelTitle', 0.2, {opacity: '1', y: '0', ease:Quart.easeOut});
		}});
		setTimeout(function(){
			TweenLite.to('.contactForm-more', 0, {display: 'block', onComplete:function(){
				TweenLite.to('.contactForm-more', 0.2, {opacity: '1', y: '0', ease:Quart.easeOut});
			}});
		}, 100);
	}
	$('#contactForm-message').focus(function() {
		if(document.getElementById('contactForm-message').value === ''){
			hideContactForm_message();
		} else {
			showContactForm_message();
		}
	});
	$('#contactForm-message').blur(function() {
		if(document.getElementById('contactForm-message').value === ''){
			hideContactForm_message();
		}
	});
// ------------------------------------------------------------------------------------------------- //




// --------------------------------- Contact Form Events | NAME --------------------------------- //
	function hideContactForm_name(){
		TweenLite.to('#contactForm--mailLabel', 0.2, {opacity: '0', y: '-10px', ease:Quart.easeOut});

		setTimeout(function(){ 
			TweenLite.to('#contactForm--nameSpan span:last-child', 0.2, {opacity: '0', y: '-10', ease:Quart.easeOut, onComplete:function(){
				TweenLite.to('#contactForm--nameSpan span:last-child', 0, {display: 'none'});
			}});
			setTimeout(function(){
				TweenLite.to('#contactForm--nameSpan span:first-child', 0, {display: 'block', onComplete:function(){
					TweenLite.to('#contactForm--nameSpan span:first-child', 0.2, {opacity: '1', y: '0', ease:Quart.easeOut});
				}});
			},100);
		},100);
	}
	function showContactForm_name(){
		TweenLite.to('#contactForm--nameSpan span:first-child', 0.2, {opacity: '0', y: '10', ease:Quart.easeOut, onComplete:function(){
			TweenLite.to('#contactForm--nameSpan span:first-child', 0, {display: 'none'});
		}});
		setTimeout(function(){
			TweenLite.to('#contactForm--nameSpan span:last-child', 0, {display: 'block', onComplete:function(){
				TweenLite.to('#contactForm--nameSpan span:last-child', 0.2, {opacity: '1', y: '0', ease:Quart.easeOut});
			}});
		},100);
		setTimeout(function(){ TweenLite.to('#contactForm--mailLabel', 0.2, {opacity: '1', y: '0', ease:Quart.easeOut}); },200);
	}

	$('#contactForm-name').focus(function() {
		if(document.getElementById('contactForm-name').value === ''){
			hideContactForm_name();
		} else {
			showContactForm_name();
		}
	});
	$('#contactForm-name').blur(function() {
		if(document.getElementById('contactForm-name').value === ''){
			hideContactForm_name();
		}
	});
// ------------------------------------------------------------------------------------------------- //





// --------------------------------- Contact Form Events | MAIL --------------------------------- //
	function hideContactForm_mail(){
		TweenLite.to('.contactForm-submit', 0.2, {opacity: '0', y: '10', ease:Quart.easeOut, onComplete:function(){
			setTimeout(function(){
				TweenLite.to('.contactForm-submit', 0, {display: 'none'});
			},100);
		}});
	}
	function showContactForm_mail(){
		TweenLite.to('.contactForm-submit', 0, {display: 'block', onComplete:function(){
			TweenLite.to('.contactForm-submit', 0.2, {opacity: '1', y: '0', ease:Quart.easeOut});
		}});
	}

	$('#contactForm-mail').focus(function() {
		if(document.getElementById('contactForm-mail').checkValidity() === false){
			hideContactForm_mail();
		} else {
			showContactForm_mail();
		}
	});
	$('#contactForm-mail').blur(function() {
		if(document.getElementById('contactForm-mail').checkValidity() === false){
			hideContactForm_mail();
		}
	});
// ------------------------------------------------------------------------------------------------- //







	$(document).keyup(function(keyEvent){
		if($(keyEvent.target).is('#contactForm-message')){
			if(document.getElementById('contactForm-message').value === ''){
				hideContactForm_message();
			} else {
				showContactForm_message();
			}
		} else if($(keyEvent.target).is('#contactForm-name')){
			if(document.getElementById('contactForm-name').value === ''){
				hideContactForm_name();
			} else {
				showContactForm_name();
			}
		} else if($(keyEvent.target).is('#contactForm-mail')){
			if(document.getElementById('contactForm-mail').checkValidity() === false){
				hideContactForm_mail();
			} else {
				showContactForm_mail();
			}
		}
	});

	
	







	

	
});







