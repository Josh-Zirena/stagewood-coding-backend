const router = require('express').Router();
const bcrypt = require('bcrypt');

const { User } = require('../sequelize');

async function generatePassword(plainTextPassword) {
    const saltRounds = 10;
    return await bcrypt.hash(plainTextPassword, saltRounds);
}

router.get('/', (req, res) => {
    res.send('Route Placeholder');
})

router.get('/register', (req, res) => {
    res.json({"hello": "hi"});
});

router.post('/register', async (req, res) => {
    const { name, email } = req.body;
    const plainTextPassword = req.body.password;

    const passwordHash = await generatePassword(plainTextPassword);

    User.create({
        name,
        email,
        passwordHash,
    }).then(user => res.json(user));
});

module.exports = router;