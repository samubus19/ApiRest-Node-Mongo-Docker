const jwt = require("jsonwebtoken");
const jwtAutenticador = {};

jwtAutenticador.verificarToken = (req, res, next) => {

    next();
}

module.exports = jwtAutenticador;