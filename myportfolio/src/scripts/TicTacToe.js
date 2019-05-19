var gameMarker

// document.getElementById("box1").addEventListener("click",placeMark)

// document.getElementById("box2").addEventListener("click",placeMark)

// document.getElementById("box3").addEventListener("click",placeMark)

// document.getElementById("box4").addEventListener("click",placeMark)

// document.getElementById("box5").addEventListener("click",placeMark)

// document.getElementById("box6").addEventListener("click",placeMark)


// .innerHTML()
document.getElementsByClassName("item").addEventListener("click",placeMark)

function changeMarkerToX() {
    gameMarker = "X"
    console.log ("click")
}

function changeMarkerToO(){
    gameMarker = "0"
    console.log ("click")
}

function placeMark(){ 
    console.log ("you did it")
}

