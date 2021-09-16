const indexController = {};
const puppeteer       = require('puppeteer');
const {ejecutarBot}   = require('../bot-scrapper');
const Pelicula        = require('../models/Pelicula');

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