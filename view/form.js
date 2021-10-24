/* const convert = require("../mysql.js");

convert(599421, 12, "Distrito Federal");
 */
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
