const mongoose = require('mongoose');
const { model } = mongoose;
const { Schema } = mongoose;

const ContactSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})

mongoose.models = {}
module.exports = mongoose.model("Contact", ContactSchema);