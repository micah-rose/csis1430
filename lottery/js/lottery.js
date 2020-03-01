var userNum = prompt("How many numbers do you want to pick?");
var picks = [];
var lotto = "";

//while ((userNum = 0)) {
//  document.getElementById("titleMessage").innerText =
//    "Lottery Ticket Generator";
//  lotto =
//    "I see you don't want to play at this time. If you change your mind, click the button below!!";
//}
if (userNum === "") {
  lotto =
    "Ummm... You didn't enter anything. Please click the button below to pick a number.";
} else if (userNum <= 16) {
  for (var i = 0; i < userNum; i++) {
    picks[i] = Math.ceil(Math.random() * 100);
  }

  for (var i = 0; i < picks.length; i++) {
    if (i == 0) {
      lotto += picks[i];
    } else {
      lotto += "-" + picks[i];
    }
  }
} else if (userNum > 16) {
  lotto =
    "We are sorry, there are no picks with that many numbers. Please pick a new number less than 17.";
} else {
  lotto = "Please pick a new number. What you entered is not valid.";
}

function displayLotto() {
  document.getElementById("titleMessage").innerText =
    "Your Lottery Number Is:  ";
  document.getElementById("lottoNum").innerText = lotto;
}
