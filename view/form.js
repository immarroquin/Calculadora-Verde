const dataJson = [
  {
    id_division: 1,
    name_division: "Baja California",
    name_states: "Baja California",
    vlr_kw_min: 0.687334,
    vlr_kw_max: 198.499,
  },
  {
    id_division: 1,
    name_division: "Baja California",
    name_states: "Baja California Sur",
    vlr_kw_min: 0.687334,
    vlr_kw_max: 198.499,
  },
  {
    id_division: 2,
    name_division: "Bajio",
    name_states: "Aguascalientes",
    vlr_kw_min: 0.958488,
    vlr_kw_max: 380.644,
  },
  {
    id_division: 2,
    name_division: "Bajio",
    name_states: "Guanajuato",
    vlr_kw_min: 0.958488,
    vlr_kw_max: 380.644,
  },
  {
    id_division: 2,
    name_division: "Bajio",
    name_states: "Queretaro",
    vlr_kw_min: 0.958488,
    vlr_kw_max: 380.644,
  },
  {
    id_division: 2,
    name_division: "Bajio",
    name_states: "Zacatecas",
    vlr_kw_min: 0.958488,
    vlr_kw_max: 380.644,
  },
  {
    id_division: 3,
    name_division: "Centro Occidente",
    name_states: "Colima",
    vlr_kw_min: 1.2879,
    vlr_kw_max: 510.319,
  },
  {
    id_division: 3,
    name_division: "Centro Occidente",
    name_states: "Michoacan",
    vlr_kw_min: 1.2879,
    vlr_kw_max: 510.319,
  },
  {
    id_division: 4,
    name_division: "Centro Oriente",
    name_states: "Distrito Federal",
    vlr_kw_min: 1.19831,
    vlr_kw_max: 474.958,
  },
  {
    id_division: 4,
    name_division: "Centro Oriente",
    name_states: "Estado de Mexico",
    vlr_kw_min: 1.19831,
    vlr_kw_max: 474.958,
  },
  {
    id_division: 4,
    name_division: "Centro Oriente",
    name_states: "Puebla",
    vlr_kw_min: 1.19831,
    vlr_kw_max: 474.958,
  },
  {
    id_division: 4,
    name_division: "Centro Oriente",
    name_states: "Tlaxcala",
    vlr_kw_min: 1.19831,
    vlr_kw_max: 474.958,
  },
  {
    id_division: 5,
    name_division: "Centro Sur",
    name_states: "Guerrero",
    vlr_kw_min: 1.35232,
    vlr_kw_max: 535.942,
  },
  {
    id_division: 5,
    name_division: "Centro Sur",
    name_states: "Morelos",
    vlr_kw_min: 1.35232,
    vlr_kw_max: 535.942,
  },
  {
    id_division: 6,
    name_division: "Golfo Centro",
    name_states: "San Luis Potosi",
    vlr_kw_min: 1.14776,
    vlr_kw_max: 386.271,
  },
  {
    id_division: 6,
    name_division: "Golfo Centro",
    name_states: "Tamaulipas",
    vlr_kw_min: 1.14776,
    vlr_kw_max: 386.271,
  },
  {
    id_division: 7,
    name_division: "Golfo Norte",
    name_states: "Coahuila",
    vlr_kw_min: 0.835309,
    vlr_kw_max: 280.957,
  },
  {
    id_division: 7,
    name_division: "Golfo Norte",
    name_states: "Nuevo LeÃġn",
    vlr_kw_min: 0.835309,
    vlr_kw_max: 280.957,
  },
  {
    id_division: 8,
    name_division: "Jalisco",
    name_states: "Jalisco",
    vlr_kw_min: 1.37403,
    vlr_kw_max: 544.071,
  },
  {
    id_division: 8,
    name_division: "Jalisco",
    name_states: "Nayarit",
    vlr_kw_min: 1.37403,
    vlr_kw_max: 544.071,
  },
  {
    id_division: 9,
    name_division: "Noroeste",
    name_states: "Sinaloa",
    vlr_kw_min: 0.794792,
    vlr_kw_max: 218.679,
  },
  {
    id_division: 9,
    name_division: "Noroeste",
    name_states: "Sonora",
    vlr_kw_min: 0.794792,
    vlr_kw_max: 218.679,
  },
  {
    id_division: 10,
    name_division: "Norte",
    name_states: "Chihuahua",
    vlr_kw_min: 1.30986,
    vlr_kw_max: 351.953,
  },
  {
    id_division: 10,
    name_division: "Norte",
    name_states: "Durango",
    vlr_kw_min: 1.30986,
    vlr_kw_max: 351.953,
  },
  {
    id_division: 11,
    name_division: "Oriente",
    name_states: "Hidalgo",
    vlr_kw_min: 1.30947,
    vlr_kw_max: 518.517,
  },
  {
    id_division: 11,
    name_division: "Oriente",
    name_states: "Veracruz",
    vlr_kw_min: 1.30947,
    vlr_kw_max: 518.517,
  },
  {
    id_division: 12,
    name_division: "Peninsular",
    name_states: "Campeche",
    vlr_kw_min: 1.00861,
    vlr_kw_max: 304.431,
  },
  {
    id_division: 12,
    name_division: "Peninsular",
    name_states: "Quintana Roo",
    vlr_kw_min: 1.00861,
    vlr_kw_max: 304.431,
  },
  {
    id_division: 12,
    name_division: "Peninsular",
    name_states: "Yucatan",
    vlr_kw_min: 1.00861,
    vlr_kw_max: 304.431,
  },
  {
    id_division: 13,
    name_division: "Sureste",
    name_states: "Chiapas",
    vlr_kw_min: 1.1418,
    vlr_kw_max: 452.586,
  },
  {
    id_division: 13,
    name_division: "Sureste",
    name_states: "Oaxaca",
    vlr_kw_min: 1.1418,
    vlr_kw_max: 452.586,
  },
  {
    id_division: 13,
    name_division: "Sureste",
    name_states: "Tabasco",
    vlr_kw_min: 1.1418,
    vlr_kw_max: 452.586,
  },
];

let energyValue; /* valor de consumo por año */
let months; /* numero de meses pagados */
let valuePerMonth; /* promedio pagado por mes en pesos mexicanos */

let kilowatsMin = 25; /* Hasta 25kwh se cobra un valor minimo de consumo, luego sube */
/* Más de 25kwh se cobra un valor mayor de consumo */
let consumedKilowats; /* Consumo de kilowats por mes */
const emitionFactor = 0.494;

const convert = (energyDate, monthsDate, stateDate) => {
  let objectState = dataJson.filter((e) => e.name_states==stateDate);
  let kilowatsMax = objectState[0].vlr_kw_max;
  valuePerMonth = energyDate / monthsDate;
  
  kilowatsMin = kilowatsMin * objectState[0].vlr_kw_min;
  if (valuePerMonth <= kilowatsMin) {
    consumedKilowats = valuePerMonth / kilowatsMin;
  } else {
    consumedKilowats = (valuePerMonth - kilowatsMin) / kilowatsMax;
    consumedKilowats += 25;
  }
  return (((consumedKilowats * emitionFactor) / 1000) * monthsDate); // Convertir el valo de kWh en MWh
 
};

let sector = [
  "Ocio y servicios al consumidor",
  "Instituciones",
  "Instituciones Financieras",
  "Construccion y materiales de construccion",
  "Venta minorista",
  "Bienes raices",
  "Consumo",
  "Telecomunicaciones, tecnologia y medios",
  "Materiales basicos",
  "Cuidado de la salud",
  "Automóviles, componentes y bienes duraderos",
  "Bienes de equipo y servicios industriales",
  "Energia(Petroleo y gas)",
  "Transporte",
  "Servicios Financieros",
  "Utilidades",
];

export const form = () => {
    const divForm = document.createElement('div');
    divForm.setAttribute('class', 'div-form ');
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
     <input id="energy-val" class="inputs1" type="text" placeholder="1000 MXN" /> 
     <p class= 'question '>Meses pagados al cfe durante el ultimo año</p> 
     <input id="month-val" class="inputs" type="text" placeholder="ingresa # de meses"/> 
     <p class= 'question '>¿Cual es tu consumo de gas anual?</p> 
     <input class="inputs" type="text" placeholder="1000 MXN"/> 
      <div class="div-btn-clo">
      <a href='#/solutions' id="btn-calculo" class="btn-clo waves-effect waves-light btn">CALCULAR</a>
      </div>
    </form>
    </div> 
    </div>`
    divForm.innerHTML = viewForm;

    divForm.querySelector("#select-state").addEventListener("change", () => {
      console.log(divForm.querySelector("#select-state").value);
      let newState = divForm.querySelector("#select-state").value;
      console.log(dataJson.filter((e) => e === newState));
    });
  
    divForm.querySelector("#btn-calculo").addEventListener("click", () => {
      console.log(divForm.querySelector("#energy-val").value);
      console.log(divForm.querySelector("#month-val").value);
      console.log(convert(divForm.querySelector("#energy-val").value, divForm.querySelector("#month-val").value, divForm.querySelector("#select-state").value))
    
    });

    return divForm 
}
