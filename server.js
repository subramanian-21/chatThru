
const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
const port =process.env.PORT
app.listen(port ,()=>{
    console.log('server Started at ',port);
})