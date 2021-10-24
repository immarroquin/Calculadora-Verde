const mysql = require("mysql");

const conection = mysql.createConnection({
  host: "caribe.ce9uxjpzqoye.us-east-2.rds.amazonaws.com",
  user: "root",
  password: "Reactivas2021*",
  database: "caribe",
});
conection.connect((error) => {
  if (error) throw error;
  console.log("la conexion funciona");
});

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

let energyValue; /* valor de consumo por año */
let months; /* numero de meses pagados */
let valuePerMonth; /* promedio pagado por mes en pesos mexicanos */
let state; /* estado donde se ubica la empresa */
let kilowatsMin = 25; /* Hasta 25kwh se cobra un valor minimo de consumo, luego sube */
/* Más de 25kwh se cobra un valor mayor de consumo */
let consumedKilowats; /* Consumo de kilowats por mes */
const emitionFactor = 0.494;

const convert = (energyDate, monthsDate, stateDate) => {
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
      return (consumedKilowats * emitionFactor) / 1000; // Convertir el valo de kWh en MWh
    })
    .then((co2Total) => {
      if (co2Total < 1) {
        console.log("co2 en kilogramos", co2Total * 1000);
      } else {
        console.log("co2 en toneladas", co2Total);
      }
    })
    .catch((error) => console.log(error));
};

convert(599421, 12, "Distrito Federal");

module.exports = convert;

setTimeout(() => {
  conection.end();
}, 100);
