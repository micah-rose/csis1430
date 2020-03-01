//JAVASCRIPT STUFF

//toggleMembers();
function pictureSwap() {
  if (
    document.getElementById("euro-pic").attributes[1].nodeValue ==
    "img/europe1.jpg"
  ) {
    document.getElementById("euro-pic").src = "img/europe2.jpg";
  } else {
    document.getElementById("euro-pic").src = "img/europe1.jpg";
  }
}

function toggleMembers() {
  if (document.getElementById("members").className == "hide") {
    document.getElementById("members").className = "";
    document.getElementById("member-heading").innerText = "Hide Members";
  } else {
    document.getElementById("members").className = "hide";
    document.getElementById("member-heading").innerText = "Show Members";
  }
}
