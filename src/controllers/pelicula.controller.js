const indexController = {};

indexController.obtenerPeliculas = (req, res) => {
    return res.json({
        mensaje : "Obtener todas las peliculas"
    });
};

indexController.obtenerPeliculaPorId = (req, res) => {
    return res.json({
        mensaje : "Obtener pelicula por ID"
    });
};

indexController.agregarPelicula = (req, res) => {
    return res.json({
        mensaje : "Agregar pelicula"
    });
};

indexController.borrarPelicula = (req, res) => {
    return res.json({
        mensaje : "Borrar pelicula"
    });
};

indexController.editarPelicula = (req, res) => {
    return res.json({
        mensaje : "Editar pelicula"
    });
};


module.exports = indexController;