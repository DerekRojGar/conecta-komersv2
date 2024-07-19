// routes/auth.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');

router.post('/register', async (req, res) => {
  try {
    const { nombre, apellidos, correo, contrasena, telefono, tipoTrabajo,tipoUsuario } = req.body;

    if (!nombre || !correo || !contrasena || !tipoUsuario) {
      return res.status(400).json({ msg: 'Por favor, ingresa todos los campos obligatorios.' });
    }

    const existingUser = await User.findOne({ correo });
    if (existingUser) {
      return res.status(400).json({ msg: 'El correo ya está en uso.' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(contrasena, salt);

    const newUser = new User({
      nombre,
      apellidos,
      correo,
      contrasena: hashedPassword,
      telefono,
      tipoTrabajo,
      tipoUsuario
    });

    await newUser.save();
    res.status(201).json({ msg: 'Usuario registrado exitosamente.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Error en el servidor.' });
  }
});

module.exports = router;