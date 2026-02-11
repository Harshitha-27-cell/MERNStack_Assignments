import {UserTypeModel} from '../Models/UserModel.js'
export const checkAdmin=async(req,res,next)=>{
    //get user id from decoded token
    let userId=req.user?.userId
    if(!userId){
        return res.status(401).json({message:"Unauthorised request"})
    }
    //check if user exists
    let user=await UserTypeModel.findById(userId)
    if(!user){
        return res.status(401).json({message:"Invalid user"})
    }
    //check if role is ADMIN
    if(user.role!=="ADMIN"){
        return res.status(403).json({message:"Access denied. Only admin allowed"})
    }
    //forward request
    next()
}
