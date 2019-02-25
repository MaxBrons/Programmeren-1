const wrapper = document.getElementById("wrapper");
const myAssignment = document.getElementById("myAssignment");
const myAnswer = document.getElementById("myAnswer");
const feedback = document.getElementById("feedback");
const winLoseText = document.getElementById("winLoseText");

let mySum;
let sound = new Audio();
let array1;
function makeSum(){
  let a = Math.floor(Math.random() * 9 + 1);
  let b = Math.floor(Math.random() * 9 + 1);
  mySum = a * b;
  myAssignment.innerHTML = "<span style='color:red'>" + a + "</span>" + " <span id='x'>x</span> " + "<span style='color:blue'>" + b + "</span>" ;
  myAnswer.focus();
}

function keyPressed(evt){
  if (evt.keyCode == 13) {
    if (eval(mySum) == myAnswer.value) {
      myAnswer.style.backgroundColor = "green";
      feedback.src = "img/thumpsUp.jpg";
      winLoseText.innerHTML = "Correct!";
      winLoseText.style.color = "green";
      sound.src = "img/victory.mp3";
      sound.play();
    }
    else {
      myAnswer.style.backgroundColor = "red";
      feedback.src = "img/thumpsDown.jpg";
      winLoseText.innerHTML = "Dat was niet het juiste antwoord";
      winLoseText.style.color = "red";
      sound.src = "img/wrong.mp3";
      sound.play();
    }
    window.setTimeout(waiting, 2500);

  }
}

function makeSumMore(){
  let i = 0;
  setInterval(function(){
    if (i<5) {
      makeSum();
      i++;
    } else {
      clearInterval(this);
    }
  },170);

}

function waiting(){
  myAnswer.style.backgroundColor = "white";
  winLoseText.innerHTML = "";
  feedback.src = "";
  myAnswer.value = "";
  makeSum();
  makeSumMore();
}

makeSum();
makeSumMore();
myAnswer.addEventListener("keydown", keyPressed, false);
