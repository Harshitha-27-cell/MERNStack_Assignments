import {UserTypeModel} from '../Models/UserModel.js';

export const checkAuthor=async(req,res,next)=>{
    //get author id
    let aid=req.body?.author||req.params?.authorid

    //verify author
    let author=await UserTypeModel.findById(aid)

    //If author not found
    if(!author){       
        return res.status(401).json({message:"Invalid Author"})         //401->  authenticated but not authorised
    }

    //if author found but role is diff.t
    if(author.role!=='AUTHOR')
    {
        return res.status(403).json({message:"User is not an Author"})  
    }

    //If author is blocked
    if(!author.isActive)
    {
        return res.status(403).json({message:"Author account is not active"})  
    }

    //forward req to next
    next()
}
