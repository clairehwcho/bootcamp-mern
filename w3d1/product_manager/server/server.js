const express = require("express");
const cors = require('cors');

const { productRouter } = require('./routes/product.routes');

require("./config/mongoose.config");

const app = express();

app.use(cors());

app.use(express.json(), express.urlencoded({ extended: true }));

app.use('/', productRouter);

const server = app.listen(8000, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);