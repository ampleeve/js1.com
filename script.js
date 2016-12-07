"use strict";

function Matrix(containerId, numOfRows, numOfCols, cellSize, colorActive, colorPassive, colorGoal) {

	this.containerId = containerId;
	this.numOfRows = numOfRows || 20;
	this.numOfCols = numOfCols || 20;
	this.cellSize = cellSize || 20;
	this.colorActive = colorActive || 'red';					// присваиваем цвет ячейки активной
	this.colorPassive = colorPassive || 'white';					// и пасивной
	this.colorGoal = colorGoal || 'magenta';
	this.currentX = Math.floor(Math.random() * (this.numOfRows - 1 + 1)) + 1;
	this.currentY = Math.floor(Math.random() * (this.numOfCols - 1 + 1)) + 1;
	this.goalX = Math.floor(Math.random() * (this.numOfRows - 1 + 1)) + 1;
	this.goalY = Math.floor(Math.random() * (this.numOfCols - 1 + 1)) + 1;
	this.element = document.getElementById(this.containerId);
	this.element.style.width = this.numOfCols * this.cellSize + 'px';
	this.element.style.height = this.numOfRows * this.cellSize + 'px';




	this.create = function(){

		var numOfElements = this.numOfRows * this.numOfCols;

		this.element.innerHTML='';

		for(var i = 0; i < numOfElements; i++){

			var div = document.createElement('div');
			div.style.float = 'left';
			div.style.width = '19px';
			div.style.height = '19px';
			div.style.borderBottom = '1px solid #999';
			div.style.borderRight = '1px solid #999';
			div.style.backgroundColor = this.colorPassive;
			this.element.appendChild(div);

		}

	}

	this.getCell = function (indexRow, indexCol) {

		// body

	}

	this.setCell = function (indexRow, indexCol, color){

		var index = (indexRow - 1) * this.numOfCols + indexCol - 1;
		this.element.children[index].style.backgroundColor = color;

	}

}

window.onload = function () {

	var m1 = new Matrix('matrix1', 15, 15);
	m1.create();
	m1.setCell(m1.currentX,m1.currentY,m1.colorActive);
	m1.setCell(m1.goalX, m1.goalY, m1.colorGoal);

	var m2 = new Matrix('matrix2', 15, 15);
	m2.create();
	m2.setCell(m2.currentX,m2.currentY,m2.colorActive);
	m2.setCell(m2.goalX, m2.goalY, m2.colorGoal);

	window.document.body.onkeydown = whichButton;

}

/*							//размерность матрицы



	window.onload = function(){

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