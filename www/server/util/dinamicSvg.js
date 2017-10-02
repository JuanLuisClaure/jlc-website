"use strict";
'use stric'; // Get a reference to the canvas object

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight; // Create an empty project and a view for the canvas:

paper.setup(canvas); // Create a Paper.js Path to draw a line into it:

var transX = canvas.width * 0.5;
var transY = canvas.height * 0.5;
ctx.translate(transX, transY);
ctx.beginPath();
var ejeX = new paper.Path();
var ejeY = new paper.Path(); // Give the stroke a color

ejeX.strokeColor = 'white';
ejeX.strokeWidth = 0.5;
ejeY.strokeColor = 'white';
ejeY.strokeWidth = 0.5;
var x = new paper.Point(0, -2000);
var y = new paper.Point(0, 2000);
var m = new paper.Point(-2000, 0);
var n = new paper.Point(2000, 0);
ejeX.add(x, y);
ejeY.add(m, n);
var s = 0;
var z = 0;
var cir = new paper.Path.Circle({
  center: [s, z],
  radius: 30,
  strokeColor: 'green',
  strokeWidth: 1.5,
  fillColor: 'red'
});

canvas.onmousemove = function (e) {
  var pos = getMousePos(canvas, e);
  console.log();
};

paper.view.onFrame = function (e) {
  var dx = Math.random() * 2;
  var dy = Math.sin(dx);

  if (cir.position.x - cir.radius > window.innerWidth || cir.position.x - cir.radius < 0) {
    dx = -dx;
  }

  if (cir.position.y - cir.radius > window.innerHeight || cir.position.y - cir.radius < 0) {
    dy = -dy;
  }

  dx += dx;
  dy += dy;
};

function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left - transX,
    y: evt.clientY - rect.top - transY
  };
}

;