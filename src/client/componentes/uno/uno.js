const riot = require('riot')
riot.tag2('componente-uno', '<div class="flexContainer"> <button onclick="{activarCanvas.bind(tag, 0)}" type="button" name="button">ss</button> <button onclick="{activarCanvas.bind(tag, 1)}" type="button" name="button">ss</button> <button onclick="{activarCanvas.bind(tag, 2)}" type="button" name="button">sss</button> <button onclick="{activarCanvas.bind(tag, 3)}" type="button" name="button">ssss</button> <button onclick="{activarCanvas.bind(tag, 4)}" type="button" name="button">sssss</button> <button onclick="{crearCirculos.bind(tag, 5)}" type="button" name="button">circulos</button> <button onclick="{activarCanvas.bind(tag, 6)}" type="button" name="button">sssssss</button> <button onclick="{activarCanvas.bind(tag, 7)}" type="button" name="button">ssssssss</button> <button onclick="{activarCanvas.bind(tag, 8)}" type="button" name="button">sssssssss</button> <button onclick="{activarCanvas.bind(tag, 9)}" type="button" name="button">ssssssssss</button> </div>', 'componente-uno button,[data-is="componente-uno"] button{ background-color: white; color:red; } componente-uno .flexContainer,[data-is="componente-uno"] .flexContainer{ display: flex; flex-direction:row; } componente-uno .flexCenter,[data-is="componente-uno"] .flexCenter{ justify-content: center; }', '', function(opts) {
const tag = this

tag.crearCirculos = (n) => {

console.log('yeaas esto si sirve');

}

tag.activarCanvas = (n) => {
    let canvas = document.getElementById('myCanvas')
    canvas.classList.add('ani')
    canvas.classList.add('img-' + n)
    setTimeout(()=>{
      canvas.classList.remove('img-' + n)
      canvas.classList.remove('ani')
    },10000)
}

});
