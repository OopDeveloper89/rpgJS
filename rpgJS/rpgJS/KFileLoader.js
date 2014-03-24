var KFileLoader = function() {
	
};

KFileLoader.load = function(url) {
	var deferred = new $.Deferred();
	$.ajax({
		url : url
	})
	.done(function(response) {
		deferred.resolve(response);
	})
	.fail(function() {
		throw new Error(url + ' could not found or load.');
	});
	return deferred.promise();
};