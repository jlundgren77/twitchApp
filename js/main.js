$(document).ready(function(){
    
    var users = ["freecodecamp", "storbeck", "terakilobyte", "habathcx", "RobotCaleb", "thomasballinger", 
    				"noobs2ninjas", "beohoff", "sheevergaming", "cretetion", "OgamingSC2"];
    
    function getStreams(users) {
    	$.each(users, function(index, value) {
    	
    		getUserInfo(value);
    	});

    }
    getStreams(users);

    function getUserInfo(user_name) {
  
		var streamsUrl = 'https://api.twitch.tv/kraken/streams/' + user_name + '?callback=?';
		var channelsURL = 'https://api.twitch.tv/kraken/channels/' + user_name + '?callback=?';
		$.when(
			$.getJSON(channelsURL),
			$.getJSON(streamsUrl)
			).done(function(data1, data2) {
				
				// var status = getUserStatus(data2[0]);

				

				// var userName = getUserName(data1);
				// var userLink = getUserLink(data1);
				// var currentStream = getCurrentStream(data2);
				// var icon = getUserIcon(data1);
				// // console.log(icon);
				// var userDiv = $(".template .users").clone();
				
				// userDiv.find('.stream').text(status);
				
				
				
					
				// userDiv.find(".userLink").text(userName).attr('href', userLink);
				// userDiv.find(".logo").attr("src", icon);
				// $("#content .container").append(userDiv);
				buildStreamList(data1, data2);
			});
			
			
    };
    	
    function buildStreamList(data1, data2) {

    			var status = getUserStatus(data2[0]);


				var userName = getUserName(data1);
				var userLink = getUserLink(data1);
				var currentStream = getCurrentStream(data2);

				var icon = getUserIcon(data1);
				// console.log(icon);
				var userDiv = $(".template .users").clone();

				
				if (status == "offline") {
					userDiv.find('.stream').text(status).addClass("offline");
				}else {
					userDiv.find('.stream').text(status).addClass("online");
					
					var gameImage = data2[0].stream.preview.medium;


				}
				
				
				
				
					
				userDiv.find(".userLink").text(userName).attr('href', userLink);
				userDiv.find(".logo").attr("src", icon);
				$("#content .container").append(userDiv);

    }

    function getUserStatus(stream) {
        
        
    	var user_streams = stream.stream;
    	var status,
    		current_stream,
    		preview;
    	if(user_streams == null) {
    		status = "offline";
    		current_stream = "none";
    	}	
    	else if(user_streams == undefined) {
    		status = "offline";
    		current_stream = "none";
    	}
    	else {
    		status = user_streams.game;
    		current_stream = user_streams.game;
    		

    	}
    	return status;
    };

   function getUserName(data) {
   	return data[0].display_name;
   };

   function getUserLink(data) {
   	return data[0].url;
   };

   function getUserIcon(data) {
    var logo = data[0].logo;
    if (logo == null) {
    	return "images/unknownUser.png";
    }
    else {
    	return logo;
    }
   	
   };
   function getCurrentStream(data) {
   	// console.log(data);
   	if (data[0].stream == null) {
   		return false;
   	}
   	else {
   		return data[0].stream.game;
   	}

   };

   function addUser(userList){
   	
   	var user = $("#search-users").val();
   	if(jQuery.inArray(user, userList) !== -1) {
   		console.log("already have");

   	} else {
   		users.push(user);
   		console.log(users);
   		getStreams(users);
   		// var channelsURL = 'https://api.twitch.tv/kraken/channels/' + user + '?callback=?';
   		// $.getJSON(channelsURL, function(data) {
   		// 	console.log(data);
   		// });
   	}
   };

   function checkFilterStatus() {
   
   	// console.log($('input[name=filter]:checked').val());
   	var checked = $('input[name=filter]:checked').val();
   	if (checked == "offline") {
   		$(".stream").each(function() {
   			if($(this).text() != "offline") {
   				
   				$(this).parent().hide();

   			} else {
   				$(this).parent().show();
   			}
   		});
   	} else if (checked == "all") {
   		$(".users").show();
   	} else {

   		$(".stream").each(function() {
   			if($(this).text() != "online") {
   				
   				$(this).parent().hide();
   				if($(this).text() != "offline") {
   				
   					$(this).parent().show();
   				}
   				else {
   					$(this).parent().hide();
   				}
   			}
   		});
   		
   	}
   };


   $('#addUser').click(function(){
   	addUser(users);
   });
   $('input[name="filter"]').click(function() {
   
   	checkFilterStatus();
   });
   

  
    		
   checkFilterStatus();
	
});