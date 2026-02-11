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
        enum:["AUTHOR","USER","ADMIN"],  //mostly capitals for enum 
        required:[true,"{Value} is an nvalid role"]
    },
    isActive:{
        type:Boolean,
        default:true
}},{
    
        strict:"throw",   
        timestamps:true  ,
        versionKey:false
    
})  //since many like google follow this format v can use login with google so v used this format

//create model
export const UserTypeModel=model(
    "user",
    userSchema
)
