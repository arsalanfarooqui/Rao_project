const mongoose = require('mongoose');

//Job seeker data while registration.

const jobseeker = mongoose.Schema({
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
    description: {
        type: String,
        required: false,
    },
});

const User = (module.exports = mongoose.model('User', jobseeker));
