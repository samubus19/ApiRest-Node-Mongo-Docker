const mongoose = require('mongoose');
const puppeteer = require('puppeteer');
const Pelicula  = require('./models/Pelicula');
const funcion = {};

funcion.ejecutarBot = async () => {

    const browser = await puppeteer.launch({headless: true});
    const page    = await browser.newPage();
    await page.goto('https://cuevana3.io/');

    const enlaces = await page.evaluate(() => {
        const elements = document.querySelectorAll('.home-movies .MovieList li div a');

        const links = [];
        elements.forEach((element) => links.push(element.href));

        return links;
    });

    const listaPeliculas = [];

    // funcion para obtener el enlace de cada reproductor
    for (enlace of enlaces) {
        await page.goto(enlace);
        //console.log(enlace);
        const pelicula = await page.evaluate(() => {
            
            const nuevaPelicula = {
                nombre     : document.querySelector('.Title').innerHTML,
                director   : document.querySelector('.AAIco-adjust span').innerHTML,
                URL_Imagen : document.querySelector('img').getAttribute("src"),
                genero     : document.querySelector('.AAIco-adjust a').innerHTML,
                sinopsis   : document.querySelector('.Description p').innerHTML,
            };
            
            return nuevaPelicula;
        });

        listaPeliculas.push(pelicula);
        
    }
    // await console.log(listaPeliculas);
    await browser.close();
    return listaPeliculas;
}



module.exports = funcion;

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