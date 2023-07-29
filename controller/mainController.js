const MainSchema = require('../model/mainModel')

const mainController = {
    register: async(req,res) =>{
        try{
            const {firstname,lastname,username,email,password} = req.body
            const user_name = await MainSchema.findOne({username})
            if(user_name) return res.status(400).json({message:"Username already taken..."})
            

        }
        catch{
        
        }
    }
    
}