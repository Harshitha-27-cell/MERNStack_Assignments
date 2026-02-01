import exp from 'express'
import { UserModel } from '../Models/UserModel.js'

export const userApp=exp.Router()


//create user
userApp.post('/users',async(req,res)=>{
    //get new user from req
    let newUser=req.body;
  //create new user document
    let newUserDoc=new UserModel(newUser)
    //console.log(newUserDoc)

    //save in db
    await newUserDoc.save()

    //send res
    res.status(201).json({message:"User Created"})
})

//read user
userApp.get('/users',async(req,res)=>{
    //read users from DB
    let users=await UserModel.find()
    res.status(200).json({
        message:"users",
        payload:users
    })
})

//Read user by ObjectID
userApp.get("/users/:id",async(req,res)=>{
    //get ObjectID from url param
    let objId=req.params.id; 

    //find user in DB
    let userObj=await UserModel.findById(objId)      

    //send res
    res.status(200).json({
        message:"user",
        payload:userObj
    })
})

//update user
userApp.put("/users/:id",async(req,res)=>{
    //get objectId from url params
    let objId=req.params.id
    //get modified user from req
    let modifiedUser=req.body
    //make update
    let latestUser=await UserModel.findByIdAndUpdate(objId,{$set:{...modifiedUser}},{new:true,runValidators:true})  
    //send res
    res.status(200).json({message:"User modified",payload:latestUser})

})

//delete user
userApp.delete("/users/:id",async(req,res)=>{
    //get objectId from url params
    let objId=req.params.id;
    //delete user by id
    let deletedUser=await UserModel.findByIdAndDelete(objId)
    
    res.status(200).json({
        message: "User deleted",
        payload: deletedUser
    })
})