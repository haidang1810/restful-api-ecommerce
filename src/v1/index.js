const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const { port } = require('../config/main.config');

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
