const mongoose = require('mongoose')

const mainSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        maxlength:25,
        trim:true
    },
    lastname:{
        type:String,
        required:true,
        maxlength:25,
        trim:true
    },
    username:{
        type:String,
        required:true,
        unique:true,
        
    },
    email:{
        type:String,
        required:true,
        trim:true,
        uniquie:true
    },
    password:{
        type:String,
        required:true
    }

},{
    timestamps:true
})

module.exports = mongoose.model('user',mainSchema)