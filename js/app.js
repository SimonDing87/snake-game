$(document).ready(function() {
  $('#snake').on('click', function() {
    console.log('hey');
  });

	var $snake = $('#snake');
	var $body = $('body');
	var gameSpeed = 500;
	var direction = 39;
	var snakeSize = parseInt($snake.css('width'));


	$(document).keydown(function(e){
		if (e.keyCode === 37 || e.keyCode === 38 || e.keyCode === 39 || e.keyCode === 40)
		direction = e.keyCode
	})
	var moveSnake = function() {
		if (direction === 37) {
			$snake.css('left', '-=' + snakeSize);
		}
		if (direction === 38) {
			$snake.css('top', '-=' + snakeSize);
		}
		if (direction === 39) {
			$snake.css('left', '+=' + snakeSize);
		}
		if (direction === 40) {
			$snake.css('top', '+=' + snakeSize);
		}
	}

	var generatePellet = function() {
		var pelletHTML = "<div class='pellet'></div>"
		$body.prepend(pelletHTML);
		$('.pellet').css({
			top: Math.floor(Math.random() * 5) * snakeSize,
			left: Math.floor(Math.random() * 5) * snakeSize
		})
	};
	generatePellet();
	setInterval(moveSnake, gameSpeed);
	// setInterval(generatePellet, gameSpeed);
});

