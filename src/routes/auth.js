const express=require("express");
const router=express.Router();
router.get("/login",(req,res)=>{
    res.send("Login Successful");
})
router.get("/",(req,res)=>{
    res.send("API");
})
const AuthMiddle=(req,res,next)=>{
    console.log("hello");
    next()
}
router.get("/abhi",AuthMiddle,(req,res)=>{
    res.send("ABHI");
})

const AuthPass=(req,res,next)=>{
    const{email,password}=req.body;
    console.log("HELLO")
    console.log(req.body);
    if(password=="1111"){
    next()
    }
    else{
        res.send("PASSWORD IS INCORRECT");
        console.log("incorrect");
}
}
router.post("/niz",AuthPass,(req,res)=>{
    res.send("LOGIN SUCCESSFUL");
    console.log("correct");
})




module.exports=router;