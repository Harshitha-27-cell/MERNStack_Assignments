import {UserTypeModel} from '../Models/UserModel.js';

export const checkUser=async(req,res,next)=>{
    //get user id from request body
    const userId=req.body.user

    let user=await UserTypeModel.findById(userId)

    if(!user||user.role!=="USER"){
        return res.status(401).json({message:"Invalid User"})
    }
    next()
}
