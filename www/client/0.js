webpackJsonp([0],{

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(184);

__webpack_require__(185);

var _dispatcher = __webpack_require__(28);

var _dispatcher2 = _interopRequireDefault(_dispatcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const riot = __webpack_require__(15);

riot.tag2('index', '<componente-uno></componente-uno>', '', '', function (opts) {});

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const riot = __webpack_require__(15);

riot.tag2('saludo', '<div class="demo-card-wide mdl-card mdl-shadow--2dp"> <div class="mdl-card__title" riot-style="{opts.datos.img[0].contenido}"> <h2 class="mdl-card__title-text">{opts.datos.titulo[0].contenido}</h2> </div> <div class="mdl-card__supporting-text"> {opts.datos.texto[0].contenido} </div> <div class="mdl-card__actions mdl-card--border"> <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"> {opts.datos.texto[1].contenido} </a> </div> <div class="mdl-card__menu"> <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect"> <i class="material-icons">{opts.datos.svg[0].contenido}</i> </button> </div> </div>', 'saludo .demo-card-wide.mdl-card,[data-is="saludo"] .demo-card-wide.mdl-card{ width: 100%; } saludo .demo-card-wide > .mdl-card__title,[data-is="saludo"] .demo-card-wide > .mdl-card__title{ color: #fff; height: 176px; } saludo .demo-card-wide > .mdl-card__menu,[data-is="saludo"] .demo-card-wide > .mdl-card__menu{ color: red; }', '', function (opts) {});

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const riot = __webpack_require__(15);

riot.tag2('componente-uno', '<div class="flexContainer"> <button onclick="{activarCanvas.bind(tag, 0)}" type="button" name="button">ss</button> <button onclick="{activarCanvas.bind(tag, 1)}" type="button" name="button">ss</button> <button onclick="{activarCanvas.bind(tag, 2)}" type="button" name="button">sss</button> <button onclick="{activarCanvas.bind(tag, 3)}" type="button" name="button">ssss</button> <button onclick="{activarCanvas.bind(tag, 4)}" type="button" name="button">sssss</button> <button onclick="{crearCirculos.bind(tag, 5)}" type="button" name="button">circulos</button> <button onclick="{activarCanvas.bind(tag, 6)}" type="button" name="button">sssssss</button> <button onclick="{activarCanvas.bind(tag, 7)}" type="button" name="button">ssssssss</button> <button onclick="{activarCanvas.bind(tag, 8)}" type="button" name="button">sssssssss</button> <button onclick="{activarCanvas.bind(tag, 9)}" type="button" name="button">ssssssssss</button> </div>', 'componente-uno button,[data-is="componente-uno"] button{ background-color: white; color:red; } componente-uno .flexContainer,[data-is="componente-uno"] .flexContainer{ display: flex; flex-direction:row; } componente-uno .flexCenter,[data-is="componente-uno"] .flexCenter{ justify-content: center; }', '', function (opts) {
  const tag = tag;
  tag.on('mount', semetriaCanvas);

  function Circulos(x, y, dx, dy, radius) {
    tag.x = x;
    tag.y = y;
    tag.dx = dx;
    tag.dy = dy;
    tag.radius = radius;

    tag.draw = () => {
      tag.c.beginPath();
      tag.c.arc(tag.x, tag.y, tag.radius, 0, Math.PI * 2, false);
      tag.c.strokeStyle = 'white';
      tag.c.stroke();
    };

    tag.updatesd = () => {
      if (tag.x - tag.radius > window.innerWidth || tag.x - tag.radius < 0) {
        tag.dx = -tag.dx;
      }

      if (tag.y - tag.radius > window.innerHeight || tag.y - tag.radius < 0) {
        tag.dy = -tag.dy;
      }

      tag.dx += tag.dx;
      tag.dy += tag.dy;
      tag.draw();
    };
  }

  tag.crearCirculos = n => {};

  tag.activarCanvas = n => {
    let canvas = document.querySelector('canvas');
    canvas.classList.add('ani');
    canvas.classList.add('img-' + n);
    setTimeout(() => {
      canvas.classList.remove('img-' + n);
      canvas.classList.remove('ani');
    }, 10000);
  };

  function semetriaCanvas() {
    let canvas = document.querySelector('canvas');
    tag.c = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let transX = canvas.width * 0.5;
    let transY = canvas.height * 0.5;
    tag.cte = new Circulos(200, 200, 30, 30, 30);
    animate();
  }

  function animate() {
    requestAnimationFrame(animate);
    tag.c.clearRect(0, 0, window.innerWidth, window.innerHeight);
    tag.cte.updatesd();
  }
});

/***/ })

});
//# sourceMappingURL=0.map