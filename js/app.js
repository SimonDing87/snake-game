$(document).ready(function() {

	var $snake = $('#snake');
	var $board = $('#board');
	var $pellet = $('.pellet');	
	var gameSpeed = 100;
	var snakeSize = parseInt($snake.css('width'));
	var direction = 39;
	var score = 0;
	var gameActive = true;
	var tailCount = 0;

	var moveSnake = function() {
		//only allow perpendicular directions, need to fix bug if u spam keys u can still turn into your tail

		$(document).keydown(function(e){
			if (direction === 37 || direction == 39) {
				if (e.keyCode === 38 || e.keyCode === 40) {
					direction = e.keyCode;
				}
			} else if (direction === 38 || direction === 40) {
				if (e.keyCode === 37 || e.keyCode === 39) {
					direction = e.keyCode;
				}
			} 
		});
		if (direction === 37) { // move left
			$snake.css('left', '-=' + snakeSize);
		}
		if (direction === 38) { // move up
			$snake.css('top', '-=' + snakeSize);
		}
		if (direction === 39) { // move right
			$snake.css('left', '+=' + snakeSize);
		}
		if (direction === 40) { // move down
			$snake.css('top', '+=' + snakeSize);
		}
	}

	var generatePellet = function() {
		var pelletHTML = "<div class='pellet'></div>"
		$board.prepend(pelletHTML);
		$('.pellet').css({
			top: Math.floor(Math.random() * parseInt($board.css('height'))/snakeSize) * snakeSize,
			left: Math.floor(Math.random() * parseInt($board.css('width'))/snakeSize) * snakeSize
		})
	};


	var addTail = function() {
		$('<div class="tail ' + tailCount + '"></div>').insertBefore($snake);
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


	var checkCollision = function(div1, div2) {
		if (div1.css('top') === div2.css('top') && div1.css('left') === div2.css('left')) {
			return true;
		}
		return false;
	}
	var ifPelletEaten = function() {
		if (checkCollision($snake, $('.pellet'))) {
			score++;
			addTail();
			$('.pellet').remove();
			generatePellet();
		}
	}

	var checkTailCollision = function() {
		for (var i = 0; i < tailCount-1; i++) {
			if (checkCollision($snake, $('.'+ i))) {
				gameActive = false;
			}
		}
	}

	var checkWithinBoard = function() {
		if (parseInt($snake.css('top')) < 0
			|| parseInt($snake.css('top')) > parseInt($board.css('height'))
			|| parseInt($snake.css('left')) < 0
			|| parseInt($snake.css('left')) > parseInt($board.css('width')) - snakeSize
		) {
			gameActive = false;
		}
	}
	var updateGame = function() {
		if (gameActive){
			updateSnake();
			moveSnake();
			ifPelletEaten();
			checkTailCollision();
			checkWithinBoard();

		}	else {
			$('#gameover').animate({opacity: 1}, 700)
		}
	}

	generatePellet();
	setInterval(updateGame, gameSpeed);
});

