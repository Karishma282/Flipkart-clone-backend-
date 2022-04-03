const express=require("express");

const app=express();
const womenController=require("./controllers/women.controllers");
const menController=require("./controllers/men.controller");
const registerController=require("./controllers/register.controller");



const cors=require("cors");
app.use(cors());
app.get("/",(req,res)=>{
    res.status(200).send("welcome to flipkart.com")
})
 app.use(express.json());

 app.use("/women",womenController)
 app.use("/men",menController)
 app.use("/register",registerController)

 module.exports=app;