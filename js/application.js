// on document ready
$(document).ready(function() { 
 	
 	// show/hide the mobile menu based on class added to container
	$('.menu-icon').click(function(){
		$(this).parent().toggleClass('is-tapped');
		 return false;
	});

	var userFeed = new Instafeed({
		get: 'user',
        userId: 31038635,
        accessToken: '31038635.467ede5.dc9e5064db244367b5ae6963922831c2',
        limit: 30,
	});
	userFeed.run();

});	