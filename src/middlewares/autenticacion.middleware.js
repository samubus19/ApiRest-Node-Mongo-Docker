const jwt             = require("jsonwebtoken");
const jwtAutenticador = {};
const {SECRET_KEY}    = process.env;


jwtAutenticador.verificarToken = (req, res, next) => {
    const bearerHeader    =  req.headers['authorization'];

    if(typeof bearerHeader !== 'undefined'){
        
        const bearerToken = bearerHeader.split(" ")[0];
        req.token         = bearerToken;
        
        jwt.verify(req.token, SECRET_KEY, (error, authData) => {
            if(error) {
                
                res.status(403).json({
                    mensaje :"No se ha provisto un token"
                });

            }else{
                console.log(authData);
                console.log("Token verificado correctamente");
                next();
            }
    });

    } else {
        res.status(403).json({
            mensaje :"No se ha provisto un token"
        });
    }
}

module.exports = jwtAutenticador;