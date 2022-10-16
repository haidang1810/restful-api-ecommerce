const mongoose = require('mongoose');
const { mongoURL } = require('../config/main.config');
async function connect() {
    try {
        await mongoose.connect(mongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('connect database success!!!');
    } catch (error) {
        console.log('connect database fail!!! ', error);
    }
}

module.exports = { connect };
