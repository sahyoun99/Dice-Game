
 if (window.performance.navigation.type === 1) {
    rollDice();
  }
function rollDice(){
var rand1 = Math.floor(Math.random() *6 +1);
var rand2 = Math.floor(Math.random() *6 +1);
var randomimg1="images/dice" + rand1 +".png";
var randomimg2="images/dice" + rand2 +".png";
var img1 = document.querySelectorAll("img")[0];
var img2 = document.querySelectorAll("img")[1];
img1.setAttribute("src",randomimg1);
img2.setAttribute("src",randomimg2);
changeTitle(rand1,rand2);
}


function changeTitle(rand1,rand2){
    if(rand1 > rand2){
        document.querySelector(".refresh").innerHTML ="Player 1 wins!";
    }
    else  if(rand2 > rand1){
        document.querySelector(".refresh").innerHTML ="Player 2 wins!";
    }
    else{
        document.querySelector(".refresh").innerHTML = "Draw!";
    }

}
