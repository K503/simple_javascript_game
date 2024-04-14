const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const heading = document.querySelector("h1");
var player1 = Math.floor(Math.random() * 6) + 1;
var player2 = Math.floor(Math.random() * 6) + 1;

var diceImage1 = "dice" + player1 +".png";
var imageSource = "images/" + diceImage1;

var diceImage2 = "dice" + player2 + ".png";
var imageSource2 = "images/" + diceImage2;

img1.setAttribute("src", imageSource);
img2.setAttribute("src", imageSource2)
// function dice(player, image){
//     if(player === 1){
//     image.setAttribute("src", "./images/dice1.png")
//     } 
//     else if(player === 2){
//     image.setAttribute("src", "./images/dice2.png")
//     }
//     else if(player === 3){
//     image.setAttribute("src", "./images/dice3.png")
//     }
//     else if(player === 4){
//     image.setAttribute("src", "./images/dice4.png")
//     }
//     else if(player === 4){
//     image.setAttribute("src", "./images/dice4.png")
//     }
//     else if(player === 5){
//     image.setAttribute("src", "./images/dice5.png")
//     }
//     else{
//     image.setAttribute("src", "./images/dice6.png")
//     }
// }
function check(player1, player2){
    if(player1 > player2){
        heading.textContent = " player 1 wins"
    }
    else if(player1 === player2){
        heading.textContent = "Draw!!"
    }
    else{
        heading.textContent = "player 2 wins"
    }

 }
// dice(player1, img1);
// dice(player2, img2);
 check(player1, player2);

