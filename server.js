const express = require('express');
const cors = require('cors');

const registerRoute = require('./routes/register');
const userRoute = require('./routes/users');

const app = express();

// Minor middleware
app.use(express.json());
app.use(cors());
app.use('/register', registerRoute);
app.use('/users', userRoute);

app.get('/', (req, res) => {
    res.send('index route');
})

const port = 3000
app.listen(port,() => {
    console.log(`Running on localhost:${port}`);
});