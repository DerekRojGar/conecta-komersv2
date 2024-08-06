// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const googleAuthRoutes = require('./routes/googleAuth');
const User = require('./models/User');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

dotenv.config();

const app = express();

app.use(cors()); // Habilita CORS
app.use(express.json());

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Configuración de Passport y GoogleStrategy
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: '/api/auth/google/callback'
}, async (accessToken, refreshToken, profile, done) => {
  try {
    let user = await User.findOne({ googleId: profile.id });
    if (!user) {
      // Crea un nuevo usuario si no existe
      user = new User({
        googleId: profile.id,
        nombre: profile.displayName,
        correo: profile.emails[0].value,
        tipoUsuario: 'Cliente' // Asigna un tipo de usuario por defecto si es necesario
      });
      await user.save();
    }
    return done(null, user);
  } catch (err) {
    return done(err, null);
  }
}));

/* // Ruta de callback de Google
app.get('/api/auth/google/callback', passport.authenticate('google', {
  successRedirect: '/dashboard',
  failureRedirect: '/login'
}));
*/

// Ruta de callback de Google
app.get('/api/auth/google/callback', passport.authenticate('google', {
  failureRedirect: '/login'
}), (req, res) => {
  // Redirige al frontend en el puerto 3000 con el nombre del usuario
  const userName = req.user.nombre; // Asumiendo que el nombre del usuario está en req.user.nombre
  res.redirect(`http://localhost:3000/bienvenida?nombre=${encodeURIComponent(userName)}`);
});

// Middleware para verificar la autenticación del usuario
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

// Configuración de serialización y deserialización de usuario
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

// Rutas principales de autenticación y aplicación
app.use('/api/auth', authRoutes);
app.use('/api/auth', googleAuthRoutes);

// Ruta para el dashboard después de iniciar sesión
app.get('/dashboard', ensureAuthenticated, (req, res) => {
  res.send('¡Bienvenido al dashboard!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});