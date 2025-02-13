function moveRandomEL(elm) {
  elm.style.position = "absolute";
  elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
  elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveRandom = document.querySelector("#move-random");

moveRandom.addEventListener("mouseenter", function (e) {
  moveRandomEL(e.target);
});


//let play = document.getElementById("play");
//function playMusic() {
  //let audio = new Audio("A.mp3");
  //audio.play();
//}
//play.addEventListener("click", playMusic);
