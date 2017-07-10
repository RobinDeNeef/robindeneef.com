//HTML Elements
var colorDisplay = document.getElementById("colorDisplay");
var messageField = document.getElementById("message");
var squares = document.getElementsByClassName("square");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyButton = document.getElementById("easyBtn");
var hardButton = document.getElementById("hardBtn");

//Variables
var colors = []
var pickedColor;
var isHard = true;

function resetGame(){
	colors = generateRandomColors(getDifficulty());
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.background = "steelblue";
	resetButton.textContent = "New Colors";
	messageField.textContent = "";

	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
		squares[i].addEventListener("click", function(){
			SquareClicked(this);
		})
	}
}

function SquareClicked(item){
	var clickedColor = item.style.backgroundColor;
	if(clickedColor === pickedColor){
		playerWins(clickedColor);
	}else{
		item.style.backgroundColor = "#232323";
		messageField.textContent = "Try Again";
	}
}

function playerWins(clickedColor){
	messageField.textContent = "Correct";
	changeColors(clickedColor);
	h1.style.backgroundColor = clickedColor;
	resetButton.textContent = "Play Again";
}

function getDifficulty(){
	if(isHard){
		return 6;
	}else{
		return 3;
	}
}

function changeColors(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}


resetButton.addEventListener("click",function(){
	resetGame();
});

easyButton.addEventListener("click",function(){
	isHard = false;
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	for(var i = 3; i < squares.length; i++){
		squares[i].style.display = "none";
	}
	resetGame();
});
hardButton.addEventListener("click",function(){
	isHard = true;
	easyButton.classList.remove("selected");
	hardButton.classList.add("selected");
	for(var i = 3; i < squares.length; i++){
		squares[i].style.display = "block";
	}
	resetGame();
});

resetGame();