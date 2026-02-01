// Create HTTP server
// Import express module
import exp from 'express';  
import { userApp } from './APIs/userAPI.js';
import { productApp } from './APIs/productAPI.js';
// if we don’t mention ./ or ../ then by default it refers to node_modules
// default exports are exported, we can change exp to anything & exp -> express

const app=exp();

// body parsing middleware
app.use(exp.json()); 
// to parse json data sent by client in req body

// start server
app.listen(3000,()=>{
  console.log('HTTP server listening on port 3000...')
});

//forward req to userApp when the path starts with /users-api
app.use('/user-api',userApp)
//forward req to uproductApp when the path starts with /product-api
app.use('/product-api',productApp)
