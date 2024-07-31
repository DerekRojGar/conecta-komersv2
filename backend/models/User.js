const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellidos: { type: String},
    correo: { type: String, required: true, unique: true },
    contrasena: { type: String},
    telefono: { type: String },
    tipoUsuario: { type: String },
    googleId: { type: String }

});

const User = mongoose.model('User', UserSchema);

module.exports = User;
