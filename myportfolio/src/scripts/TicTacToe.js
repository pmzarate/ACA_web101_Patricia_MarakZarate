var gameMarker = "X";

// document.getElementById("box1").addEventListener("click",placeMark)

// document.getElementById("box2").addEventListener("click",placeMark)

// document.getElementById("box3").addEventListener("click",placeMark)

// document.getElementById("box4").addEventListener("click",placeMark)

// document.getElementById("box5").addEventListener("click",placeMark)

// document.getElementById("box6").addEventListener("click",placeMark)

// document.getElementById("box7").addEventListener("click",placeMark)

// document.getElementById("box8").addEventListener("click",placeMark)

// document.getElementById("box9").addEventListener("click",placeMark)

function changeMarkerToX() {
	gameMarker = "X";
	console.log("click");
}

function changeMarkerToO() {
	gameMarker = "O";
	console.log("click");
}

function placeMark(myId) {
	document.getElementById(myId).innerHTML = gameMarker;
	console.log("you did it");
}

