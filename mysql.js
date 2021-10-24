const mysql = require("mysql");

const conection = mysql.createConnection({
  host: "caribe.ce9uxjpzqoye.us-east-2.rds.amazonaws.com",
  user: "root",
  password: "Reactivas2021*",
  database: "caribe",
});

const conect = (conection) => {
  return new Promise((resolve, reject) => {
    conection.connect((error, conectionResult) => {
      if (error) {
        reject("No se realizo la conexion", error);
      } else {
        resolve(conectionResult);
      }
    });
  });
};

const dataQuery = (query) =>
  new Promise((resolve, reject) => {
    conection.query(query, (error, rows) => {
      if (error) {
        reject("No se pudo realizar la consulta", error);
      } else {
        resolve(rows);
      }
    });
  });

/* 1. El usuario ingresa el estado donde está la empresa
   2. Buscar la división en la que se encuentra el estado
   3. Tomar el valor minimo y máximo */
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
let energyValue; /* valor de consumo por año */
let months; /* numero de meses pagados */
let valuePerMonth; /* promedio pagado por mes en pesos mexicanos */
let state = [
  "Baja California",
  "Baja California Sur",
  "Aguascalientes",
  "Guanajuato",
  "Queretaro",
  "Zacatecas",
  "Colima",
  "Michoacan",
  "Distrito Federal",
  "Estado de Mexico",
  "Puebla",
  "Tlaxcala",
  "Guerrero",
  "Morelos",
  "San Luis Potosi",
  "Tamaulipas",
  "Coahuila",
  "Nuevo León",
  "Jalisco",
  "Nayarit",
  "Sinaloa",
  "Sonora",
  "Chihuahua",
  "Durango",
  "Hidalgo",
  "Veracruz",
  "Campeche",
  "Quintana Roo",
  "Yucatan",
  "Chiapas",
  "Oaxaca",
  "Tabasco",
]; /* estado donde se ubica la empresa */
let kilowatsMin = 25; /* Hasta 25kwh se cobra un valor minimo de consumo, luego sube */
/* Más de 25kwh se cobra un valor mayor de consumo */
let consumedKilowats; /* Consumo de kilowats por mes */
const emitionFactor = 0.494;

const convert = (energyDate, monthsDate, stateDate) => {
  return new Promise((resolve, reject) => {
    dataQuery(
      'SELECT division.id_division, name_division, states.name_states, vlr_kw_min, vlr_kw_max from caribe.division join caribe.states on states.id_division = division.id_division and name_states = "' +
        stateDate +
        '"'
    )
      .then((data) => {
        let kilowatsMax = data[0].vlr_kw_max;
        valuePerMonth = energyDate / monthsDate;

        kilowatsMin = kilowatsMin * data[0].vlr_kw_min;
        if (valuePerMonth <= kilowatsMin) {
          consumedKilowats = valuePerMonth / kilowatsMin;
        } else {
          consumedKilowats = (valuePerMonth - kilowatsMin) / kilowatsMax;
          consumedKilowats += 25;
        }
        return ((consumedKilowats * emitionFactor) / 1000) * monthsDate; // Convertir el valo de kWh en MWh
      })
      .then((co2Total) => {
        /* if (co2Total < 1) {
          console.log("co2 en kilogramos", co2Total * 1000);
          resolve(co2Total * 1000);
        } else {
          console.log("co2 en toneladas", co2Total);
          resolve(co2Total);
        } */
        resolve(co2Total)
        return co2Total;
      })
      .catch((error) => reject("Error interno ", error));
  });
};

const statesResult = async (query) =>
  await dataQuery(query).then((result) =>
    result.map((stateResult) => {
      //console.log(stateResult.name_states);
      return stateResult;
    })
  );

/* statesResult("select sector_name from caribe.solutions;").then((res) =>
  res.map((e) => {
    console.log(e.sector_name);
    return e.sector_name;
  })
); */
let newState
const newArr = ["Pera", "Manzana"];

/* funcion form */
const formExportMy = () => {
  const divForm = document.createElement("div");
  divForm.setAttribute("class", "div-form ");
  const viewForm = ` 
    <section class=" section-hdr center-align">
    <img src='img/logo.png' alt='logo' id='logo' class='responsive-img' width='100'/>
    <p class= 'title'>Caribe</p>
    <p class= 'sub-title'>Calcula tu huella de carbono</p>
      </section>
      <div class= ' div-selects responsive '>
      <select id ="select-sector" class="selects browser-default  responsive ">
      
        <option class='options' value="" disabled selected>Selecciona tu industria</option>
        ${sector.map(
          (e, i) => `<option id="${i}" class='options'>${e}</option>`
        )}
        </select>
      <select id="select-state" class="selects browser-default  responsive ">
      <option class='options' value="" disabled selected>Selecciona tu Estado</option>
      ${state.map((e, i) => `<option id="${i}" class='options'>${e}</option>`)}
    <option class='options' value="1">1</option>
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
        </div>`;
  divForm.innerHTML = viewForm;

  divForm.querySelector("#select-state").addEventListener("change", () => {
    console.log(divForm.querySelector("#select-state").value);
    newState = divForm.querySelector("#select-state").value;
  });

  convert(599421, 12, "Baja California")
  .then(
    (res) => {
      divForm.querySelector("#btn-calculo").addEventListener(("click"), () => {
        console.log(divForm.querySelector("#energy-val").value);
        console.log(divForm.querySelector("#month-val").value);
      });
      console.log(res);
    }
  ).catch((err) => console.log(err));
  
  return divForm;
};

/* Termina form */
module.exports = { formExportMy };


setTimeout(() => {
  conection.end();
}, 5000);
