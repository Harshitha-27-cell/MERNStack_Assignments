import exp from 'express';
//create a mini express(separate route) productApp
export const productApp=exp.Router();
let products=[]

//Get all the products
productApp.get('/products',(req,res)=>{
  // send products data in response
  res.status(200).json({
    message:"all products",
    payload:products
  });
});


//Get product by id
productApp.get('/products/:id',(req,res)=>{
  //read id from url parameter
  let productId=Number(req.params.id);
  //read product by this id
  let product=products.find(productObj=>productObj.productID===productId);
  //send response
  if(!product)
  {
    return res.status(404).json({message:"Product not found"});
  }
  res.status(200).json({
    message:"Product found",
    payload:product
  });
});

//Get product by brand
productApp.get('/products-brand/:brand',(req,res)=>{
  //read brand from url parameter
  let productBrand=req.params.brand;
  //read product by this brand
  let product=products.find(productObj=>productObj.brand===productBrand);
  //send response
  if(!product)
  {
    return res.status(404).json({message:"Product not found"});
  }
  res.status(200).json({
    message:"Product found",
    payload:product
  });
});

//POST create product
productApp.post('/products',(req,res)=>{
  // get product resource from request
  let newProduct=req.body; 

  console.log("Request body:",newProduct);

  // add user to local array
  products.push(newProduct);

  res.status(201).json({
    message:"Product created",
    payload:newProduct
  });
})

//PUT update product
productApp.put('/products/:id',(req,res)=>{
  // get modified product data from req body
  let modifiedProduct=req.body;
  // get id from request params
  let productId=Number(req.params.id);

 // find the Product with id exists in array
  let productIndex=products.findIndex(
    productObj=>productObj.productID===productId
  );

 // if Product not found,then send res as "Product not found"
  if(productIndex===-1)
  {
    return res.status(404).json({message:"Product not found"});
  }
 // if Product found ,then modify the product
  else
  { 
    products[productIndex]=modifiedProduct;

 // send res as "Product modified" with modified product data
    res.status(200).json({
      message:"Product modified",
      payload:modifiedProduct
    });
  }
})

//delete product by id
productApp.delete('/products/:id',(req,res)=>{
  // read id from url parameter
  let productId=Number(req.params.id);    
  // find index of product with this id
  let productIndex=products.findIndex(
    productObj=>productObj.productID===productId
  );
  // if product not found, then send res as "Product not found"
  if(productIndex===-1)
  {  
    return res.status(404).json({message:"Product not found"});
  }
  // if product found, then delete the product
  products.splice(productIndex,1);        
  // send res as "Product deleted"
  res.status(200).json({
    message:"Product deleted"
  });
});
