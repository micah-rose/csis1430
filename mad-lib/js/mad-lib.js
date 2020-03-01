var name1 = prompt("Please Enter a Name that's masculine: ");
var name2 = prompt("Please Enter another Name that's feminine:  ");
var title = prompt("Please Enter a title (i.e. - friend, brother, etc.): ");
var adj1 = prompt("Please Enter an Adjective: ");
var noun1 = prompt("Please Enter a Noun (singular): ");
var holiday = prompt("Please Enter your favorite holiday: ");
var noun2 = prompt("Please Enter an Object of Small Size: ");
var verb1 = prompt("Please Enter a Verb: ");
var noun3 = prompt("Please Enter an Object of Large Size: ");
var number1 = prompt("Please Enter a Number: ");
var event1 = prompt("Please Enter an Event (i.e. - concert, party, etc.: ");
var number2 = prompt("Please Enter another Number: ");
var adj2 = prompt("Please Enter another Adjective: ");
var noun4 = prompt("Please enter another Noun (plural): ");
var verb2 = prompt("Please Enter a Verb ending in ING: ");
var number3 = prompt("Please enter another Number: ");
var verb3 = prompt("Please Enter another Verb: ");
var verb4 = prompt("Please Enter another Verb ending in ING: ");
var color = prompt("Please Enter a Color: ");
var noun5 = prompt("Please Enter another Noun (singular): ");
var animal = prompt("Please Enter an Animal (singular): ");

var part1 =
  "Last night was one for the books. " +
  name1 +
  " and his " +
  title +
  " ran into some really " +
  adj1 +
  " " +
  noun1 +
  "s. " +
  name1 +
  "'s older sister, " +
  name2 +
  ", knew these " +
  noun1 +
  "s and warned him about them last " +
  holiday +
  ". Not wanting any trouble, " +
  name1 +
  " and his " +
  title +
  " started to make a deal with the " +
  noun1 +
  "s. If they would let them go unharmed and not take all the " +
  noun2 +
  " in their pockets, they would " +
  verb1 +
  " their " +
  noun3 +
  ". After " +
  number1 +
  " hours of discussion, the group of " +
  noun1 +
  "s agreed to " +
  name1 +
  " and his " +
  title +
  "'s terms.";

var part2 =
  "Thinking about how that was the craziest experience ever, " +
  name1 +
  " and his " +
  title +
  " stumbled upon a carnival of at least " +
  number2 +
  " " +
  noun4 +
  ". " +
  "Intrigued by this sight, " +
  name1 +
  " and his " +
  title +
  " decided to " +
  verb3 +
  " the " +
  event1 +
  ". After about " +
  number3 +
  " minutes of " +
  verb4 +
  " they remembered that they were late for " +
  name2 +
  "'s " +
  event1 +
  ". Just as the two comrades were arriving to the " +
  event1 +
  "... " +
  name1 +
  " opened his eyes to the sound of a " +
  animal +
  " sitting outside his window. Turns out his crazy night was only a dream.";

function madLib() {
  document.getElementById("title").innerText = "One Crazy Night for " + name1;
  document.getElementById("part1").innerText = part1;
  document.getElementById("part2").innerText = part2;
}
