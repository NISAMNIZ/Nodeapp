const express=require("express");
const cart=express.Router();
cart.get("/cart1",(req,res)=>{
    res.send("WELCOME TO CART")
})
cart.get("/",(req,res)=>{
    res.send("WELCOME TO CART MAIN")
})


module.exports=cart;