const {Router} = require("express");

const router = Router();

const {crearUsuario, autenticarUsuario} = require("../controllers/autenticacion.controller");

router.post("/crearUsuario",crearUsuario);
router.get("/loginUsuario", autenticarUsuario);

module.exports = router;