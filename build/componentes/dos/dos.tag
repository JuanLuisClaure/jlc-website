const riot = require('riot')
<componente-dos>

  <div class="demo-card-wide mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title" style={ opts.datos.img[0].contenido }>
      <h2 class="mdl-card__title-text">{ opts.datos.titulo[0].contenido }</h2>
    </div>
    <div class="mdl-card__supporting-text">
      { opts.datos.texto[0].contenido }
    </div>
    <div class="mdl-card__actions mdl-card--border">
      <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
      { opts.datos.texto[1].contenido }
      </a>
    </div>
    <div class="mdl-card__menu">
      <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
        <i class="material-icons">{ opts.datos.svg[0].contenido }</i>
      </button>
    </div>
  </div>

<script>

</script>

<style>
  .demo-card-wide.mdl-card {
    width: 100%;
  }
  .demo-card-wide > .mdl-card__title {
    color: #fff;
    height: 176px;
  }
  .demo-card-wide > .mdl-card__menu {
    color: #fff;
  }
</style>
</componente-dos>
