// on document ready
$(document).ready(function() { 
 	
 	// show/hide the mobile menu based on class added to container
	$('.menu-icon').click(function(){
		$(this).parent().toggleClass('is-tapped');
		 return false;
	});

	function sendMail() {
		var link = "mailto:mikekellymusic@gmail.com"
				+ "?cc=myCCaddress@example.com"
				+ "&subject=" + escape("This is my subject")
				+ "&body=" + escape(document.getElementById('myText').value)
		;
		
		window.location.href = link;		
	}

});	