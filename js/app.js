$(document).ready(function() {
  $('#snake').on('click', function() {
    console.log('hey');
  });

	// manual control
	var keys = {};
	$(document).keydown(function(e) {
	    keys[e.keyCode] = true;
	});

	$(document).keyup(function(e) {
	    delete keys[e.keyCode];
	});
	var moveSnake = function() {
		for (var direction in keys) {
			if (!keys.hasOwnProperty(direction)) continue;
			if (direction == 37) { // left arrow key
				$("#snake").animate({left: "-=5"}, 0);                
			}
			if (direction == 38) { // up arrow key
				$("#snake").animate({top: "-=5"}, 0);  
			}
			if (direction == 39) { // right arrow key
				$("#snake").animate({left: "+=5"}, 0);  
			}
			if (direction == 40) { // down arrow key
				$("#snake").animate({top: "+=5"}, 0);  
			}
		}
	}
	setInterval(moveSnake, 20);
});

