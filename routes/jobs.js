const express = require('express');
const bodyParser = require('body-parser');
const jobs = require('../Models/jobs');
const router = express.Router();

router.get('/getjobs', async function(req, res) {
    try {
        const { jobcategory } = req.query;
        const query = {};
        if (jobcategory) {
            query.jobcategory = jobcategory;
        }
        let job = await jobs.find(query);

        res.status(200).json({ job });
    } catch (err) {
        console.log(err);
        res.status(502).send({ error: error.message });
    }
});
router.get('/category', async function(req, res) {
    try {
        let job = await jobs.find();
        let categories = {};
        job.forEach((item) => {
            if (!categories[item.jobcategory]) {
                categories[item.jobcategory] = 1;
            } else {
                categories[item.jobcategory]++;
            }
        });
        res.status(200).json({ categories });
    } catch (err) {
        console.log(err);
        res.status(502).send({ error: error.message });
    }
});
router.get('/:id', async(req, res) => {
    try {
        const { id } = req.params;

        let job = await jobs.findById(id);

        res.status(200).json({ job });
    } catch (err) {
        console.log(err);
        res.status(502).send({ error: error.message });
    }
});
module.exports = router;