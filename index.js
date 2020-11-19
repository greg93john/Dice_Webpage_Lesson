var pNum1 = Math.floor(1 + (Math.random() * 6));
document.querySelector(".img1").setAttribute("src", "images/dice"+pNum1+".png");
var pNum2 = Math.floor(1 + (Math.random() * 6));
document.querySelector(".img2").setAttribute("src", "images/dice"+pNum2+".png");
if(pNum1 !== pNum2) {
  document.querySelector("h1").innerText = "Player " + (pNum1 > pNum2 ? "1" : "2") + " Wins!";
} else{
  document.querySelector("h1").innerText = "It's a Draw!";
}

document.querySelector(".reroll").addEventListener("click", reroll);

function reroll() {
  var pNum1 = Math.floor(1 + (Math.random() * 6));
  document.querySelector(".img1").setAttribute("src", "images/dice"+pNum1+".png");
  var pNum2 = Math.floor(1 + (Math.random() * 6));
  document.querySelector(".img2").setAttribute("src", "images/dice"+pNum2+".png");
  if(pNum1 !== pNum2) {
    document.querySelector("h1").innerText = "Player " + (pNum1 > pNum2 ? "1" : "2") + " Wins!";
  } else{
    document.querySelector("h1").innerText = "It's a Draw!";
  }
  document.querySelector(".reroll").innerText = "Re-roll Dice";
}
