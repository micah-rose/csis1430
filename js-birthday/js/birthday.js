birthday();

function birthday() {
  var name = prompt("Hello!! What is your name?");
  var month = prompt(
    "What month were you born in? Please input a number value between 1 and 12 (no 0's for months 1-9):"
  );
  var day = prompt(
    "What day were you born on? Please input a number value between 1 and 31 (no 0's for days 1-9): "
  );

  var zod_signs = [
    "a Capricorn", //[0]
    "an Aquarius", //[1]
    "a Pisces", //[2]
    "an Aries", //[3]
    "a Taurus", //[4]
    "a Gemini", //5
    "a Cancer", //[6]
    "a Leo", //[7]
    "a Virgo", //[8]
    "a Libra", //[9]
    "a Scorpio", //[10]
    "a Sagittarius" //[11]
  ];

  switch (month) {
    case "1":
      if (day < 20)
        alert("Hello, " + name + "!! You are " + zod_signs[0] + "!!");
      else alert("Hello, " + name + "!! You are " + zod_signs[1] + "!!");
      break;

    case "2":
      if (day < 19)
        alert("Hello, " + name + "!! You are " + zod_signs[1] + "!!");
      else alert("Hello, " + name + "!! You are " + zod_signs[2] + "!!");
      break;

    case "3":
      if (day < 21)
        alert("Hello, " + name + "!! You are " + zod_signs[2] + "!!");
      else alert("Hello, " + name + "!! You are " + zod_signs[3] + "!!");
      break;

    case "4":
      if (day < 20)
        alert("Hello, " + name + "!! You are " + zod_signs[3] + "!!");
      else alert("Hello, " + name + "!! You are " + zod_signs[4] + "!!");
      break;

    case "5":
      if (day < 21)
        alert("Hello, " + name + "!! You are " + zod_signs[4] + "!!");
      else alert("Hello, " + name + "!! You are " + zod_signs[5] + "!!");
      break;

    case "6":
      if (day < 21)
        alert("Hello, " + name + "!! You are " + zod_signs[5] + "!!");
      else alert("Hello, " + name + "!! You are " + zod_signs[6] + "!!");
      break;

    case "7":
      if (day < 23)
        alert("Hello, " + name + "!! You are " + zod_signs[6] + "!!");
      else alert("Hello, " + name + "!! You are " + zod_signs[7] + "!!");
      break;

    case "8":
      if (day < 23)
        alert("Hello, " + name + "!! You are " + zod_signs[7] + "!!");
      else alert("Hello, " + name + "!! You are " + zod_signs[8] + "!!");
      break;

    case "9":
      if (day < 23)
        alert("Hello, " + name + "!! You are " + zod_signs[8] + "!!");
      else alert("Hello, " + name + "!! You are " + zod_signs[9] + "!!");
      break;

    case "10":
      if (day < 23)
        alert("Hello, " + name + "!! You are " + zod_signs[9] + "!!");
      else alert("Hello, " + name + "!! You are " + zod_signs[10] + "!!");
      break;

    case "11":
      if (day < 22)
        alert("Hello, " + name + "!! You are " + zod_signs[10] + "!!");
      else alert("Hello, " + name + "!! You are " + zod_signs[11] + "!!");
      break;

    case "12":
      if (day < 22)
        alert("Hello, " + name + "!! You are " + zod_signs[11] + "!!");
      else alert("Hello, " + name + "!! You are " + zod_signs[0] + "!!");
      break;
  }
}

//Aries (March 21-April 19)
//Taurus (April 20-May 20)
//Gemini (May 21-June 20)
//Cancer (June 21-July 22)
//Leo (July 23-August 22)
//Virgo (August 23-September 22)
//Libra (September 23-October 22)
//Scorpio (October 23-November 21)
//Sagittarius (November 22-December 21)
//Capricorn (December 22-January 19)
//Aquarius (January 20-February 18)
//Pisces (February 19-March 20)
