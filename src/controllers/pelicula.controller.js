const indexController = {};

indexController.obtenerPeliculas = (req, res) => {
    res.status(201).json({
            mensaje: "Obtener todas las peliculas",
    });
};

indexController.obtenerPeliculaPorId = (req, res) => {
    res.status(201).json({
            mensaje: "Obtener pelicula por Id",
    });
};

indexController.agregarPelicula = (req, res) => {
    res.status(201).json({
            mensaje: "Agregar pelicula",
    });
};

indexController.borrarPelicula = (req, res) => {
    res.status(201).json({
            "mensaje" : "Borrar pelicula",
    });
};

indexController.editarPelicula = (req, res) => {
    res.setHeader("Content-Type", "application/json;charset=utf-8");
    res.status(201).json("Editar pelicula");
};


module.exports = indexController;