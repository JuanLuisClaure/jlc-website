'use stric'


// Get a reference to the canvas object
let canvas = document.getElementById('myCanvas');
let ctx    = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

// Create an empty project and a view for the canvas:
paper.setup(canvas);
// Create a Paper.js Path to draw a line into it:






let transX = canvas.width * 0.5
let transY = canvas.height * 0.5


ctx.translate(transX, transY);

ctx.beginPath()
let ejeX = new paper.Path();
let ejeY = new paper.Path();

// Give the stroke a color
ejeX.strokeColor = 'white';
ejeX.strokeWidth = 0.5;
ejeY.strokeColor = 'white';
ejeY.strokeWidth = 0.5;

let x = new paper.Point(0, -2000);
let y = new paper.Point(0,  2000);

let m = new paper.Point(-2000, 0)
let n = new paper.Point( 2000, 0)

ejeX.add(x, y)

ejeY.add(m, n)


let s = 0
let z = 0


let cir = new paper.Path.Circle({
    center: [s, z],
    radius: 30,
    strokeColor: 'green',
    strokeWidth:  1.5,
    fillColor: 'red'
});



canvas.onmousemove = function(e) {
    let pos = getMousePos(canvas, e)
    console.log();
}





paper.view.onFrame = (e)=>{

  let dx = Math.random() * 2
  let dy = Math.sin(dx)

       if(cir.position.x - cir.radius > window.innerWidth || cir.position.x - cir.radius < 0){
         dx = -dx
       }
       if(cir.position.y - cir.radius > window.innerHeight || cir.position.y - cir.radius < 0){
         dy = -dy
       }

       dx += dx
       dy += dy

}






    function getMousePos(canvas, evt) {
        let rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left - transX,
            y: evt.clientY - rect.top - transY
          }
        };
