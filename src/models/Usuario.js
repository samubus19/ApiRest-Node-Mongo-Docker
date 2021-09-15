const {Schema, model} = require("mongoose");
// const bcrypt = require("bcrypt");

const UsuarioSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

// UsuarioSchema.methods.encrypPassword = async password => {
//     const salt = await bcrypt.genSalt(10);
//     return bcrypt.hash(password, salt);
// };

// UsuarioSchema.methods.matchPassword = function(password) {
//     bcrypt.compare(password, this.password)
// };

module.exports = model("Usuario", UsuarioSchema);