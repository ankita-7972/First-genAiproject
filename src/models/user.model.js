const mongoose = require ("mongoose")



const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: [true,"username already exists."],
        require: true,
    },

    email: {
        type: String,
        unique: [true, "Account already exists"],
        require: true,
    },

    password: {
        type: String,
        required: true
    }
})

const userModel = mongoose.model("users", userSchema)

module.exports = userModel