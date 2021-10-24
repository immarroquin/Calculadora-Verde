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
      <option id="select-sector" class='options' value="" disabled selected>Selecciona tu industria</option>
      ${sector.map((e, i) => `<option id="${i}" class='options'>${e}</option>`)}
    </select>
    <select id="select-state" class="selects browser-default  responsive ">
      <option class='options' value="" disabled selected>Selecciona tu Estado</option>
      ${dataJson.map((e, i) => `<option id="${i}" class='options'>${e.name_states}</option>`)}
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
