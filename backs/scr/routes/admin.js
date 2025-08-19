const express = require('express');
const router = express.Router();
const auth = require('../config/auth');
const photoController = require('../../controllers/photoController');

// Rotas protegidas
router.post('/photos', auth.authenticate, photoController.uploadPhoto);
router.delete('/photos/:id', auth.authenticate, photoController.deletePhoto);

module.exports = router;