const router = require('express').Router();

const User = require('../models/user');

router.post('/register', async (req, res) => {
    const { email } = req.body;

    if(await User.findOne({ email })) 
        return res.status(400).send({ error: 'User already exists' });

    try {
        const user = await User.create(req.body);

        user.password = undefined;

        return res.send(user);
    } catch (error) {
        return res.status(400).send({ error: 'Registration failed!' });
    };
});

module.exports = app => app.use('/auth', router);