const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const EmployeeModel=require('./models/Users')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const cookieParser=require('cookie-parser')



const app=express()

app.use(express.json())
app.use(cors({
    origin:["http://localhost:3000"],
    methods:["GET","POST"],
    credentials:true
}))
app.use(cookieParser())


mongoose.connect("mongodb://127.0.0.1:27017/hash");

const verifyUser=(req,res,next)=>{
    const token=req.cookies.token;
    if(!token){
        return res.json("the token was not available")
    }
    else{
        jwt.verify(token,"jwt-secret-key",(err,decoded)=>{
            if(err) return res.json("token is wrong")
            next();
        })
    }
}

app.get('/home',verifyUser,(req,res)=>{
    return res.json("success")
})

app.post('/login',(req,res)=>{
    const {email,password}=req.body;
    EmployeeModel.findOne({email:email})
    .then(user=>{
    
        if(user){
            bcrypt.compare(password,user.password,(err,response)=>{
          
                if(response){
                    const token=jwt.sign({email: user.email},"jwt-secret-key",{expiresIn:"1d"})
                    res.cookie("token",token);
                    res.json("success")
    
                }
                else{
                    res.json("the pwsrd is incorrect")
                }
              })
            }else
        {
        res.json("no record exist")
        }
    })
})

app.post('/register',(req,res)=>{
    const {name,email,password}=req.body
    bcrypt.hash(password,10)
    .then(hash=>{
        EmployeeModel.create({name,email,password:hash})
        .then(registers=>res.json(registers))
        .catch(err=>res.json(err))
    }).catch(err=>console.log(err.message));
   
})

app.listen(8000,()=>{
    console.log("server run at 8000");
})