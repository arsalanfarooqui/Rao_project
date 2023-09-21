const mongoose = require('mongoose');

const job = mongoose.Schema({
    employerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employer',
        required: true,
    },
    jobtitle: {
        type: String,
        required: true,
    },
    jobtype: {
        type: String,
        required: true,
    },
    jobcategory: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    minimumsalary: {
        type: String,
        required: true,
    },
    maximumsalary: {
        type: String,
        required: true,
    },
    exprienceminimum: {
        type: String,
        required: true,
    },
    expriencemaximum: {
        type: String,
        required: true,
    },
    educationlevel: {
        type: String,
        required: true,
    },
    emailaddress: {
        type: String,
        required: false,
    },
    phonenumber: {
        type: String,
        required: false,
    },
    gender: {
        type: String,
        required: true,
    },
    jobdescription: {
        type: String,
        required: true,
    },
    applicants: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        cvLink: { type: String, required: true },
        pdf: {
            type: Object,
            required: false,
        }
    }, ],
}, {
    timestamps: true,
}, );

const Job = (module.exports = mongoose.model('Job', job));