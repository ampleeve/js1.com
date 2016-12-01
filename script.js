"use strict";

function Matrix(containerId, numOfRows, numOfCols, cellSize) {

	this.containerId = containerId;
	this.numOfRows = numOfRows || 20;
	this.numOfCols = numOfCols || 20;
	this.cellSize = cellSize || 20;
	this.element = document.getElementById(this.containerId);
	this.element.style.width = this.numOfCols * this.cellSize + 'px';
	this.element.style.height = this.numOfRows * this.cellSize + 'px';


	this.create = function(){

		var numOfElements = this.numOfRows * this.numOfCols;

		this.element.innerHTML='';

		for(var i = 0; i < numOfElements; i++){

			var div = document.createElement('div');
			div.className = 'cell';
			this.element.appendChild(div);

		}

	}

	this.getCell = function (indexRow, indexCol) {

		// body

	}

	this.setCell = function (indexRow, indexCol, value){

		var index = (indexRow - 1) * this.numOfCols + indexCol - 1;
		var cell = this.element.children[index];

		if(value){

			cell.className = 'cell on';

		}
		else{

			cell.className = 'cell';

		}

	}

}

window.onload = function () {

	var m1 = new Matrix('matrix1', 25, 25);
	m1.create();
	m1.setCell(5,5,true);

	var m2 = new Matrix('matrix2', 10, 10);
	m2.create();
	m2.setCell(5,7,true);

	var m3 = new Matrix('matrix3', 10, 10);
	m3.create();
	m3.setCell(5,7,true);

	var m4 = new Matrix('matrix4', 10, 10);
	m4.create();
	m4.setCell(5,7,true);

}

/*var matrixSize = 20;							//размерность матрицы

var colorActive = "red";					// присваиваем цвет ячейки активной
var colorPassive = "white";					// и пасивной
var colorGoal = "magenta";

var currentX = 0;
var currentY = 0;

var goalX = 0;
var goalY = 0;

	window.onload = function(){

		createMatrix();									// создаем матрицу
		window.document.body.onkeydown = whichButton;	// слушаем нажатия кнопок клавы


		currentY = Math.floor(Math.random() * (20 - 1 + 1)) + 1; 	// присваеваем случайное стартовое значение столбца
		currentX = Math.floor(Math.random() * (20 - 1 + 1)) + 1;	// присваеваем случайное стартовое значение строки

		setCell(currentX,currentY,colorActive);		// устанавливаем активную ячейку-курсор в случайном положении

		goalX = Math.floor(Math.random() * (20 - 1 + 1)) + 1; 	// присваеваем случайное финишное значение столбца
		goalY = Math.floor(Math.random() * (20 - 1 + 1)) + 1;	// присваеваем случайное финишное значение строки

		setCell(goalX,goalY,colorGoal);		// устанавливаем активную ячейку-финиш в случайном положении



		function createMatrix() {

			var matrix = document.getElementById('matrix');
			var n = matrixSize * matrixSize;

			for (var i = 0; i < n; i++) {

				var div = document.createElement('div');
				div.className = 'cell';
				div.style.backgroundColor = colorPassive;
				matrix.appendChild(div);

			}

		}


		function whichButton(event) {

			switch (event.keyCode) {

				case 38:

					console.log( 'вверх' );

						if(currentY != 1){

							setCell(currentX,currentY,colorPassive);
							setCell(currentX,currentY-1,colorActive);
							currentY--;
							console.log("X:" + currentX);
							console.log("Y:" + currentY);
							if (getCell(currentX, currentY)){
								endOfGame();
							}

						}

					break;

				case 39:

					console.log( 'вправо' );

					if(currentX != matrixSize){

						setCell(currentX,currentY,colorPassive);
						setCell(currentX+1,currentY,colorActive);
						currentX++;
						console.log("X:" + currentX);
						console.log("Y:" + currentY);
						if (getCell(currentX, currentY)){
							endOfGame();
						}

					}

					break;

				case 40:

					console.log( 'вниз' );

					if(currentY != matrixSize){

						setCell(currentX,currentY,colorPassive);
						setCell(currentX,currentY+1,colorActive);
						currentY++;
						console.log("X:" + currentX);
						console.log("Y:" + currentY);
						if (getCell(currentX, currentY)){
							endOfGame();
						}

					}

					break;

				case 37:

					console.log( 'влево' );

					if(currentX != 1){

						setCell(currentX,currentY,colorPassive);
						setCell(currentX-1,currentY,colorActive);
						currentX--;
						console.log("X:" + currentX);
						console.log("Y:" + currentY);
						if (getCell(currentX, currentY)){
							endOfGame();
						}

					}

					break;

				default:
					console.log( 'не то ты нажал, мужик (;' );
			}

		}

		function setCell(row, col, val) {

			var matrix = document.getElementById('matrix');
			var matrixLength = Math.sqrt(matrix.children.length);
			var numberOfElement = matrixLength * (col-1) + ( row -1);
			matrix.children[numberOfElement].style.backgroundColor = val;

		}

		function getCell(row, col) {

			if(row == goalX && col == goalY){
				return true;
			} else {
				return false;
			}

		}

		function endOfGame() {

			console.log("Конец игры");
			window.document.body.onkeydown = null;

		}

	}*/