(function($){
  $("#contactForm").submit(function(event) {
  	event.preventDefault();
  	var form = $( this );
  	var url = form.attr('action');
  	var params = {
  		email: $('#email').val(),
  		name: $('#name') .val(),
  		message: $('#message').val()
  	}

  	$.post(url, params, function(data) {
  		//do something with feedback data
  		alert(data);
  	});

  });

})(jQuery);