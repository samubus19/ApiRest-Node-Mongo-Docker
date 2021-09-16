const {Router} = require("express");

const router   = Router();

const {
    obtenerPeliculas, 
    obtenerPeliculaPorId, 
    editarPelicula, 
    agregarPelicula, 
    borrarPelicula,
    } = require('../controllers/pelicula.controller');

const {verificarToken} = require('../middlewares/autenticacion.middleware');

router.get("/obtenerPeliculas", obtenerPeliculas);
router.get("/obtenerPeliculaPorId/:id", obtenerPeliculaPorId);
router.post("/agregarPelicula",verificarToken, agregarPelicula);
router.delete("/borrarPelicula/:id",verificarToken, borrarPelicula);
router.put("/editarPelicula/:id",verificarToken, editarPelicula);

// ,verificarToken
module.exports = router;