const fs = require('fs');



fs.readFile('D:/SAMUEL-D/Curso/NODE_JS/APIRest-Node-Mongo/src/public/peliculas.json', (err, data) => {
    if (err) throw err;
    let pelicula = JSON.parse(data);
    console.log(pelicula);
});