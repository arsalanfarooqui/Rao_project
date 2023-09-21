const mongoose = require('mongoose');

//Job seeker data while registration.

const employer = mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    contactnumber: {
        type: String,
        required: true,
    },
});

const Employer = (module.exports = mongoose.model('Employer', employer));