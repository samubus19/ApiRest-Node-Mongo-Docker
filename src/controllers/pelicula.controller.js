const indexController = {};
const puppeteer       = require('puppeteer');
const {ejecutarBot}   = require('../bot-scrapper');
const Pelicula        = require('../models/Pelicula');
const fs              = require('fs');
const { response } = require('express');

indexController.obtenerPeliculas = async(req, res) => {

    const peliculas = await Pelicula.find();
    return res.status(200).json(peliculas);

    // DESPUES HAY Q PONER LA VALIDACION DEL TOKEN, NO LA PUSE PORQ NO QUERIA ENVIAR UN OBJETO, DEJALO ASI POR EL MOMENTO

    // res.status(200).json({
    //         mensaje: "Obtener todas las peliculas",
    //         token : req.token
    // });
};

indexController.obtenerPeliculaPorId = async (req, res) => {
 
    const peliculas = await Pelicula.findById(req.params.id)
    return res.status(200).json(peliculas);

    // res.status(200).json({
    //         mensaje: "Obtener pelicula por Id",
    // });
};

indexController.agregarPelicula = async (req, res) => {

        fs.readFile('/usr/src/app/src/public/peliculas.json', async (err, data) => {
            if (err) throw err;
            let peliculas = JSON.parse(data);
            for(pelicula of peliculas) {
                const {nombre, director, URL_Imagen, genero, sinopsis} = pelicula;
                const nuevaPelicula = new Pelicula({
                    nombre : nombre,
                    director : director,
                    URL_Imagen : URL_Imagen,
                    genero : genero,
                    sinopsis : sinopsis
                });
                await nuevaPelicula.save();
            }
        
            return res.status(200).json("Peliculas agregadas correctamente");
        });
};

indexController.borrarPelicula = async (req, res) => {

    await Pelicula.findByIdAndDelete(req.params.id)
    
    //FALTA QUE DESPUES DE BORRAR PIDAMOS NUEVAMENTE EL LISTADO DE PELICULAS
    
    return res.status(200).json("Peliculas borrada correctamente");
};

indexController.editarPelicula = (req, res) => {

    

    const {nombre, director, URL_Imagen, genero, sinopsis} = req.body;
    // console.log({nombre, director, URL_Imagen, genero, sinopsis})
    Pelicula.findByIdAndUpdate(req.params.id, {nombre, director, URL_Imagen, genero, sinopsis})

    return res.status(200).json("Peliculas editada correctamente");
    // res.status(200).json({
    //     mensaje : "Editar pelicula"
    // });
};


module.exports = indexController;