import exp from 'express'
import { ProductModel } from '../Models/ProductModel.js'

export const productApp=exp.Router()

//User api routes

//create product
productApp.post('/products',async(req,res)=>{
    //get new product from req
    let newProduct=req.body;
    //console.log(newProduct)

    //create new product document
    let newProductDoc=new ProductModel(newProduct)

    //save in db
    await newProductDoc.save()

    //send res
    res.status(201).json({message:"Product Created"})
})




//read products
productApp.get('/products',async(req,res)=>{
    //read products from DB
    let products=await ProductModel.find()
    res.status(200).json({
        message:"products",
        payload:products
    })
})

//Read product by ObjectID
productApp.get("/products/:id",async(req,res)=>{
    //get ObjectID from url param
    let objId=req.params.id;  

    //find user in DB
    let productObj=await ProductModel.findById(objId)   

    //send res
    res.status(200).json({
        message:"product",
        payload:productObj
    })
})

//update product
productApp.put("/products/:id",async(req,res)=>{
    //get objectId from url params
    let objId=req.params.id
    //get modified product from req
    let modifiedProduct=req.body
    //make update
    let latestProduct=await ProductModel.findByIdAndUpdate(objId,{$set:{...modifiedProduct}},{new:true})  
      //send res
    console.log(latestProduct)
    res.status(200).json({
        message:"Product modified",
        payload:latestProduct
    })

})

//delete product
productApp.delete("/products/:id",async(req,res)=>{
    //get objectId from url params
    let objId=req.params.id;
    //delete product by id
    let deletedProduct=await ProductModel.findByIdAndDelete(objId)
    
    res.status(200).json({
        message: "Product deleted",
        payload: deletedProduct
    })
})

