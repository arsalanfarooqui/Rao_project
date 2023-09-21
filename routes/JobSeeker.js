const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { sign } = require('jsonwebtoken');

const { extname } = require('path');
const multer = require('multer');
const { existsSync, mkdirSync } = require('fs');

const { spawn } = require('child_process');

const destinationPath = 'public/';

const storage = multer.diskStorage({
    destination: (req, file, done) => {
        if (!existsSync(destinationPath)) {
            mkdirSync(destinationPath, { recursive: true });
        }
        done(null, destinationPath);
    }, //'public/images/',
    filename: function(req, file, done) {
        const name = file.fieldname + '-' + Date.now() + extname(file.originalname);
        done(null, name);
    },
});

const upload = multer({ storage: storage });

const { jobseekerAuth } = require('../middleware/authentication');

// Bring data of jobseeker from Models

let JobSeeker = require('../Models/JobSeeker');
let Job = require('../Models/jobs');
let JobSeekerData = require('../Models/JobSeekerData');

const { relativePathToUrl } = require('../utils/Utils');
const { fileURLToPath } = require('url');

//Login Jobseeker
router.post('/login', async function(req, res) {
    const { email, password } = req.body;

    let user = await JobSeeker.findOne({
        email: email.toLowerCase(),
    });

    if (!user) {
        res.status(404).send({ error: 'Invalid Creditials' });
        return;
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(404).send({ error: 'Invalid Creditials' });
    }

    user = user.toObject();
    delete user.password;

    //generate json web token

    const payload = {
        user: {
            _id: user._id,
        },
    };

    sign(
        payload,
        process.env.JWT_SECRET, {
            expiresIn: 3600,
        },
        (err, token) => {
            if (err) {
                console.error(err);
                return res.status(500).json({
                    error: err.toString(),
                });
            }

            res.status(200).json({
                token,
                user,
                usertype: 'jobseeker',
            });
        },
    );

    // res.status(200).send({token,user})
});

//Register Process
router.post('/register', async function(req, res) {
    const fullname = req.body.fullname;
    const email = req.body.email.toLowerCase();
    const password = req.body.password;
    const contactnumber = req.body.contactnumber;

    //

    try {
        let user = await JobSeeker.findOne({
            email,
        });

        if (user) {
            res.status(403).send({ error: 'Account with email already exists' });
            return;
        }

        // Encrypt password
        const salt = await bcrypt.genSalt(10);
        const encryptedpassword = await bcrypt.hash(password, salt);

        user = new JobSeeker({
            fullname,
            email,
            password: encryptedpassword,
            contactnumber,
        });

        await user.save();
        user = user.toObject();
        delete user.password;

        // console.log(user)

        res.status(200).send(user);
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: err.message });
    }
});

router.use(jobseekerAuth);

router.put('/profile', async(req, res) => {
    try {
        const { _id } = req.user;
        const { fullname, contactnumber, description } = req.body;

        let user = await JobSeeker.findById(_id);

        if (!user) {
            return next({ status: 404, error: 'User does not exist' });
        }

        const changes = {};

        if (fullname) changes.fullname = fullname;
        if (contactnumber) changes.contactnumber = contactnumber;
        if (description) changes.description = description;

        user = await JobSeeker.findByIdAndUpdate(id, changes, {
            new: true,
        }).select('-password');

        res.status(200).json({ user });
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: err.message });
    }
});

router.get('/profile', async function(req, res) {
    try {
        const { _id } = req.user;
        const user = await JobSeeker.findById(_id).select('-password');
        res.status(200).json({ user });
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: err.message });
    }
});

//Apply for job
router.post('/applyforjob', upload.any(), async function(req, res) {
    try {
        const jobId = req.body.jobId;
        const applicantId = req.user._id;
        const [file] = req.files;

        console.log(file);

        let dataToSend = '';
        // spawn new child process to call the python script
        const python = spawn('py', ['scripts/resume_parser.py', file.path]);
        // collect data from script
        python.stdout.on('data', function(data) {
            console.log('Pipe data from python script ...');
            dataToSend += data;
        });
        // in close event we are sure that stream from child process is closed
        python.on('close', async(code) => {
            console.log(`child process close all stdio with code ${code}`);
            console.log("dataToSend", dataToSend);

            const data = new JobSeekerData({
                jobid: jobId,
                applicantid: applicantId,
                pdf: dataToSend
            })

            await data.save()
            console.log(`child process close all stdio with code ${code}`);

            const job = await Job.findById(jobId);
            if (!job.applicants) {
                job.applicants = [];
            }
            if (!job.applicants.find((applicant) => applicant.user.toString() == applicantId)) {
                job.applicants.push({ user: applicantId, cvLink: file.destination + file.filename, pdf: dataToSend });
                await job.save();
            } else {
                job.applicants = job.applicants.map(value => {
                    if (value.user.toString() == applicantId) {

                        return {
                            user: applicantId,
                            cvLink: file.destination + file.filename,
                            pdf: dataToSend
                        }
                    }
                    return value
                })

                await job.save();
            }

            const newjob = await Job.findById(jobId);
            console.log("NewJOB", newjob);
            // send data to browser
            //res.send(dataToSend);
        });



        res.status(200).send({ success: 'job application successful' });
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: err.message });
    }
});

module.exports = router;