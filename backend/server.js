const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')

// Express App
const app = express()
port=process.env.PORT 
DB=process.env.DATABASE

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.use('/api/workouts' , workoutRoutes)

app.use('/api/user', userRoutes)


// connecting to mongo DB
mongoose.connect(DB)
    .then(() => {
        // Listen for requests
        app.listen(port,()=>{
            console.log('Connection to mongo DB has been established successfully on port',port)
        })
    })
    .catch( (error) => {
        console.log(error)
    })
 