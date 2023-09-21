const mongoose = require('mongoose');

//Job seeker data while registration.

const jobseekerdata = mongoose.Schema({
    jobid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
        required: true,
    },
    applicantid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    pdf: {
        type: Object,
        required: true,
    },
});

const User = (module.exports = mongoose.model('JobSeekerData', jobseekerdata));
