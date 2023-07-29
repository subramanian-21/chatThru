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
    },

    propic:{
        type:String,
        default:''
    },

    followers:[{
        type:mongoose.Types.ObjectId,ref:'user'
    }],
    following:[{
        type:mongoose.Types.ObjectId,ref:'user'
    }]

},{
    timestamps:true
})

module.exports = mongoose.model('user',mainSchema)