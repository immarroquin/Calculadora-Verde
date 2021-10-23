/*  
// se pregunta el sector de la empresa (solo para la parte de las soluciones)

1. Recibe valor de consumo cfe 12m (pago de energía en pesos mexicanos)
2. Recibe el número de meses pagados (average)
3. Se calcula el promedio gastado por mes en pesos mexicanos
4. Recibe el estado donde se ubica la empresa


Si el número es muy pequeño en toneladas de CO2 ponerlo en kg (para que se vea mas grande)
*/

/* Se convierte el valor pagado en energia a Mw/h */

let energyValue;  /* valor de consumo por año */
let months;  /* numero de meses pagados */
let valuePerMonth; /* promedio pagado por mes en pesos mexicanos */
let state; /* estado donde se ubica la empresa */
let kilowatsMin = 25; /* Hasta 25kwh se cobra un valor minimo de consumo, luego sube */
const kilowatsMax = 474.96; /* Más de 25kwh se cobra un valor mayor de consumo */
let consumedKilowats;  /* Consumo de kilowats por mes */
const emitionFactor = 0.494;

const convert = (energyDate, monthsDate, stateDate) => {
    valuePerMonth = energyDate / monthsDate;
    if (stateDate === 'DF') {
        kilowatsMin = kilowatsMin * 1.1983;
        if (valuePerMonth <= kilowatsMin) {
            consumedKilowats = valuePerMonth / kilowatsMin;
        } else {
            consumedKilowats = (valuePerMonth - kilowatsMin) / kilowatsMax;
            consumedKilowats += 25;
        }
    }
    return (consumedKilowats * emitionFactor) / 1000;
}

console.log(convert(36301, 7, 'DF'))