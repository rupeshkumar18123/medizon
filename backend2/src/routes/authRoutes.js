const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.use(express.json());


router.post("/register",(req,resp)=>{
  const { name, email, password } = req.body;
    User.create({name,email,password})
    .then(result => resp.json({msg:"success",result}))
    .catch(err=>resp.json(err));
  
  });
  
  

router.post("/login",(req,resp)=>{
    const {email,password} = req.body;
    User.findOne({email:email})
    .then(user=>{
      if(user){
        console.log(user);
          if(user.password === password){
              resp.json({msg:"successful_login",data: user.name});
          }
      }
      else{
          resp.json({msg:"no_user_found"});
  
      }
    })
    .catch(err=>{
        console.log(err);
    });
  }); 

  module.exports = router;
