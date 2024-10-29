const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title: {type:String, required: true},
    dueDate: {type:Date, required: false},
    status: {type: Boolean, required: true},
    user: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'}
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task;