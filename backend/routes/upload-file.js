const express = require("express");
const { initializeApp } = require("firebase/app");
const { getStorage, ref, getDownloadURL, uploadBytesResumable } = require("firebase/storage");
const multer = require("multer");
const config = require("../models/firebaseConfig");

const router = express.Router();

// Initialize a firebase application
initializeApp(config.firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage();

// Setting up multer as a middleware to grab photo uploads
const upload = multer({ storage: multer.memoryStorage() });

// This endpoint can handle multiple file uploads
router.post("/", upload.fields([
    { name: 'archivoINE', maxCount: 1 },
    { name: 'archivoAntecedentes', maxCount: 1 },
    { name: 'archivoResponsiva', maxCount: 1 }
]), async (req, res) => {
    try {
        const files = req.files;
        const uploadedFiles = [];

        for (const key in files) {
            const file = files[key][0];
            if (file.mimetype !== 'application/pdf') {
                return res.status(400).send('Solo se permiten archivos PDF.');
            }

            const dateTime = giveCurrentDateTime();
            const storageRef = ref(storage, `${key}/${file.originalname + " " + dateTime}`);

            // Create file metadata including the content type
            const metadata = { contentType: file.mimetype };

            // Upload the file in the bucket storage
            const snapshot = await uploadBytesResumable(storageRef, file.buffer, metadata);
            const downloadURL = await getDownloadURL(snapshot.ref);

            uploadedFiles.push({
                tipo: key,
                url: downloadURL
            });
        }

        return res.send({
            message: 'Archivos guardados exitosamente en Firebase',
            uploadedFiles: uploadedFiles
        });
    } catch (error) {
        return res.status(400).send(error.message);
    }
});

const giveCurrentDateTime = () => {
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date + ' ' + time;
    return dateTime;
}

module.exports = router;


