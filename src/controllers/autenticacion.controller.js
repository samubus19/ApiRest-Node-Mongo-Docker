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
    await nuevoUsuario.save();
    jwt.sign(
        {nuevoUsuario}, 
        SECRET_KEY, 
        {expiresIn : '3600s'},
        (err, token) => {
            res.status(200).json(
                token
            );
        });
}

autenticacionController.autenticarUsuario = async (req, res) => {
    const usuario = await Usuario.findOne({ user: req.body.usuario });
    if(!usuario) {
        return res.status(404).send("El usuario no existe");
    }
    // const validPassword = await user.comparePassword(
    //     req.body.password,
    //     user.password
    //   );
    //   if (!validPassword) {
    //     return res.status(401).send({ auth: false, token: null });
    //   }

    const token = jwt.sign({ id: usuario._id }, SECRET_KEY, {
        expiresIn: '2600s',
      });
      res.status(200).send(token);
}


module.exports = autenticacionController;