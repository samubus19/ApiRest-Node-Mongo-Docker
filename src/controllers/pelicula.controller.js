const indexController = {};
const puppeteer       = require('puppeteer');
const {ejecutarBot}   = require('../bot-scrapper');
const Pelicula        = require('../models/Pelicula');
const fs              = require('fs');

indexController.obtenerPeliculas = (req, res) => {
    res.status(200).json({
            mensaje: "Obtener todas las peliculas",
            token : req.token
    });
};

indexController.obtenerPeliculaPorId = (req, res) => {
    res.status(200).json({
            mensaje: "Obtener pelicula por Id",
    });
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

indexController.borrarPelicula = (req, res) => {
    res.status(200).json({
            "mensaje" : "Borrar pelicula",
    });
};

indexController.editarPelicula = (req, res) => {
    res.status(200).json({
        mensaje : "Editar pelicula"
    });
};


module.exports = indexController;