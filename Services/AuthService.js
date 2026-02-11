import jwt from "jsonwebtoken"      //for token generation to authenticate the user
import bcrypt from "bcrypt"
import {UserTypeModel} from "../Models/UserModel.js"

//register function
export const register=async(userObj)=>{
    //Create the document
    const userDoc=new UserTypeModel(userObj)
    //validate for empty passwords
    await userDoc.validate()
    //hash and replace plain password
    userDoc.password=await bcrypt.hash(userDoc.password,10)
    //save
    const created=await userDoc.save()
    //convert document to object to remove password
    const newUserObj=created.toObject()     //toObject->converts mongodb to js obj
    //remove password
    delete newUserObj.password
    //return user obj without password
    return newUserObj
}

//Auntenticate function
export const authenticate=async({email,password})=>{
    //Check user with email and role  //it shld not send the err instead it shld assign the err sice only API or middleware can send err
    const user=await UserTypeModel.findOne({email})

    if(!user){
        const err=new Error("Invalid email")    //better to throw coz frontend ca catch the err than a plain msg 
        err.status=401
        throw err           //~ to return 
    }
    //If user valid but blocked by admin

    //compare passwords
    const isMatch=await bcrypt.compare(password,user.password)

    if(!isMatch){
        const err=new Error("Invalid password")
        err.status=401
        throw err
    }
    //Check isActive state
    if(user.isActive===false)
    {
        const err=new Error("Your Account is blocked,, Contact Admin")
        err.status=403 // authenticated but not authorised?
        throw err
    }
    //generate token  //keep secret code in .env file  //If expired v get jwt expired after expiry time
    const token=jwt.sign(
        {userId:user._id,role:user.role,email:user.email},
        process.env.JWT_SECRET,
        {expiresIn:"1h"}
    )

    const userObj=user.toObject()
    delete userObj.password

    return {token,user:userObj}
}
