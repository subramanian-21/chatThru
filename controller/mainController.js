const mainModel = require('../model/mainModel')
const MainSchema = require('../model/mainModel')

const newAccessToken = (user) =>{
    return jwt.sign(user,process.env.ACCESS_TOKEN,{expire : '1d'})
}

const mainController = {
    register: async(req,res) =>{
        try{
            const {firstname,lastname,username,email,password} = req.body
            const user_name_check = await MainSchema.findOne({username})
            if(user_name_check){
                return res.status(400).json({message:"Username already taken..."})
            } 
            
            const user_email_check = await Users.findOne({email})
            if(user_email_check) {
                return res.status(400).json({message:"Email already taken..."})
            }

            if(password.length < 8){
                return res.status(400).json({message:"Password must be more than 8 characters..."})
            }
            const newUser = new mainModel({
                firstname,lastname,username,email,password
            })
            const access_token = newAccessToken({id:newUser._id})
            await newUser.save()

            res.json({
                message:"Registration complete...",
                access_token,
                user:{
                    ...newUser._doc
                }
            })
        }

        catch (err){
            return res.status(500).json({
                message:err.message
            })
        }
    }
    
}

module.exports = mainController