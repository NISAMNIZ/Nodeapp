const express=require("express");
const app = express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("HOME");
})
app.get("/register",(req,res)=>{
    res.send("<h1>NISAM<h1>");
})
app.post("/sign",(req,res)=>{
    res.send("WELCOME");
})
app.post("/niz",(req,res)=>{
    res.send("WELCOME HOME");
})

app.post("/login",(req,res)=>{
    const{email,password}=req.body;
    console.log(req.body);
    console.log(email);
    // res.send("LOGIN SUCCESSFUL");
    if(password=="1111"){
        res.send(" LOGIN SUCCESSFUL!!!")}else{
            res.send("PASSWORD IS INCORRECT")
    }
})

const AuthRoute=require("./routes/auth");
app.use("/api",AuthRoute);
const AuthCart=require("./routes/cart");
app.use("/cart",AuthCart);
app.post("/login1/:id/:email",(req,res)=>{
    console.log(req.params.id);
    console.log(req.params.email);
    // res.send("successful");
    res.send(req.params.id)
})
app.post("/login2/:name",(req,res)=>{
    console.log(req.params.name);
})
mongoose.connect(process.env.DB).then(()=>{
    console.log("CONNECTED");
}).catch((err)=>{
    console.log("NOT CONNECTED");
})
app.listen(5000,()=>{
    console.log("server listen at 5000");
})