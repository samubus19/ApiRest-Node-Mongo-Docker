const indexController = {};
const puppeteer       = require('puppeteer');
const {ejecutarBot}   = require('../bot-scrapper');
const Pelicula        = require('../models/Pelicula');

indexController.obtenerPeliculas = async(req, res) => {

    try {
        const peliculas = await Pelicula.find();
        return res.status(200).json(peliculas);

    } catch(err) {

        return res.status(500).json(err);

    }

    // DESPUES HAY Q PONER LA VALIDACION DEL TOKEN, NO LA PUSE PORQ NO QUERIA ENVIAR UN OBJETO, DEJALO ASI POR EL MOMENTO

};

indexController.obtenerPeliculaPorId = async (req, res) => {

    try {
        const pelicula = await Pelicula.findById(req.params.id);
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

    try {
        const {nombre, director, imgUrl, genero, sinopsis} = req.body;
        const nuevaPelicula = new Pelicula({nombre: nombre, director: director, URL_Imagen : imgUrl, genero: genero, sinopsis: sinopsis});
        // if(await nuevaPelicula.findOne({nombre: nombre, director: director, URL_Imagen : imgUrl, genero: genero, sinopsis: sinopsis})) {
        //     return res.status(400).json("La pelicula ya existe");
        // }
        await nuevaPelicula.save();
        // return res.status(200).json("Pelicula creada correctamente");
        return res.status(201).json("Pelicula creada correctamente");

    } catch(err) {
        return res.status(500).json(err);
    }

};

indexController.borrarPelicula = async (req, res) => {
    
    try {
        
        await Pelicula.findByIdAndDelete(req.params.id);
        
        //FALTA QUE DESPUES DE BORRAR PIDAMOS NUEVAMENTE EL LISTADO DE PELICULAS
        
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