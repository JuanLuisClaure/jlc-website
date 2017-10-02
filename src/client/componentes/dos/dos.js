const riot = require('riot')

riot.tag2('componente-dos', '', '', '', function(opts) {
const tag = this

function animate1() {

  let el = document.getElementById('unico')
  console.log(el);
  const typewriter = new Typewriter(el, {
      autoStart:true
  });
  console.log(typewriter);
  typewriter.typeString('Hello World!')
      .pauseFor(2500)
      .deleteAll()
      .typeString('Strings can be removed')
      .pauseFor(2500)
      .deleteChars(7)
      .typeString('altered!')
      .start();

}

function animate2(el) {
  dynamics.animate(el, {
  translateX: 350,
  scale: 2,
  opacity: 0.5
}, {
  type: dynamics.spring,
  frequency: 200,
  friction: 200,
  duration: 1500
})
}

tag.on('mount' , animate1)

});
