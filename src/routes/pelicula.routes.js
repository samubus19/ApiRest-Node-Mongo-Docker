const {Router} = require("express");

const router   = Router();

const {
    obtenerPeliculas, 
    obtenerPeliculaPorNombre, 
    editarPelicula, 
    agregarPelicula, 
    borrarPelicula,
    obtenerPeliculaPorId
    } = require('../controllers/pelicula.controller');

const {verificarToken} = require('../middlewares/autenticacion.middleware');

router.get("/obtenerPeliculas",verificarToken, obtenerPeliculas);
router.get("/obtenerPeliculaPorNombre/:nombre",verificarToken, obtenerPeliculaPorNombre);
router.get("/obtenerPeliculaPorId/:id",verificarToken, obtenerPeliculaPorId);
router.post("/agregarPelicula", agregarPelicula);
router.delete("/borrarPelicula/:id",verificarToken, borrarPelicula);
router.put("/editarPelicula/:id",verificarToken, editarPelicula);

// ,verificarToken
module.exports = router;