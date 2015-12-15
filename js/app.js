$(document).ready(function() {

	var $snake = $('#snake');
	var $board = $('#board');
	var $pellet = $('.pellet');	
	var gameSpeed = 100;
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
		$board.prepend(pelletHTML);
		$('.pellet').css({
			top: Math.floor(Math.random() * 8) * snakeSize,
			left: Math.floor(Math.random() * 8) * snakeSize
		})
	};


	var tailCount = 0;
	var addTail = function() {
		$board.prepend('<div class="tail ' + tailCount + '"></div>');
		$('.' + tailCount).css({
			top: $snake.css('top'),
			left: $snake.css('left')
		});
		tailCount++;
	}
	
	var updateSnake = function() {
		for (var i = tailCount; i >= 0; i--) {
			if (i === 0) {
				$('.'+i).css({
					top: $snake.css('top'),
					left: $snake.css('left')
				});
			} else {
				$('.'+i).css({
					top: $('.'+(i-1)).css('top'),
					left: $('.'+(i-1)).css('left')
				})
			}
		}
	}

	var ifPelletEaten = function() {
		if (checkCollision($snake, $('.pellet'))) {
			score++;
			addTail();
			$('.pellet').remove();
			generatePellet();
		}
	}

	var checkCollision = function(div1, div2) {
		if (div1.css('top') === div2.css('top') && div1.css('left') === div2.css('left')) {
			return true;
		}
		return false;
	}

	var checkWithinBoard = function() {
		if (parseInt($snake.css('top')) < 0
			|| parseInt($snake.css('top')) > parseInt($board.css('height'))
			|| parseInt($snake.css('left')) < 0
			|| parseInt($snake.css('left')) > parseInt($board.css('width'))
		) {
			console.log('you dead');
			gameActive = false;
		}
	}
	var gameActive = true;
	var updateGame = function() {
		if (gameActive){
			updateSnake();
			moveSnake();
			ifPelletEaten();
			checkWithinBoard();
		}	else {
			$board.append('<div>GAME OVER</div>')
		}
	}

	generatePellet();
	setInterval(updateGame, gameSpeed);
});

