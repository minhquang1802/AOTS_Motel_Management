const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

require('dotenv').config()

const app = express()
const port = 4444

//setup routes
const roomRoute = require('./routes/roomRoute')
const serviceRoute = require('./routes/serviceRoute')

app.use(bodyParser.json())

//connect to mongoose 
mongoose.connect('mongodb+srv://minhquang180203:m0A0dSMxDBzBQ7sm@aots.ahzuw49.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('Connected to database'))
        .catch(error => console.error('Connection error:', error))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// localhost:4444/api/<route>
app.use('/api', roomRoute)

app.use('/api', serviceRoute)
