const express = require('express');
const router = express.Router();
const photoController = require('../../controllers/photoController');
const contactController = require('../../controllers/contactController');

// Rotas públicas
router.get('/photos', photoController.getAllPhotos);
router.post('/contact', contactController.sendMessage);

module.exports = router;