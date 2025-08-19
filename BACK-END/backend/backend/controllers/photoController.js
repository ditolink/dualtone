const express = require('express');
const router = express.Router();
const auth = require('../config/auth');
const photoController = require('./photoController');

// Rotas protegidas
router.post('/photos', auth.authenticate, photoController.uploadPhoto);
router.delete('/photos/:id', auth.authenticate, photoController.deletePhoto);

module.exports = router;

const Photo = require('../models/Photo');

exports.getAllPhotos = async (req, res) => {
    try {
        const photos = await Photo.find();
        res.json(photos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.uploadPhoto = async (req, res) => {
    // Lógica para upload de fotos
};

exports.deletePhoto = async (req, res) => {
    // Lógica para deletar fotos
};