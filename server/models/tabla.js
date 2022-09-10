//import mongoose from 'mongoose';
const mongoose = require('mongoose');

const jsonSchema = new mongoose.Schema({
    id: {
        type: String,
        trim: true
    },
    url: {
        type: String,
        trim: true
    }
});

module.exports = mongoose.model('fromJson', jsonSchema);