
$(document).ready(function(){


	$.ajax({
		url:  'https://api.twitch.tv/kraken/search/streams',
		data: {


		},
		dataType: 'jsonp',
		type: 'GET',
		async: false,
		success: function(data) {
			console.log(data);
		},
		error: function (errorMessage) {
			console(errorMessage);
		}

	});
});
$(document).ready(function(){


	$.ajax({
		url:  'https://api.twitch.tv/kraken/search/streams',
		data: {
				action: 'query';

		},
		dataType: 'jsonp',
		type: 'GET',
		async: false,
		success: function(data) {
			console.log(data);
		},
		error: function (errorMessage) {
			console(errorMessage);
		}

	});
});
$(document).ready(function(){


	$.ajax({
		url:  'https://api.twitch.tv/kraken/search/streams',
		data: {
				action: 'query'

		},
		dataType: 'jsonp',
		type: 'GET',
		async: false,
		success: function(data) {
			console.log(data);
		},
		error: function (errorMessage) {
			console(errorMessage);
		}

	});
});
$(document).ready(function(){


	$.ajax({
		url:  'https://api.twitch.tv/kraken/search/streams',
		data: {
				// action: 'query'

		},
		dataType: 'jsonp',
		type: 'GET',
		async: false,
		success: function(data) {
			console.log(data);
		},
		error: function (errorMessage) {
			console(errorMessage);
		}

	});
});