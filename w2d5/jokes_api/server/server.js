const express = require("express");
const cors = require('cors');

const { jokeRouter } = require('./routes/joke.routes');

// requiring / importing runs the file
// This file doesn't need to export anything though, so we need a var
require("./config/mongoose.config");

// app is a function but it also has key value pairs on it like an object
const app = express();

/*
app.use is adding 'middleware':
stuff that happens in the middle of the request and response
 */

// avoid CORS errors since our front-end is running on a different port
// so our requests are 'cross origin' port 3000 -> 8000
app.use(cors());

// req.body undefined without this
app.use(express.json(), express.urlencoded({ extended: true }));

app.use('/api/jokes', jokeRouter);

const server = app.listen(8000, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);