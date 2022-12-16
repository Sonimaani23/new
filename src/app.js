const express = require('express');
const app = express();
const post = require('./routes/route.js');
const bodyParser = require('body-parser');
const cors = require('cors')
const path = require("path")

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(express.json());

app.get("/get",async(req,res)=>{
    try{
        //const mario = await post.find({})
        res.status(201).json({
            status:"sucsess",
            data:req.body
        })
    }
    catch(e){
        res.status(400).json({
            status:"failed",
              message:e.message
        })
        
    }

   

})


app.post("/post", async(req,res)=>{
    try{
        //const mario = await post.create(req.body)
        res.status(201).json({
            status:"sucsess",
            data:req.body
        })

    }
    catch(e){
        res.status(400).json({
            status:"400 failed",
              message:e.message
        })
    }
})


module.exports = app;