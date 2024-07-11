const express = require('express');
const bcrypt = require('bcrypt');
const multer = require('multer');
const path = require('path');
const User = require('../models/User');

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const baseName = path.basename(file.originalname, ext);
        cb(null, `${baseName}-${Date.now()}${ext}`);
    }
});

const upload = multer({ storage });

router.post('/register', upload.fields([
    { name: 'ine', maxCount: 1 },
    { name: 'antecedentes', maxCount: 1 },
    { name: 'responsiva', maxCount: 1 }
]), async (req, res) => {
    const { nombre, apellidos, correo, contraseña, telefono, tipoUsuario, tipoTrabajo } = req.body;
    
    // Rutas de los archivos
    const inePath = req.files['ine'] ? req.files['ine'][0].path : null;
    const antecedentesPath = req.files['antecedentes'] ? req.files['antecedentes'][0].path : null;
    const responsivaPath = req.files['responsiva'] ? req.files['responsiva'][0].path : null;

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(contraseña, salt);

        const newUser = new User({
            nombre,
            apellidos,
            correo,
            contraseña: hashedPassword,
            telefono,
            tipoUsuario: tipoUsuario || 'cliente', // Si tipoUsuario no está definido, se asigna 'cliente' por defecto
            tipoTrabajo,
            ine: inePath,
            antecedentes: antecedentesPath,
            responsiva: responsivaPath
        });

        await newUser.save();

        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error en el servidor' });
    }
});

module.exports = router;

