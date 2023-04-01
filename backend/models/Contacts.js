// ./models/User.js -t3:16 -e3:16 -d3:16

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// Addition of  the Schema for the User model

const ContactSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    message: {
        type: String
    },
    subject: {
        type: String
    },

    ip: {},
    userdata: {},
    pageviewed: {
        type: String
    },
    viewedno: {
        type: Number,
        default: 0
    },
    browser: {},
    operatingSystem: {},


    date: {
        type: Date,
        default: Date.now
    },


});

const Contact = mongoose.model('contacts', ContactSchema);

module.exports = Contact