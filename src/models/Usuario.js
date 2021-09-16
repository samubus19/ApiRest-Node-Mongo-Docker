const {Schema, model} = require("mongoose");
const bcrypt          = require("bcrypt");

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

UsuarioSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
} 

UsuarioSchema.methods.matchPassword = async function (password)  {
    return await bcrypt.compare(password, this.password);
}

module.exports = model("Usuario", UsuarioSchema);