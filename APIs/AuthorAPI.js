import exp from 'express';
import {UserTypeModel} from '../Models/UserModel.js';
import {ArticleModel} from '../Models/ArticleModel.js'
import {register} from '../Services/AuthService.js'
import {checkAuthor} from '../Middlewares/CheckAuthor.js';
import {verifyToken} from '../Middlewares/VerifyToken.js';

export const authorRoute=exp.Router()

//Register Author(publlic)
authorRoute.post('/users',async(req,res)=>{   //no need to catch the err since iddleware is there to catch the err
    //get userObj from req
    let userObj=req.body
    //call register
    const newUserObj=await register({...userObj,role:"AUTHOR"})     //Role shld be assigned by the server than user selecting it
    //send res
    res.status(201).json({message:"Author created",payload:newUserObj})
})

//Create article   (protected route)         //It shld be protected route 
authorRoute.post("/articles",verifyToken,checkAuthor,async(req,res)=>{
    //get article from req
    let article=req.body

    //check for the author      actually not required from frontend but if v used postman app.n then v need to check the author id existing or not
    let author=await UserTypeModel.findById(article.author)
    if(!author||author.role!=="AUTHOR"){       //check how not eqs
        return res.status(401).json({message:"Invalid AUthor"})
    }

    //Create article document
    let newArticleDoc=new ArticleModel(article)
    //save 
    let createArticleDoc=await newArticleDoc.save()
    //send res
    res.status(201).json({message:"Article created",payload:createArticleDoc})  //to make the article appear
})

//Read articles of author (protected route) 
authorRoute.get("/articles/:authorid",verifyToken,checkAuthor,async(req,res)=>{
    //get author id
    let aid=req.params.authorid
    //check the author    
    let author=await UserTypeModel.findById(aid) 
    if(!author||author.role!=="AUTHOR"){       
        return res.status(401).json({message:"Invalid AUthor"})
    } 

    //Read articles by this author which r active
    let articles=await ArticleModel.find({author:aid,isArticleActive:true})
        .populate("author","firstName email")         //to get the author details

    //send res
    res.status(200).json({
        message:"All articles",
        payload:articles
    }); 
})

//Edit article      (protected route) 
authorRoute.put("/articles",verifyToken,checkAuthor,async(req,res)=>{
    //get modified article from req
    let {author,articleId,title,category}=req.body

    //find article
    let articleOfDB=await ArticleModel.findOne({_id:articleId,author:author})
    if(!articleOfDB)
    {
         return res.status(401).json({message:"Article not found"})
    }

    //update the article
    let updatedArticle=await ArticleModel.findByIdAndUpdate(
        articleId,
        {$set:{title,category}},
        {new:true,runValidators:true}
    )

    //send res(updated article)
    res.status(200).json({message:"Article updated",payload:updatedArticle})
})

//delete(soft delete) article    (protected route)         hard del is by findByIdandDelete, instead v upadte active status of article to false
authorRoute.put("/articles/delete",verifyToken,checkAuthor,async(req,res)=>{
    //get article to be del frm req
    let {author,articleId}=req.body

    //find article
    let articleOfDB=await ArticleModel.findOne({_id:articleId,author:author})
    if(!articleOfDB)
    {
         return res.status(401).json({message:"Article not found"})
    }

    //Delete the article
    let deletedArticle=await ArticleModel.findByIdAndUpdate(
        articleId,
        {$set:{isArticleActive:false}},
        {new:true,runValidators:true}
    )

    //send res
    res.status(200).json({message:"Article Delete",payload:deletedArticle})
})
