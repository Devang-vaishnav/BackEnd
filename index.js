require('dotenv').config()
const express = require('express')
const app = express()

// const port = 3000

app.get('/',(req,res) => {
    res.send("Our first server created!")
})

app.get('/login',(req,res) => {
    res.send("Our first server Login Route!")
})

app.listen(process.env.PORT, (res,req) => {
    console.log(`Your Server is now running on port ${process.env.PORT}`)
})
