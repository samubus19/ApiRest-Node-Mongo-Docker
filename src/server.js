const express = require('express');
const morgan  = require('morgan');
const cors = require('cors');

//Initializations
const app  = express();

//Settings 

app.use(cors());

// Falta meter esta funcion en donde llamemos a las rutas,
// No se si es necesaria y si va a funcionar devido a que ya tenemos
// la validacion por token

// let listaBlanca = ['http://localhost:3000/']

// let OpcionesCors = {
//     origin: function (origin, cb){
//         if(listaBlanca.indexOf(origin)!== -1){
//             cb(null, true);
//         } else {
//             cb(new Error('Not allowed by CORS'))
//         }
//     }
// }

app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended : false}));
app.use(express.json());

//routes
app.use(require('./routes/pelicula.routes'));
app.use(require('./routes/autenticacion.routes'));


module.exports = app;