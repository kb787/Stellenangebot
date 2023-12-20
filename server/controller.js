const jwt = require('jsonwebtoken') ;
const registerModel = require('./registrationModel') ;
const bcryptjs = require('bcryptjs') ;


const handleRegisterUser = async(req,res) => {
    const {userName,userEmail,userPassword} = req.body ;
    if((!userName) || (!userEmail) || (!userPassword)) {
          return res.status(400).send({message:'Entering all field is mandatory',success:false}) ;
    }
    try {
         let regResponse = await registerModel.findOne({userEmail:req.body.userEmail}) ;
         if(regResponse) {
              return res.status(409).send({message:'User already exists',success:false}) ;
         }
         else {
              const salt = await bcryptjs.genSalt(10) ; 
              const password = req.body.userPassword ;
              const hashedPassword =  await bcryptjs.hash(password,salt) ;
              const newResponse = await new registerModel({userName,userEmail,hashedPassword}) ;
              const savedUser = await newResponse.save() ;  
              console.log(savedUser) ; 
              return res.status(201).send({message:'Successfully done the registration',success:true,savedUser}) ;         
         }
    }
    catch(error){
            console.log(error) ;
            return res.status(500).send({message:'Could not process the request',success:false}) ;
    }
}

const handleUserLogin = async(req,res) => {
    const {userEmail,userPassword} = req.body ;
    if((!userEmail) || (!userPassword)) {
         {
            return res.status(400).send({message:'Entering all fields is mandatory',success:false}) ; 
         }
    }
    try {
          let comparisonOutput ;
          let loginResponse = await registerModel.findOne({userEmail:req.body.userEmail}) ;
          if(!loginResponse) {
             return res.status(404).send({message:'Invalid email',success:false}) ;
          }
          comparisonOutput = bcryptjs.compare(req.body.userPassword,loginResponse.userPassword) ;
          if(!comparisonOutput){
              return res.status(404).send({message:'Invalid credentials',success:false}) 
          }
          else {
            const token = jwt.sign({id:loginResponse._id},process.env.secret_key,{
                expiresIn:"1d"
            })
              return res.status(201).send({message:'Login successfull',success:true,token}) ;
          }
    }
    catch(error) {
         console.log(error) ;
         return res.status(500).send({message:'Unable to process the request',success:false}) ;
    }
}

const express = require('express') ;
const registerRouter = express.Router() ;
const loginRouter = express.Router() ;

registerRouter.post('/postUserRegister',handleRegisterUser) ;
loginRouter.post('/postUserLogin',handleUserLogin) ;

module.exports = {
      registerRouter:registerRouter,
      loginRouter:loginRouter
}