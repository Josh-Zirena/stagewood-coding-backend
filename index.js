const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

// const cors = require('cors');

const { User } = require('./sequelize');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Route placeholder');
})

// // TODO: I know I will need to add CORS for the frontend
// // but not sure how it will look yet.
// app.get('/cors', cors(), (req, res) => {
//     res.json({msg: 'This route is CORS-enabled.'});
// })

async function generatePassword(plainTextPassword) {
    const saltRounds = 10;
    return await bcrypt.hash(plainTextPassword, saltRounds);
}

// POST User
app.post('/api/users', async (req, res) => {
    const { name, email } = req.body;
    const plainTextPassword = req.body.password;

    const passwordHash = await generatePassword(plainTextPassword);

    /** TODO: We need to grab the user password
     * Use bcrypt, hash, etc. and then call sequelize
     * to store everything properly.
     */
    User.create({
        name,
        email,
        passwordHash,
    }).then(user => res.json(user));
});

// TODO: This is troll and needs to be removed soon.
app.get('/api/users', (req, res) => {
    User.findAll().then(users => res.json(users));
});

const port = 3000
app.listen(port,() => {
    console.log(`Running on localhost:${port}`);
});