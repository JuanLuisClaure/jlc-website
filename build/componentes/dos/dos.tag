const riot = require('riot')

<componente-dos>
<script>
const tag = this


// From purple to green
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

      // setTimeout(()=>{animate2(el)},5000)

}

// From green to purple
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

</script>



</componente-dos>
