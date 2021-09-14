const {Router} = require("express");

const router = Router();

const {obtenerPeliculas, 
    obtenerPeliculaPorId, 
    editarPelicula, 
    agregarPelicula, 
    borrarPelicula, } = require('../controllers/index.controller');

router.get("/obtenerPeliculas", obtenerPeliculas);
router.get("/obtenerPeliculaPorId/:id", obtenerPeliculaPorId);
router.post("/agregarPelicula", agregarPelicula);
router.delete("/borrarPelicula/:id", borrarPelicula);
router.put("/editarPelicula/:id", editarPelicula);


module.exports = router;