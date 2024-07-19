const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.post('/complete-profile', async (req, res) => {
  const { userId, apellidos, telefono } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    user.apellidos = apellidos;
    user.telefono = telefono;

    await user.save();

    res.status(200).json({ message: 'Perfil completado exitosamente' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error en el servidor' });
  }
});

module.exports = router;
