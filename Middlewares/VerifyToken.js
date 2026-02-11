import jwt from 'jsonwebtoken'
import {config} from 'dotenv'
config()

export const verifyToken=async(req,res,next)=>{
    //Read token from req
    let token=req.cookies.token;   //gives the obj => {token:""}
    console.log("Token:",token)

    if(token==undefined)
    {
        return res.status(404).json({message:"Unauthorised req, Please login"})
    }

    //verify the validity of the token  (decoding the token)
    let decodedToken=jwt.verify(token,process.env.JWT_SECRET)

    //attach decoded user to request (useful later)
    req.user=decodedToken

    //forward req to next middleware/route
    next()
}
