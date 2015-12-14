$(document).ready(function() {
  $('#snake').on('click', function() {
    console.log('hey');
  });

  // var moveSnake = function() {
  // 	direction = 'right';
  // 	$('#snake').animate
  // }

	// manual control
	var $snake = $("#snake");
	var gameSpeed = 500;
	var direction = 39;
	$(document).keydown(function(e){
		direction = e.keyCode
	})
	var moveSnake = function() {
		if (direction === 37) {
			$snake.css('left', '-=50');
		}
		if (direction === 38) {
			$snake.css('top', '-=50');
		}
		if (direction === 39) {
			$snake.css('left', '+=50');
		}
		if (direction === 40) {
			$snake.css('top', '+=50');
		}
	}
	// if (direction == 37) { // left arrow key
	// 			$snake.css('left', "-=5");                
	// 		}
	// 		if (direction == 38) { // up arrow key
	// 			$snake.css('top', "-=5");  
	// 		}
	// 		if (direction == 39) { // right arrow key
	// 			$snake.css('left', "+=5");  
	// 		}
	// 		if (direction == 40) { // down arrow key
	// 			$snake.css('top', "+=5");  

	// manual control
	// var keys = {};
	// var moveSnake = function() {
	// 	$(document).keydown(function(e) {
	// 	    keys[e.keyCode] = true;
	// 	});

	// 	$(document).keyup(function(e) {
	// 	    delete keys[e.keyCode];
	// 	});
	// 	for (var direction in keys) {
	// 		console.log(snakePosition);
	// 		if (!keys.hasOwnProperty(direction)) continue;
	// 		if (direction == 37) { // left arrow key
	// 			$snake.animate({left: "-=5"}, 0);                
	// 		}
	// 		if (direction == 38) { // up arrow key
	// 			$snake.animate({top: "-=5"}, 0);  
	// 		}
	// 		if (direction == 39) { // right arrow key
	// 			$snake.animate({left: "+=5"}, 0);  
	// 		}
	// 		if (direction == 40) { // down arrow key
	// 			$snake.animate({top: "+=5"}, 0);  
	// 		}
	// 	}
	// };
	setInterval(moveSnake, gameSpeed);
});

