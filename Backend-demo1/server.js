// Create HTTP server
// Import express module
import exp from 'express';  
import { userApp } from './APIs/userAPI.js';
import { productApp } from './APIs/productAPI.js';

const app=exp();

// body parsing middleware
app.use(exp.json()); 

// start server
app.listen(3000,()=>{
  console.log('HTTP server listening on port 3000...')
});

//forward req to userApp when the path starts with /users-api
app.use('/user-api',userApp)
//forward req to uproductApp when the path starts with /product-api
app.use('/product-api',productApp)
