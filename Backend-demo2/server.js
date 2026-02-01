// Create HTTP server
// Import express module
import exp from 'express'
import { userApp } from './APIs/UserAPI.js'
import { productApp } from './APIs/ProductAPI.js'
import { connect } from 'mongoose'
const app = exp()
const port = 4000;

// body parsing middleware 
app.use(exp.json());  
app.use('/user-api', userApp)
app.use('/product-api', productApp)
//connect to DB server
async function connectDB(){
    try{
        await connect("mongodb://localhost:27017/anuragdb2")
        app.listen(port,()=>console.log("Server listening on port 4000..."))
        console.log("DB Connection success")
    }
    catch(err)
    {
        console.log("Err in DB connection:",err)
    }
}
connectDB()
//error handling middleware
 app.use((err,req,res,next)=>{
    res.status(500).json({message:"Error",reason:err})
 })

