const express = require('express');
const router = express.Router();

const jobseeker = require('./JobSeeker');
const jobs = require('./jobs');
const employer = require('./employer');

router.use('/jobseeker', jobseeker);
router.use('/jobs', jobs);
router.use('/employer', employer);

module.exports = router;