(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

const  routes  = require("./router.js");
const  formExport  = require("./view/form.js");

const init = () => {
  document.getElementById('containerAll').appendChild(formExport())
  routes(window.location.hash);
  window.addEventListener("hashchange", () => {
    routes(window.location.hash);
  });
};
window.addEventListener('load', init);
},{"./router.js":2,"./view/form.js":3}],2:[function(require,module,exports){
const  formExport  = require('./view/form.js') ;
const  solutions  = require('./view/solutions.js') ;

 const views = (hash) => {
  const containerRoute = document.getElementById('containerAll');
  containerRoute.innerHTML = '';

  switch (hash) {
    case '':
      containerRoute.appendChild(formExport());
      break;
    case '#/solutions':
      containerRoute.appendChild(solutions());
      break;
    default:
      containerRoute.innerHTML = 'Ups Error 404';
  }
};
 const routes = (hash) => {
    if (hash === '#/') {
      //si no funciona colocar #/ en ves de ''
      return views(hash);
    }
    if (hash === '#/solutions') {
      return views(hash);
    }
    return views(hash);
  };

  module.exports=routes;
},{"./view/form.js":3,"./view/solutions.js":4}],3:[function(require,module,exports){
const formExport = () => {
  const divForm = document.createElement("div");
  divForm.setAttribute("class", "div-form ");
  const viewForm = ` 
    <section class=" section-hdr center-align">
      <img src='img/logo.png' alt='logo' id='logo' class='responsive-img' width='100'/>
      <p class= 'title'>Caribe</p>
      <p class= 'sub-title'>Calcula tu huella de carbono</p>
    </section>
    <div class= ' div-selects responsive '>
    <select class="selects browser-default  responsive ">
      <option class='options' value="" disabled selected>Selecciona tu industria</option>
      <option class='options' value="1">Automóviles, componentes y bienes duraderos</option>
      <option class='options' value="2">Materiales basicos</option>
      <option class='options' value="3">Bienes de equipo y servicios industriales</option>
      <option class='options' value="4">Construccion y materiales de construccion</option>
      <option class='options' value="5">Consumo</option>
      <option class='options' value="6">Energia(Petroleo y gas)</option>
      <option class='options' value="7">Instituciones Financieras</option>
      <option class='options' value="8">Servicios Financieros</option>
      <option class='options' value="9">Materiales basicos</option>
      <option class='options' value="10">Materiales basicos</option>
      <option class='options' value="11">Materiales basicos</option>
      <option class='options' value="12">Materiales basicos</option>
    </select>
    <select class="selects browser-default  responsive ">
      <option class='options' value="" disabled selected>Selecciona tu Estado</option>
      <option class='options' value="1">Option 1</option>
      <option class='options' value="2">Option 2</option>
      <option class='options' value="3">Option 3</option>
    </select>
    </div>
    <div class=" container-form responsive">
    <div class="section-form ">
      <form  class="responsive ">
      <p class= 'question'>¿Cual es tu consumo de energia anual?</p>
       <input class="inputs1" type="text" placeholder="1000 MXN" /> 
       <p class= 'question '>¿Cual es tu consumo de agua anual?</p> 
       <input class="inputs" type="text" placeholder="1000 MXN"/> 
       <p class= 'question '>¿Cual es tu consumo de gas anual?</p> 
       <input class="inputs" type="text" placeholder="1000 MXN"/> 
        <div class="div-btn-clo">
        <a href='#/solutions' class="btn-clo waves-effect waves-light btn">CALCULAR</a>
        </div>
      </form>
    </div> 
    </div>`;
  divForm.innerHTML = viewForm;
  return divForm;
};

module.exports = formExport;

},{}],4:[function(require,module,exports){
const solutions = () => {
  const divSolutions = document.createElement("div");
  divSolutions.setAttribute("class", "div-solutions");
  const viewSolutions = ` 
    <section class=" section-hdr center-align">
      <img src='img/logo.png' alt='logo' id='logo' class='responsive-img' width='120'/>
      <p class= 'title'>Caribe</p>
      <p class= 'sub-title'>Tu huella de carbono es</p>
    </section>
    <div class=' content-result'>
  <h2 class= 'result'>23</h2>
  <p class='unit-mass'>gs</p>
</div>
<section class=" center-align">
<div class='content-equivalence'>
<h5>EQUIVALENCIA</h5>
 </div>
 <div class='content-solutions'>
<h5>Soluciones</h5>
 </div>
 <div class='content-saving'>
<h5>AHORRO</h5>
 </div>
</section>
    <section class=" section-hdr center-align">
    <a href='' class="btn-clo waves-effect waves-light btn">NUEVO CALCULO</a>
    </section>`;
  divSolutions.innerHTML = viewSolutions;
  return divSolutions;
};

module.exports = solutions;

},{}]},{},[1]);
