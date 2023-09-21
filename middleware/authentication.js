const jwt = require('jsonwebtoken');
const User = require('../Models/JobSeeker.js');
const Employer = require('../Models/employer.js');

const jobseekerAuth = async(req, res, next) => {
    // Get token from header
    let token = req.header('authorization'); // "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYxOTdlOTI3NWRmZmE1MWNkOTQxN2Y2MCJ9LCJpYXQiOjE2MzczNDY5OTYsImV4cCI6MTYzNzM5MDE5Nn0.QHw_DCwuV3H3hLgP2KvtoubGBVqwXfR1ix7MDXNrzGQ"
    // check if not token
    if (!token) {
        return res.status(401).send({ error: 'No token, authorization denied' });
    }

    //console.log(req.path);
    // Verify token
    schemePlusToken = token.split(' ');

    try {
        if (schemePlusToken[0] === 'Bearer') {
            token = schemePlusToken[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const user = await User.findById(decoded.user._id).select('-password');

            if (!user) {
                return res.status(401).send({ error: 'Token is not valid' });
            }

            req.user = user;
            next();
        } else {
            res.status(401).send({ error: 'Token is not valid' });
        }
    } catch (err) {
        console.error(err);
        res.status(401).send({ error: 'Token is not valid' });
    }
};

const employerAuth = async(req, res, next) => {
    // Get token from header
    let token = req.header('authorization');
    // check if not token
    if (!token) {
        return res.status(401).send({ error: 'No token, authorization denied' });
    }

    //  console.log(req.path);
    // Verify token
    schemePlusToken = token.split(' ');

    try {
        if (schemePlusToken[0] === 'Bearer') {
            token = schemePlusToken[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const user = await Employer.findById(decoded.user._id).select('-password');

            if (!user) {
                return res.status(401).send({ error: 'Token is not valid' });
            }

            req.user = user;
            next();
        } else {
            res.status(401).send({ error: 'Token is not valid' });
        }

    } catch (err) {
        console.error(err);
        res.status(401).send({ error: 'Token is not valid' });
    }
};
module.exports = {
    jobseekerAuth,
    employerAuth,
};