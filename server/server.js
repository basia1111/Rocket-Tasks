const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

app.use(cors())

app.get('/api', (req, res) => {
    res.status(200).json({message: 'connected to backend'})
})

mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log('connected to database'))
    .catch((err) => console.log(err.message))

app.listen(3000, () => {
    console.log('server is running on port 3000')
})