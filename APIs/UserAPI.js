import exp from 'express';
import {register,authenticate} from '../Services/AuthService.js'
import {checkUser} from '../Middlewares/CheckUser.js'
import {ArticleModel} from '../Models/ArticleModel.js'

export const userRoute=exp.Router()

//Register user
userRoute.post('/users',async(req,res)=>{   //no need to catch the err since iddleware is there to catch the err
    //get userObj from req
    let userObj=req.body
    //call register
    const newUserObj=await register({...userObj,role:"USER"})     //Role shld be assigned by the server than user selecting it
    //send res
    res.status(201).json({message:"User created",payload:newUserObj})
})

//Read all articles(protected route)
userRoute.post("/articles",checkUser,async(req,res)=>{
    let articles=await ArticleModel.find({isArticleActive:true})
        .populate("author","firstName email")
    res.status(200).json({message:"All articles",payload:articles})
})

//Add comment to an article(protected route)
userRoute.post("/articles/comment",checkUser,async(req,res)=>{
    let {user,articleId,comment}=req.body

    //check if article exists and is active
    let article=await ArticleModel.findOne({_id:articleId,isArticleActive:true})
    if(!article){
        return res.status(404).json({message:"Article not found"})
    }

    //add comment
    article.comments.push({user:user,comment:comment})
    let updatedArticle=await article.save()

    res.status(201).json({message:"Comment added",payload:updatedArticle})
})
