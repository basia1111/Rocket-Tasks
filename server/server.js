const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.get('/api', (req, res) => {
    res.status(200).json({message: 'connected to backend'})
})

app.listen(3000, () => {
    console.log('server is running on port 3000')
})