

const { default: mongoose } = require("mongoose")


const userSchema = mongoose.Schema({
    email: String,
    password: String,
    confirmPassword:String
})

const UserModel = mongoose.model("user", userSchema)

module.exports = { UserModel }