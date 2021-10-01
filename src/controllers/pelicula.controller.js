const indexController = {};
const puppeteer       = require('puppeteer');
const {ejecutarBot}   = require('../bot-scrapper');
const Pelicula        = require('../models/Pelicula');
const fs              = require('fs');

indexController.obtenerPeliculas = async(req, res) => {

    try {
        const peliculas = await Pelicula.find();
        return res.status(200).json(peliculas);

    } catch(err) {

        return res.status(500).json(err);

    }

    // DESPUES HAY Q PONER LA VALIDACION DEL TOKEN, NO LA PUSE PORQ NO QUERIA ENVIAR UN OBJETO, DEJALO ASI POR EL MOMENTO

};

indexController.obtenerPeliculaPorNombre = async (req, res) => {

    try {
    const pelicula = await Pelicula.find({'nombre': {'$regex': req.params.nombre , '$options': 'i'}});
        await console.log(pelicula);
        if(pelicula) {
            return res.status(200).json(pelicula);
        } else {
            return res.status(404).json({
                mensaje : "No se ha encontrado la pelicula"
            })
        }

    } catch(err) {
        return res.status(500).json(err);
    }

};

indexController.agregarPelicula = async (req, res) => {

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

    try {
        const {nombre, director, imgUrl, genero, sinopsis} = req.body;
        const nuevaPelicula = new Pelicula({nombre: nombre, director: director, imgUrl: imgUrl, genero: genero, sinopsis: sinopsis});

        await nuevaPelicula.save();
        await res.status(200).json("Pelicula creada correctamente");

    } catch(err) {
        console.log(err);
        return res.sendStatus(500);
    }

};

indexController.borrarPelicula = async (req, res) => {
    
    try {
        
        await Pelicula.findByIdAndDelete(req.params.id);
        return res.status(200).json("Pelicula borrada correctamente");
        
    } catch(err) {
        return res.status(500).json(err);
    }
    
};

indexController.editarPelicula = (req, res) => {

    try {
        const {nombre, director, URL_Imagen, genero, sinopsis} = req.body;
        Pelicula.findByIdAndUpdate(req.params.id, {nombre, director, URL_Imagen, genero, sinopsis});
    
        return res.status(200).json("Pelicula editada correctamente");

    } catch(err) {
        return res.status(500).json(err);
    }

};

module.exports = indexController;

