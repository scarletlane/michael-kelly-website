// on document ready
$(document).ready(function() { 
 	
 	// show/hide the mobile menu based on class added to container
	$('.menu-icon').click(function(){
		$(this).parent().toggleClass('is-tapped');
		 return false;
	});

  
});