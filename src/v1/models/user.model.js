const { Schema, model, default: mongoose } = require('mongoose');

const userSchema = new Schema(
    {
        email: {
            type: String,
        },
        password: {
            type: String,
            required: true,
        },
        fbId: {
            type: String,
        },
        fullName: {
            type: String,
            required: true,
        },
        address: {
            type: Object,
        },
        avatar: {
            type: String,
        },
        refreshToken: {
            type: String,
        },
    },
    {
        collection: 'users',
        timestamps: true,
    },
);

module.exports = mongoose.model('users', userSchema);
