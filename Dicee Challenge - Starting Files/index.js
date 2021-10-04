var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
console.log(randomNumber1);

var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice2.png

var randomImageSource = "images/" + randomDiceImage; // images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6
console.log(randomNumber2);

var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; // images/dice1.png - images/dice6.png

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


document.querySelector("h1").innerHTML = (randomNumber1 > randomNumber2) ? "Player 1 Wins!" :
                                         (randomNumber2 > randomNumber1) ? "Player 2 Wins!" : "Draw!"