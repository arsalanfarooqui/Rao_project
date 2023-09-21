const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { sign } = require('jsonwebtoken');

const utils = require('../utils/Utils');

const { employerAuth } = require('../middleware/authentication');

// Bring data of jobseeker from Models

let Employer = require('../Models/employer');
let Job = require('../Models/jobs');

//Register Process
router.post('/register', async function(req, res) {
    const fullname = req.body.fullname;
    const email = req.body.email.toLowerCase();
    const password = req.body.password;
    const contactnumber = req.body.contactnumber;

    //

    try {
        let user = await Employer.findOne({
            email,
        });

        if (user) {
            res.status(403).send({ error: 'Account with email already exists' });
            return;
        }

        // Encrypt password
        const salt = await bcrypt.genSalt(10);
        const encryptedpassword = await bcrypt.hash(password, salt);

        user = new Employer({
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

//Login Employer
router.post('/login', async function(req, res) {
    const { email, password } = req.body;

    let user = await Employer.findOne({
        email: email.toLowerCase(),
    });

    if (!user) {
        console.log(user);
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
                usertype: 'employer',
            });
        },
    );

    // res.status(200).send({token,user})
});

router.use(employerAuth);

//auth
router.get('/profile', async function(req, res) {
    try {
        const { _id } = req.user;
        const user = await Employer.findById(_id).select('-password');
        res.status(200).json({ user });
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: err.message });
    }
});


router.post('/postajob', async function(req, res) {
    try {
        const jobtitle = req.body.jobtitle;
        const jobtype = req.body.jobtype;
        const jobcategory = req.body.jobcategory;
        const city = req.body.city;
        const minimumsalary = req.body.minimumsalary;
        const maximumsalary = req.body.maximumsalary;
        const exprienceminimum = req.body.exprienceminimum;
        const expriencemaximum = req.body.expriencemaximum;
        const educationlevel = req.body.educationlevel;
        const emailaddress = req.body.emailaddress;
        const phonenumber = req.body.phonenumber;
        const gender = req.body.gender;
        const shift = req.body.shift;
        const jobdescription = req.body.jobdescription;

        let job = new Job({
            employerId: req.user._id,
            jobtitle,
            jobtype,
            jobcategory,
            city,
            minimumsalary,
            maximumsalary,
            exprienceminimum,
            expriencemaximum,
            educationlevel,
            emailaddress,
            phonenumber,
            gender,
            shift,
            jobdescription,
        });

        // console.log(job);

        await job.save();

        console.log(job);
        res.status(200).send(job);
    } catch (err) {
        console.log(err);
        res.status(502).send({ error: error.message });
    }
});

//Show those jobs posted by employer
router.get('/getjobs', async function(req, res) {
    try {
        let jobs = await Job.find({ employerId: req.user._id });

        res.status(200).json({ jobs });
    } catch (err) {
        console.log(err);
        res.status(502).send({ error: error.message });
    }
});
//Delete job
router.delete('/job', async(req, res) => {
    try {
        const id = req.body.id;
        await Job.deleteOne(id);
        res.status(200).json({ success: 'Job has deleted!!' });
    } catch (err) {
        console.log(err);
        res.status(502).send({ error: error.message });
    }
});

router.get('/job/:id/getApplicant', async(req, res) => {
    try {
        const id = req.params.id;
        const job = await Job.findOne({ _id: id, employerId: req.user._id })
            .populate('applicants.user')
            .select('-applicants.user.password');
        job.applicants.forEach((applicant, index) => {
            job.applicants[index].cvLink = utils.relativePathToUrl(req, applicant.cvLink);
        });


        title = job.jobtitle?.toLowerCase().split(" ")
        jobCat = job.jobcategory.toLowerCase()
        jobType = job.jobtype.toLowerCase()

        if (title.includes("designer")) {
            title.push("design")
        }

        selectedApplicants = []
        selectedApplicantsSort = []
        unSelected = []

        job.applicants.filter(applicant => {
            title.forEach(t => {
                if (applicant.pdf?.toLowerCase().includes(t)) {
                    selectedApplicants.push(applicant)
                }
            });
        })

        eduLevel = job.educationlevel.toLowerCase()
        selectedApplicants.filter(applicant => {
            if (applicant.pdf?.toLowerCase().includes(eduLevel) || applicant.pdf?.toLowerCase().includes(jobCat) || applicant.pdf?.toLowerCase().includes(jobType)) {
                selectedApplicantsSort.push(applicant)
            } else {
                unSelected.push(applicant)
            }
        })

        job.applicants = [...selectedApplicantsSort, ...unSelected]

        res.status(200).json({ job });
    } catch (err) {
        console.log(err);
        res.status(502).send({ error: error.message });
    }
});
module.exports = router;