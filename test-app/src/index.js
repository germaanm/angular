require('./database')
const express = require('express');
const app = express();
const morgan = require('morgan');

//Configuraciones
app.set('port', 3000)
app.set('json spaces', 2);


//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Rutas
app.use('/api/servicios', require('./routes/servicesRoute'));
app.use('/api/reservar', require('./routes/reservationRoute'));

//Empezando el servidor
app.listen(app.get('port'));
console.log("Mi primer servidor");