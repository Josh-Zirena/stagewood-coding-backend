const express = require('express');
const bodyParser = require('body-parser');

const registerRoute = require('./routes/register');

const app = express();

// TODO: Cleanup minor routing.
app.use(bodyParser.json());
app.use('/', registerRoute);

const port = 3000
app.listen(port,() => {
    console.log(`Running on localhost:${port}`);
});