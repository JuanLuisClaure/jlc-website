webpackJsonp([0],{

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(160);

__webpack_require__(161);

__webpack_require__(162);

var _dispatcher = __webpack_require__(28);

var _dispatcher2 = _interopRequireDefault(_dispatcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const riot = __webpack_require__(15);

riot.tag2('index', '<componente-uno></componente-uno> <componente-dos></componente-dos> <div id="unico"></div> <div id="unico"></div> <div id="unico"></div> <div id="unico"></div> <div id="unico"></div> <div id="unico"></div> <div id="unico"></div> <div id="unico"></div> <div id="unico"></div> <div id="unico"></div> <div id="unico"></div> <div id="unico"></div> <div id="unico"></div> <div id="unico"></div> <div id="unico"></div>', '', '', function (opts) {});

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const riot = __webpack_require__(15);

riot.tag2('saludo', '<div class="demo-card-wide mdl-card mdl-shadow--2dp"> <div class="mdl-card__title" riot-style="{opts.datos.img[0].contenido}"> <h2 class="mdl-card__title-text">{opts.datos.titulo[0].contenido}</h2> </div> <div class="mdl-card__supporting-text"> {opts.datos.texto[0].contenido} </div> <div class="mdl-card__actions mdl-card--border"> <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"> {opts.datos.texto[1].contenido} </a> </div> <div class="mdl-card__menu"> <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect"> <i class="material-icons">{opts.datos.svg[0].contenido}</i> </button> </div> </div>', 'saludo .demo-card-wide.mdl-card,[data-is="saludo"] .demo-card-wide.mdl-card{ width: 100%; } saludo .demo-card-wide > .mdl-card__title,[data-is="saludo"] .demo-card-wide > .mdl-card__title{ color: #fff; height: 176px; } saludo .demo-card-wide > .mdl-card__menu,[data-is="saludo"] .demo-card-wide > .mdl-card__menu{ color: red; }', '', function (opts) {});

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const riot = __webpack_require__(15);

riot.tag2('componente-uno', '<div class="flexContainer"> <button onclick="{activarCanvas.bind(tag, 0)}" type="button" name="button">ss</button> <button onclick="{activarCanvas.bind(tag, 1)}" type="button" name="button">ss</button> <button onclick="{activarCanvas.bind(tag, 2)}" type="button" name="button">sss</button> <button onclick="{activarCanvas.bind(tag, 3)}" type="button" name="button">ssss</button> <button onclick="{activarCanvas.bind(tag, 4)}" type="button" name="button">sssss</button> <button onclick="{crearCirculos.bind(tag, 5)}" type="button" name="button">circulos</button> <button onclick="{activarCanvas.bind(tag, 6)}" type="button" name="button">sssssss</button> <button onclick="{activarCanvas.bind(tag, 7)}" type="button" name="button">ssssssss</button> <button onclick="{activarCanvas.bind(tag, 8)}" type="button" name="button">sssssssss</button> <button onclick="{activarCanvas.bind(tag, 9)}" type="button" name="button">ssssssssss</button> </div>', 'componente-uno button,[data-is="componente-uno"] button{ background-color: white; color:red; } componente-uno .flexContainer,[data-is="componente-uno"] .flexContainer{ display: flex; flex-direction:row; } componente-uno .flexCenter,[data-is="componente-uno"] .flexCenter{ justify-content: center; }', '', function (opts) {
  const tag = this;

  tag.crearCirculos = n => {
    console.log('yeaas esto si sirve');
  };

  tag.activarCanvas = n => {
    let canvas = document.getElementById('myCanvas');
    canvas.classList.add('ani');
    canvas.classList.add('img-' + n);
    setTimeout(() => {
      canvas.classList.remove('img-' + n);
      canvas.classList.remove('ani');
    }, 10000);
  };
});

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const riot = __webpack_require__(15);

riot.tag2('componente-dos', '', '', '', function (opts) {
  const tag = this;

  function animate1() {
    let el = document.getElementById('unico');
    console.log(el);
    const typewriter = new Typewriter(el, {
      autoStart: true
    });
    console.log(typewriter);
    typewriter.typeString('Hello World!').pauseFor(2500).deleteAll().typeString('Strings can be removed').pauseFor(2500).deleteChars(7).typeString('altered!').start();
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
    });
  }

  tag.on('mount', animate1);
});

/***/ })

});
//# sourceMappingURL=0.map