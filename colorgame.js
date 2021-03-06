var numSquares= 6;
var colors = generateRandomColors(6);
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var easyBtn = document.querySelector(".easyBtn");
var hardBtn = document.querySelector(".hardBtn");

    
easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0;i < squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
})

hardBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0;i < squares.length;i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}

})
    var colorDisplay = document.querySelector("#colorDisplay");
    colorDisplay.textContent = pickedColor;

    var message =document.querySelector("#message");
    var reset = document.querySelector("#reset");

    reset.addEventListener("click",function(){
	message.textContent = "";
	reset.textContent = "NEW COLORS";
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var  i =0 ;i < squares.length; i++){
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";

}) 
	for(var i=0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].addEventListener("click",function(){
			var clickedColor = this.style.background;
			if(clickedColor === pickedColor){
				message.textContent = "correct";
				reset.textContent = "Play again?";
				changeColors(pickedColor);
				h1.style.background = clickedColor;
				}else{
					this.style.background= "#232323";
					message.textContent = "Try Again"
				}
		});
	}





function changeColors(color){
	for(var i =0; i < squares.length; i++){
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = []
	for(var i =0; i < num; i++){
		arr.push(randomColor())
	}
	return arr;
}

function randomColor(){
	var r =Math.floor(Math.random() * 256);

	var g =Math.floor(Math.random() * 256);

	var b =Math.floor(Math.random() * 256);

	return "rgb(" + r +", " + g +", " + b + ")";
}