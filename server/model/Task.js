const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title: {type:String, required: true},
    note: {type:String, required: false},
    dueDate: {type:Date, required: false},
})

const Task = mongoose.model('Task', taskSchema)