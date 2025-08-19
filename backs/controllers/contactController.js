const Contact = require('../models/Contact');

exports.sendMessage = async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;
        const newContact = new Contact({ name, email, phone, message });
        await newContact.save();
        res.status(201).json({ message: 'Mensagem enviada com sucesso!' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};