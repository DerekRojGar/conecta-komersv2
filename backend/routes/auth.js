const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Trabajador = require('../models/Trabajador');
const Cliente = require('../models/User');
const router = express.Router();

router.post('/register', async (req, res) => {
  const { nombre, apellidos, correo, contrasena, telefono, tipoTrabajo, tipoUsuario, documentos } = req.body;

  try {
    if (!nombre || !correo || !contrasena || !tipoUsuario) {
      return res.status(400).json({ msg: 'Por favor, ingresa todos los campos obligatorios.' });
    }

    // Verifica si el usuario ya existe
    let existingUser;
    if (tipoUsuario === 'Trabajador') {
      existingUser = await Trabajador.findOne({ correo });
    } else if (tipoUsuario === 'Cliente') {
      existingUser = await Cliente.findOne({ correo });
    }

    if (existingUser) {
      return res.status(400).json({ msg: 'El correo ya está en uso.' });
    }

    // Hashea la contraseña
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(contrasena, salt);

    // Crea el nuevo usuario basado en el tipoUsuario
    if (tipoUsuario === 'Trabajador') {
      const newTrabajador = new Trabajador({
        nombre,
        apellidos,
        correo,
        contrasena: hashedPassword,
        telefono,
        tipoTrabajo,
        tipoUsuario,
        documentos
      });

      await newTrabajador.save();
      res.status(201).json({ msg: 'Trabajador registrado exitosamente.' });
    } else if (tipoUsuario === 'Cliente') {
      const newCliente = new Cliente({
        nombre,
        apellidos,
        correo,
        contrasena: hashedPassword,
        telefono,
        tipoUsuario
      });

      await newCliente.save();
      res.status(201).json({ msg: 'Cliente registrado exitosamente.' });
    } else {
      res.status(400).json({ msg: 'Tipo de usuario no válido.' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Error en el servidor.' });
  }
});

module.exports = router;
