let mongoose = require("mongoose")
let Schema = mongoose.Schema

let userSchema = Schema({
    firstname: String,
    secondname: String,
    email: String,
    password: String,
    phonenumber: String
})

module.exports = mongoose.model('users', userSchema)