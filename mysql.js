const mysql = require('mysql');

const conection = mysql.createConnection({
    host: 'localhost', 
    user: 'root',
    password:'123456', 
    database: 'caribe',
})
conection.connect((error) => {
    if(error) throw error 
    console.log('la conexion funciona');
})

conection.end()