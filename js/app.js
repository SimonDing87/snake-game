$(document).ready(function() {

	var $snake = $('#snake');
	var $body = $('body');
	var $pellet = $('.pellet');	
	var gameSpeed = 500;
	var snakeSize = parseInt($snake.css('width'));
	var direction = 39;
	var score = 0;

	var moveSnake = function() {
		$(document).keydown(function(e){
			if (e.keyCode === 37 || e.keyCode === 38 || e.keyCode === 39 || e.keyCode === 40)
			direction = e.keyCode;
		})
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
			top: Math.floor(Math.random() * 8) * snakeSize,
			left: Math.floor(Math.random() * 8) * snakeSize
		})
	};

	var checkCollision = function(div1, div2) {
		if (div1.css('top') === div2.css('top') && div1.css('left') === div2.css('left')) {
			console.log('collided!');
			return true;
		}
		console.log('no collision');
		return false;
	}
	generatePellet();

	var addTail = function() {
		$body.append('<div class="tail"></div>');
		$('.tail').css({
			top: $snake.css('top'),
			left: $snake.css('left')
		});
	}

	var updateGame = function() {
		moveSnake();
		if (checkCollision($snake, $('.pellet'))) {
			score++;
			$('.pellet').remove();
			generatePellet();
		}
	}
	setInterval(function(){
		addTail();
		addTail();
		updateGame();
	}, gameSpeed);
});

