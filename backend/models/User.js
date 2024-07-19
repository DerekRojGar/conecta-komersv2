const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellidos: { type: String },
    correo: { type: String, required: true, unique: true },
    contrasena: { type: String },
    telefono: { type: String },
    tipoUsuario: { type: String, default: 'cliente' },
    ine: { type: String },
    antecedentes: { type: String },
    responsiva: { type: String },
    tipoTrabajo: { type: String },
    googleId: { type: String }  // Agrega este campo para almacenar el ID de Google
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
