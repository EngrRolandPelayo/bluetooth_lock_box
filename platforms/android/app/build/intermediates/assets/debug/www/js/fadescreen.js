	
	$(document).ready(function() {
		$(".button").bind('touchstart', function(e){
			$(this).css("background-color", "#6BBCD7");
			$(this).css("color", "#FFFFFF");
		});
			
		$(".button").bind('touchend', function(e){
			$(this).css("background-color", "#FFFFFF");
			$(this).css("color", "#000000");
		});
	});

	$(document).ready(function() {
		
			$(".button").mouseenter(function() {
					$(this).css("background-color", "#6BBCD7");
					$(this).css("color", "#FFFFFF");
				}).mouseleave(function() {
					$(this).css("background-color", "#FFFFFF");
					$(this).css("color", "#000000");
				});
	});
	
	$(document).ready(function() {		
			$('#pair-button').click(function(){
			//enter BLE pairing function here
			//if successful, hide the div
			$('#deviceready').hide();
			$('#button_div').fadeIn(1000);
		});
	});
		
	