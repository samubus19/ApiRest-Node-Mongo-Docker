const jwt = require("jsonwebtoken");
const jwtAutenticador = {};
const {SECRET_KEY}    = process.env;


jwtAutenticador.verificarToken = (req, res, next) => {
    const bearerHeader =  req.headers['authorization'];

     if(typeof bearerHeader !== 'undefined'){
          const bearerToken = bearerHeader.split(" ")[0];
          req.token  = bearerToken;
          console.log(req.token);
          jwt.verify(req.token, SECRET_KEY, (error, authData) => {
            if(error){
                res.sendStatus(403);
            }else{
                console.log(authData);
                console.log("Token verificado correctamente");
                next();
            }
        });
     }else{
         res.sendStatus(403);
     }
}

module.exports = jwtAutenticador;