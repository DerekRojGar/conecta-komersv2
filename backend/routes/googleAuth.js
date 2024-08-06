//backend/routes/googleAuth.js
const express = require('express');
const passport = require('passport');

const router = express.Router();

// Inicia la autenticación con Google
router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

// Maneja el callback después de la autenticación de Google
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Redirige a la página principal o a donde desees después del login exitoso
    res.redirect('/Homepage');
  }
);

module.exports = router;
