import exp from 'express'
import bcrypt from 'bcrypt'
import {authenticate} from '../Services/AuthService.js'
import {UserTypeModel} from '../Models/UserModel.js'
import {verifyToken} from '../Middlewares/VerifyToken.js'

export const commonRouter=exp.Router()

//login
commonRouter.post("/login",async(req,res)=>{
    //get user credential object
    let userCred=req.body
    //call authenticate service
    let {token,user}=await authenticate(userCred)
    //Save toekn as HTTP only cookie
    res.cookie("token",token,{httpOnly:true,sameSite:"lax",secure:false})
    //send res
    res.status(200).json({message:"login sucess",payload:user})
})

//logout
commonRouter.post("/logout",async(req,res)=>{
    //Clear the cookie named 'token'
    res.clearCookie('token',{
        httpOnly:true,
        secure:false,
        sameSite:'lax'
    })
    res.status(200).json({message:'Logged out successfully'})
})

//Change password   (protected route)
commonRouter.put('/change-password',verifyToken,async(req,res)=>{
        //get current password and new password
        const {email,currentPassword,newPassword}=req.body;
        //check current password is correct or not
        const user=await UserTypeModel.findOne({email});
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        const isMatch=await bcrypt.compare(currentPassword,user.password);
        if(!isMatch){
            return res.status(400).json({message:"Current password is incorrect"});
        }
        //Change current password to new password       
        const hashedPassword=await bcrypt.hash(newPassword,10);
        user.password=hashedPassword;
        await user.save();
        //send res
        res.status(200).json({message:"Password changed successfully"});
});
