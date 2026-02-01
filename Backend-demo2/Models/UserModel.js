import {Schema,model}  from 'mongoose'

//Create user schema  (username,password,age)
const userSchema=new Schema({  
        username:{
            type:String, 
            required:[true,"Username is required"] , 
            minLength:[4,"Min length should be 4"],
            maxLength:[6,"Max length exceeded it should be <=6"]
        },
        password:{
            type:String,
            required:[true,"Pswd is required"]
        },
        age:{
            type:Number,
            required:[true,"Age is required"],
            min:[18,"Age shld be above 18"],
            max:[25,"Age shld be below 25"]
        }
    },{
        strict:"throw",   
        timestamps:true   
    }); 


//Create user model 
export const UserModel=model(
    "user",
    userSchema
)  
