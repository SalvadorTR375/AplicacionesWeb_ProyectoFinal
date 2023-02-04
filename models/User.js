let {Schema, model} = require("mongoose")
let userSchema = new User({
    name: String,
    email: String,
    password: password,
    phonenumber: String
})

module.exports = model('User', userSchema)