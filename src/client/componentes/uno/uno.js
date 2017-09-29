const riot = require('riot')
riot.tag2('componente-uno', '<div class="flexContainer"> <button onclick="{activarCanvas.bind(tag, 0)}" type="button" name="button">ss</button> <button onclick="{activarCanvas.bind(tag, 1)}" type="button" name="button">ss</button> <button onclick="{activarCanvas.bind(tag, 2)}" type="button" name="button">sss</button> <button onclick="{activarCanvas.bind(tag, 3)}" type="button" name="button">ssss</button> <button onclick="{activarCanvas.bind(tag, 4)}" type="button" name="button">sssss</button> <button onclick="{crearCirculos.bind(tag, 5)}" type="button" name="button">circulos</button> <button onclick="{activarCanvas.bind(tag, 6)}" type="button" name="button">sssssss</button> <button onclick="{activarCanvas.bind(tag, 7)}" type="button" name="button">ssssssss</button> <button onclick="{activarCanvas.bind(tag, 8)}" type="button" name="button">sssssssss</button> <button onclick="{activarCanvas.bind(tag, 9)}" type="button" name="button">ssssssssss</button> </div>', 'componente-uno button,[data-is="componente-uno"] button{ background-color: white; color:red; } componente-uno .flexContainer,[data-is="componente-uno"] .flexContainer{ display: flex; flex-direction:row; } componente-uno .flexCenter,[data-is="componente-uno"] .flexCenter{ justify-content: center; }', '', function(opts) {
const tag = tag

tag.on('mount', semetriaCanvas)

function Circulos(x, y, dx, dy, radius){
   tag.x       = x
   tag.y       = y
   tag.dx      = dx
   tag.dy      = dy
   tag.radius  = radius

   tag.draw = () => {
     tag.c.beginPath()
     tag.c.arc(tag.x, tag.y, tag.radius, 0, Math.PI * 2, false)
     tag.c.strokeStyle = 'white'
     tag.c.stroke()
   }

   tag.updatesd = () => {
     if(tag.x - tag.radius > window.innerWidth || tag.x - tag.radius < 0){
       tag.dx = -tag.dx
     }
     if(tag.y - tag.radius > window.innerHeight || tag.y - tag.radius < 0){
       tag.dy = -tag.dy
     }

     tag.dx += tag.dx
     tag.dy += tag.dy

     tag.draw()
   }
}

tag.crearCirculos = (n) => {

}

tag.activarCanvas = (n) => {
    let canvas = document.querySelector('canvas')
    canvas.classList.add('ani')
    canvas.classList.add('img-' + n)
    setTimeout(()=>{
      canvas.classList.remove('img-' + n)
      canvas.classList.remove('ani')
    },10000)
}

function semetriaCanvas(){
  let canvas = document.querySelector('canvas')
  tag.c = canvas.getContext('2d')
  canvas.width  = window.innerWidth
  canvas.height  = window.innerHeight
  let transX = canvas.width * 0.5
  let transY = canvas.height * 0.5
  tag.cte = new Circulos(200, 200, 30, 30, 30)

animate()
}

function animate(){
  requestAnimationFrame(animate)
  tag.c.clearRect(0, 0, window.innerWidth, window.innerHeight)
  tag.cte.updatesd()
}

});
