const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const tasksRouter = require('./routes/tasks')
const usersRouter = require('./routes/users')
require('dotenv').config()

app.use(express.json())
app.use(cors({
    origin: ["https://rockettasks.vercel.app"]
}))
app.use('/api/tasks', tasksRouter )
app.use('/api/users', usersRouter )

app.get('/api', (req, res) => {
    res.status(200).json({message: 'connected to backend'})
})

mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log('connected to database'))
    .catch((err) => console.log(err.message))

module.exports = app