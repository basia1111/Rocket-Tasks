const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name : {type: String, required:[true, 'Enter your name'] },
    email : {type: String, required:[true, 'Enter your email'], unique:true },
    password : {type: String, required:[true, 'Enter password '] },
})

const User = mongoose.model('User', userSchema )
module.exports =  User