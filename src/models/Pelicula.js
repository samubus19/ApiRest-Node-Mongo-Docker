const {Schema, model} = require("mongoose")

const PeliculaSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    URL_Imagen: {
        type: String,
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    sinopsis: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = model("Pelicula", PeliculaSchema);