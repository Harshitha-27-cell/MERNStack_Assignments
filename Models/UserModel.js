import {Schema,model} from 'mongoose'

//for all users(having roles: author,user,admin)
const userSchema=new Schema({
    firstName:{
        type:String,
        required:[true,"First name is required"]
    },
    lastName:{
        type:String
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:[true,"Enmail already existed"]
    },
    password:{
            type:String,
            required:[true,"Pswd is required"]
        },
    profileImageUrl:{
        type:String
    },
    role:{
        type:String,
        enum:["AUTHOR","USER","ADMIN"],  
        required:[true,"{Value} is an nvalid role"]
    },
    isActive:{
        type:Boolean,
        default:true
}},{
    
        strict:"throw",   
        timestamps:true  ,
        versionKey:false
    
}) 

//create model
export const UserTypeModel=model(
    "user",
    userSchema
)
