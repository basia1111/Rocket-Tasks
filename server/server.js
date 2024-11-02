const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const tasksRouter = require('./routes/tasks')
const usersRouter = require('./routes/users')
require('dotenv').config()
const mode = process.env.NODE_ENV

const allowedOrigins = {
    production: ['https://rockettasks.vercel.app'],
    development:['http://localhost:5173']
}
app.use(express.json())
app.use(cors({
    origin: allowedOrigins[mode]
}));

app.use('/api/tasks', tasksRouter )
app.use('/api/users', usersRouter )

app.get('/api', (req, res) => {
    res.status(200).json({message: 'connected to backend'})
})

mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log('connected to database'))
    .catch((err) => console.log(err.message))

if(mode == 'development'){
    app.listen(3000,()=> {
        console.log('server is running on port 3000')
    })
}
module.exports = app