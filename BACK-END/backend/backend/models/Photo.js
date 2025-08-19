const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    title: String,
    description: String,
    category: String,
    imageUrl: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Photo', photoSchema);