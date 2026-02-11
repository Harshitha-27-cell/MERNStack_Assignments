import exp from 'express';
import {UserTypeModel} from '../Models/UserModel.js'
import {verifyToken} from '../Middlewares/VerifyToken.js'
import {checkAdmin} from '../Middlewares/CheckAdmin.js'

export const adminRoute=exp.Router()


//Block user roles
adminRoute.get("/block/:userId",verifyToken,checkAdmin,async(req,res)=>{
    //check user-id exits or not
    let userDetails=await UserTypeModel.findById(req.params.userId)
    if(!userDetails){
        return res.status(404).json({message:"User not found"})
    }
    //Make the user inactive
    let updatedUser=await UserTypeModel.findByIdAndUpdate(req.params.userId,{$set:{isActive:false}},{new:true,runValidators:true})
    res.status(200).json({message:"User blocked",payload:updatedUser})
})

//unblock user roles
adminRoute.get("/unblock/:userId",verifyToken,checkAdmin,async(req,res)=>{
    //check user-id exits or not
    let userDetails=await UserTypeModel.findById(req.params.userId)
    if(!userDetails){
        return res.status(404).json({message:"User not found"})
    }
    //Make the user active
    let updatedUser=await UserTypeModel.findByIdAndUpdate(req.params.userId,{$set:{isActive:true}},{new:true,runValidators:true})
    res.status(200).json({message:"User unblocked",payload:updatedUser})
})
