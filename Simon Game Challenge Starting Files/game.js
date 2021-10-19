var buttonColours = ["red", "blue", "green", "yellow"]

var gamePattern = []

var userClickedPattern = []

// Detect the button that the user clicked on
$('.btn').on('click',function(){
    console.log("button got clicked")

    var userChosenColour = $(this).attr("id")
    console.log(userChosenColour)

    userClickedPattern.push(userChosenColour)
    console.log(userClickedPattern)

    animatePress(userChosenColour);
}); 

// Flash and display sound of the button
function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);

    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);
    console.log(gamePattern); 

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    
    playSound(randomChosenColour);
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play()
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
      }, 100);
}

nextSequence()