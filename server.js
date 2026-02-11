import {config} from 'dotenv'
import exp from 'express'
import {connect} from 'mongoose'
import {userRoute} from './APIs/UserAPI.js'
import {authorRoute} from './APIs/AuthorAPI.js'
import {adminRoute} from './APIs/AdminAPI.js'
import {commonRouter} from './APIs/CommonAPI.js'
import cookieParser from 'cookie-parser'

config()   

//Create express 
const app=exp()

//add bosy parser middleware 
app.use(exp.json())
//Add cookie parser middleware
app.use(cookieParser())
app.use(exp.urlencoded({extended:true}))

//connect APIs
app.use('/user-api',userRoute)
app.use('/admin-api',adminRoute)
app.use('/author-api',authorRoute)
app.use("/common-api",commonRouter)

// connect to DB
const connectDB=async()=>{
    try{
        await connect(process.env.DB_URL)
        console.log("DB connection success")

        // start http server
        app.listen(process.env.PORT,()=>{
            console.log("Server started on port",process.env.PORT)
        })
    }
    catch(err){
        console.log("Err in DB connection",err)
    }
}

connectDB()

//dealing with invalid path
app.use((req,res,next)=>{
    res.json({message:"${req.url} is Invalid path"})
})

//error handling middleware
app.use((err,req,res,next)=>{
    console.log("err:",err)
    res.json({message:"error occured",reason:err.message})
})
