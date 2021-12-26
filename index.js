// require("dotenv").config();
let express = require("express");
let mongoose = require('mongoose');

// start your app
let app = express();
var expressValidator = require('express-validator');
var router = require("./router/router");

app.use(express.json());
app.use(expressValidator());
app.use("/", router);

// launching application at particular port
app.listen(2000, function () {
  console.log(`Applicaion is running at 2000`);
});


mongoose.connect('mongodb://localhost:27017/testingmd', (err)=>{
    if(err){
      console.log("db erorr")
    }
    else{
      console.log("db connected succesfuuly")
    }
});
