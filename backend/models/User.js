const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellidos: { type: String, required: true },
    correo: { type: String, required: true, unique: true },
    contraseña: { type: String, required: true },
    telefono: { type: String, required: true },
    tipoUsuario: { type: String, default: 'cliente' },
    ine: { type: String },
    antecedentes: { type: String },
    responsiva: { type: String },
    tipoTrabajo: { type: String }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
