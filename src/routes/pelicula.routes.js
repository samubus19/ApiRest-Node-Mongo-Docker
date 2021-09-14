const {Router} = require("express");

const router = Router();

const {obtenerPeliculas, 
    obtenerPeliculaPorId, 
    editarPelicula, 
    agregarPelicula, 
    borrarPelicula,
    testjwt } = require('../controllers/pelicula.controller');

router.get("/obtenerPeliculas", obtenerPeliculas);
router.get("/obtenerPeliculaPorId/:id", obtenerPeliculaPorId);
router.post("/agregarPelicula", agregarPelicula);
router.delete("/borrarPelicula/:id", borrarPelicula);
router.put("/editarPelicula/:id", editarPelicula);
router.get("/testjwt", testjwt);

module.exports = router;