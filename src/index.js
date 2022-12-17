const mongoose = require('mongoose');
const app = require('./app.js');
require('dotenv').config()


mongoose.connect("mongodb+srv://insta:clone1@cluster0.zpynabl.mongodb.net/?retryWrites=true&w=majority/instaclone",{useNewUrlParser:true})
.then(()=>{
    console.log("connected to DB")
})

let port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`Server running on Port ${port}`)
})