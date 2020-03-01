//create a random number between 1 and 99
var rand;
var points;
//capture input and compare input to random number
function playGame() {
  var guess = document.getElementById("user-input").value;
  if (guess == rand) {
    changeStatus("match");
  } else if (guess < rand && guess > 0) {
    --points;
    changeStatus("low");
  } else if (guess > rand) {
    --points;
    changeStatus("high");
  } else if (guess <= 0 || guess > 99) {
    changeStatus("invalid");
  } else changeStatus("error");

  document.getElementById("user-input").select();
}

//ADD SOUND FOR EACH OPTION??
function changeStatus(status) {
  switch (status) {
    case "high":
      gameMessage = "Too High!!";
      message = "Your score is now " + points;
      image = "img/high.jpg";
      break;

    case "low":
      gameMessage = "Too Low...";
      message = "Your score is now " + points;
      image = "img/low.jpg";
      break;

    case "match":
      gameMessage = "That's a Match!! Yay!!";
      message =
        "Congratulations!! You got a match. Your final score is " +
        points +
        "!!";
      image = "img/match.jpg";
      document.getElementById("lucky").className = "reset";
      document.getElementById("again").className = "play";
      break;

    case "invalid":
      gameMessage = "Oops!!";
      message = "Your guess was either blank or invalid... Try again!!";
      image = "img/invalid.jpg";
      break;

    case "error":
      gameMessage = "Huh?";
      message = "That's not a number. Please guess only numbers.";
      image = "img/error.jpg";
      break;
  }

  document.getElementById("game-message").innerText = gameMessage;
  document.getElementById("message").innerText = message;
  document.getElementById("game-image").src = image;
}

//start over
function resetGame() {
  rand = Math.ceil(Math.random() * 98);
  points = "15";
  alert(
    "Welcome to my Guessing Game: You will start the game with " +
      points +
      " points. Every wrong guess you make, one point is lost. The goal is to keep as many of your points as possible and avoid going into the negative!! Good luck and happy guessing!!"
  );
  document.getElementById("lucky").className = "play";
  document.getElementById("again").className = "reset";
  document.getElementById("game-image").src = "img/start.jpg";
  document.getElementById("game-message").innerText = "OMG... Let's Play!!";
  document.getElementById("message").innerText =
    "I am so excited. Can you tell??";
  document.getElementById("user-input").value = "";
}
