// const fs = require('fs');
// const Pelicula = require('./models/Pelicula');



// fs.readFile('/usr/src/app/src/public/peliculas.json', async (err, data) => {
//     if (err) throw err;
//     let peliculas = JSON.parse(data);
//     for(pelicula of peliculas) {
//         const {nombre, director, URL_Imagen, genero, sinopsis} = pelicula;
//         const nuevaPelicula = new Pelicula({
//             nombre : nombre,
//             director : director,
//             URL_Imagen : URL_Imagen,
//             genero : genero,
//             sinopsis : sinopsis
//         });
//         await nuevaPelicula.save();
//     }

//     return res.status(200).json("Peliculas agregadas correctamente");
// });