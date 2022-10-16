const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const { port } = require('../config/main.config');
const db = require('../config/database.config');

db.connect();

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
