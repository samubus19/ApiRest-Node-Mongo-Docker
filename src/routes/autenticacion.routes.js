const {Router} = require("express");

const router = Router();

const {getToken} = require("../controllers/autenticacion.controller");

router.get("/getToken",getToken);

module.exports = router;