import {Schema,model}  from 'mongoose'

//Create product schema  (pid,productName,price)
const productSchema=new Schema({  
        productName:{
            type:String,  
            required:[true,"Product name is required"] , 
             minLength:[4,"Min length should be 4"],
            maxLength:[10,"Max length exceeded it should be <=10"]
        },
        price:{
            type:Number,
            required:[true,"Price is required"]
        }
    },{
        strict:"throw",   
        timestamps:true   
    }); 


//Create product model 
export const ProductModel=model(
    "product",
    productSchema
)  
