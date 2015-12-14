$(document).ready(function() {
  $('#snake').on('click', function() {
    console.log('hey');
  });

	var $snake = $("#snake");
	var gameSpeed = 500;
	var direction = 39;
	var snakeSize = $snake.css('width');


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

	setInterval(moveSnake, gameSpeed);
});

