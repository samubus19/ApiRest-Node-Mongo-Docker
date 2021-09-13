const {Router} = require("express");

const router = Router();

const {obtenerPeliculas, obtenerPeliculaPorId, editarPelicula, agregarPelicula, borrarPelicula} = require('../controllers/index.controller');

router.get("/obtenerPeliculas", obtenerPeliculas);
router.get("/obtenerPeliculaPorId", obtenerPeliculasPorId);
router.post("/agregarPelicula", agregarPelicula);
router.delete("/borrarPelicula", borrarPelicula);
router.put("/editarPelicula", editarPelicula);

module.exports = router;