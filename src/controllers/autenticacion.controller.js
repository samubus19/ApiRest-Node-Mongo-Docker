const autenticacionController = {};
const Usuario                 = require('../models/Usuario');
const jwt                     = require('jsonwebtoken');
const {SECRET_KEY}            = process.env;

autenticacionController.crearUsuario = async (req, res) => {
    const {usuario, contraseña} = req.body;
    
    const nuevoUsuario = new Usuario({
        user : usuario,
        password : contraseña
    });

    const nombreUsuario = await Usuario.findOne({ user: usuario });
    if (nombreUsuario) {
        return res.json("Ya existe este usuario");

    } else {
        nuevoUsuario.password = await nuevoUsuario.encryptPassword(contraseña);
        await nuevoUsuario.save();
        return res.status(201).json("Usuario creado correctamente");
    }
}

autenticacionController.autenticarUsuario = async (req, res) => {
    const usuario = await Usuario.findOne({ user: req.body.usuario });
    if(!usuario) {
        return res.status(404).send("El usuario no existe");
    }
    const contraseniaValida = await usuario.matchPassword(req.body.contraseña);
    if (!contraseniaValida) {
        return res.status(401).send({ auth: false, token: null, mensaje : "Contrasena invalida" });
    }

    const token = jwt.sign({ id: usuario._id }, SECRET_KEY, {
        expiresIn: '24h',
    });
    res.status(200).send({token:token});
}


module.exports = autenticacionController;