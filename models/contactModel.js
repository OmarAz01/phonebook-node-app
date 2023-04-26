const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide name'],
    },
    phone: {
        type: String,
        required: [true, 'Please provide phone'],
    },
})

module.exports = mongoose.model('Contact', contactSchema);