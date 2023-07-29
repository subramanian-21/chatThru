const mainModel = require('../model/mainModel')
const MainSchema = require('../model/mainModel')

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
                fullname,username,email,password
            })
        }
        catch{
        
        }
    }
    
}