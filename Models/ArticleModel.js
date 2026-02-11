import {Schema,model} from 'mongoose'

//Create user comment schema
const userCommentSchema=new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'user'
    },
    comment:{
        type:String
    }
})
//Create article schema
const articleSchema=new Schema({
    author:{
        type:Schema.Types.ObjectId,
        ref:"user",
        required:[true,"Author ID is required"]
    },
    title:{
        type:String,
        required:[true,"Title is required"]
    },
    category:{
        type:String,
        required:[true,"Category is required"]
    },
    comments:[userCommentSchema],
    isArticleActive:{
        type:Boolean,
        default:true
    }},{
        strict:"throw",   
        timestamps:true,
        versionKey:false 
})

//create Article model
export const ArticleModel=model(
    "article",
    articleSchema
)
