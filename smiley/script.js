let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');

var millisecondsToWait = 500;
setTimeout(function() {
  //hair
  context.beginPath();
  context.moveTo(140,15);
  context.lineTo(150,75);

  context.moveTo(165,15);
  context.lineTo(165,75);

  context.moveTo(178,15);
  context.lineTo(176,75);

  context.moveTo(180,15);
  context.lineTo(185,75);

  context.moveTo(197,15);
  context.lineTo(194,75);

  context.moveTo(206,15);
  context.lineTo(203,75);

  context.moveTo(219,15);
  context.lineTo(215,75);

  context.moveTo(234,15);
  context.lineTo(230,75);
  context.stroke();
  context.closePath();
  context.stroke();
}, millisecondsToWait);
setTimeout(function() {
  //ears
  context.beginPath();
  context.arc(80,150,50,0,2*Math.PI);
  context.fillStyle = "red";
  context.fill();
  context.closePath();
  context.stroke();

  context.beginPath();
  context.arc(320,150,50,0,2*Math.PI);
  context.fillStyle = "red";
  context.fill();
  context.closePath();
  context.stroke();
}, millisecondsToWait + 200);
setTimeout(function() {
  //smiley
  context.beginPath();
  context.arc(200,200,150,0,2*Math.PI);
  context.fillStyle = "#FFDF00";
  context.fill();
  context.closePath();
  context.stroke();
}, millisecondsToWait + 600);
setTimeout(function() {
  //eyes
  context.beginPath();
  context.arc(130,130,40,0,2*Math.PI);
  context.closePath();
  context.stroke();

  context.beginPath();
  context.arc(270,130,40,0,2*Math.PI);
  context.closePath();
  context.stroke();

  context.beginPath();
  context.arc(130,130,20,0,2*Math.PI);
  context.fillStyle = "black";
  context.fill();
  context.closePath();
  context.stroke();

  context.beginPath();
  context.arc(270,130,20,0,2*Math.PI);
  context.fillStyle = "black";
  context.fill();
  context.closePath();
  context.stroke();
}, millisecondsToWait + 1000);
setTimeout(function() {
  //eye reflection
  context.beginPath();
  context.arc(130,135,8,0,2*Math.PI);
  context.fillStyle = "white";
  context.fill();
  context.closePath();
  context.stroke();

  context.beginPath();
  context.arc(270,135,8,0,2*Math.PI);
  context.fillStyle = "white";
  context.fill();
  context.closePath();
  context.stroke();
}, millisecondsToWait + 1400);
setTimeout(function() {
  //mouth
  context.beginPath();
  context.arc(205,250,70,0,1*Math.PI);
  context.fillStyle = "white";
  context.fill();
  context.strokeStyle = "purple";
  context.closePath();
  context.stroke();
}, millisecondsToWait + 1800);
