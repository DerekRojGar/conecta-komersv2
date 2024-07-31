const mongoose = require('mongoose');

const trabajadorSchema = new mongoose.Schema({
  nombre: String,
  apellidos: String,
  correo: String,
  contrasena: String,
  telefono: String,
  tipoTrabajo: [String],
  tipoUsuario: { type: String, default: 'Trabajador' },
  documentos: [{
    tipo: String,
    url: String
  }]
});

module.exports = mongoose.model('Trabajador', trabajadorSchema);