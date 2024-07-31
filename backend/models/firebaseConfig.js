// Import the functions you need from the SDKs you need
const dotenv = require('dotenv');
const { initializeApp } = require('firebase/app');
const { getStorage } = require('firebase/storage');

dotenv.config();

module.exports = {
  firebaseConfig: {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  }
};



