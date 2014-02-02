// on document ready
$(document).ready(function() { 	

	var userFeed = new Instafeed({
		get: 'user',
        userId: 31038635,
        accessToken: '31038635.467ede5.dc9e5064db244367b5ae6963922831c2',
        limit: 30,
	});
	userFeed.run();

});		