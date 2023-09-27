const express= require('express');
const app= express();

const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/ecomm");



// user routes

const user_route= require("./routes/userRoutes");

 app.use('/api', user_route);

// store routes

const store_routes= require("./routes/storeRoutes");
app.use('/api', store_routes);


//catogary routes

const category_routes= require("./routes/categoryRoutes");
app.use('/api', category_routes);

// sub-catogary routes

const subcategory_route= require("./routes/subCategoryRoutes");
app.use('/api', subcategory_route);


// Add-product routes

const product_routes= require("./routes/productRoutes");
app.use('/api', product_routes)


// get api

app.get('/getapi', (req, res) => {
   
 
    res.send('server is runnimng at render get api');
  
});

// post api

app.post('/fetchapi', (req, res) => {
   
 
    res.send('server is runnimng at render post api');
  
});


app.listen(3000, function(){
    console.log('server is running');
});

