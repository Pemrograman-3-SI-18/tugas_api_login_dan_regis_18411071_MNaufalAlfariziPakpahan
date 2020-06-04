const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    namaLengkap: {
        type: String
    },
    userName: {
        type: String
    },
    email: {
        type: String
    },
    noTelp: {
        type: String
    },
    role: {
        type: Number
    },
    password: {
        type: String
    }
})

module.exports = mongoose.model( 'users', userSchema)
