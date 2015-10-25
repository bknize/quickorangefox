$("#contactform").submit(function(e) {
	e.preventDefault();
	if ($("#field_fake").val().length == 0 && $("#field_email").val().length > 0 && $("#field_contact").val().length > 0) {
		var form = $(this).serialize();
		$.get("/contact/contact.php?" + form, "", function(data) {
			if (data == "OK") {
				$("#contactform").fadeOut(function() {
					$("#contactform").replaceWith('<div class="row"><div class="twelve columns"><h2 style="color:#FD933E;">Thanks! We will be in touch soon!</h2></div></div>');
				});
			}
		});
	}
});