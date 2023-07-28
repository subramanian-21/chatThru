
const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
const port =process.env.PORT

const mongo_url = process.env.MONGO_URL

mongoose.connect(mongo_url)
    .catch(err => console.log(err) )

app.listen(port ,()=>{
    console.log('server Started at ',port);
})