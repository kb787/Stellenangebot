const connectionModel = require('./connectionModel') ;
const validateCookie = require('./cookieValidator') ;
  
const handleSendConnectionRequest = async(req,res) => {
      try {
         const myId = req.body._id ;
         const accountId = req.params.id ;
         const result = validateCookie(myId) ;
         if(result === false){
         return res.status(400).send({message:'No cookie found complete your authentication first'}) ; 
         }
         const initiator = await connectionModel.findById(myId) ;
         const responder = await connectionModel.findById(accountId) ;
         if(!initiator){
            return res.status(404).send("User not found") ;
         }
         if(!responder){
            return res.status(404).send("No account found with the above id") ;
         }
         if((initiator.sentRequests.includes(responder)) && (responder.recievedRequests.includes(initiator))){
                return res.status(409).send("Alreay sent a connection request") ;
         }
         else {
             initiator.sentRequests.push(responder) ;
             responder.recievedRequests.push(initiator) ;  
             await connectionModel.save() ;
             return res.status(201).send("Successfully sent a connection request") ;

         }
      }
      catch(error){
        console.log(error) ;
        return res.status(500).send({message:'Server side error occured'}) ;
      }
}

const handleUnsendConnectionRequest = async(req,res) => {
    try {
       const myId = req.body._id ;
       const accountId = req.params.id ;
       const result = validateCookie(myId) ;
        if(result === false){
         return res.status(400).send({message:'No cookie found complete your authentication first'}) ; 
        }
       const initiator = await connectionModel.findById(myId) ;
       const responder = await connectionModel.findById(accountId) ;
       if(!initiator){
        return res.status(404).send("User not found") ;
       }
       if(!responder){
        return res.status(404).send("No account found with the above id") ;
       }
       if((initiator.sentRequests.includes(responder)) && (responder.recievedRequests.includes(initiator))) {
            initiator.sentRequests.pull(responder) ;
            responder.recievedRequests.pull(initiator) ;
            await connectionModel.save() ;
            return res.status(201).send("Successfully unsent a connection request") ;

       } 
       else {
        return res.status(409).send({message:"Mentioned account does not exists in your connections"}) ;
     }
    }
    catch(error){
        console.log(error) ;
        return res.status(500).send({message:'Server side error occured'}) ;
    }
}

const handleAcceptConnectionRequest = async(req,res) => {
    try {
        const myId = req.body ;
        const accountId = req.params.id ;
        const result = validateCookie(myId) ;
        if(result === false){
            return res.status(400).send({message:'No cookie found complete your authentication first'}) ;  
        }
       const initiator = await connectionModel.findById(myId) ;
       const responder = await connectionModel.findById(accountId) ;
       if(!initiator){
        return res.status(404).send({message:"User not found"}) ;
       }
       if(!responder){
        return res.status(404).send("No account found with the above id") ;
       }
       if((initiator.sentRequests.includes(responder)) && (responder.recievedRequests.includes(initiator))){
       initiator.connections.connectionId.push(responder) ;
       responder.connections.connectionId.push(initiator) ;
       await connectionModel.save() ;
       return res.status(201).send({message:"Successfully sent a connection request"}) ;
       }
       else {
          return res.status(409).send({message:"Mentioned account does not exists in your connections"}) ;
       }
    }
    catch(error){
        console.log(error) ;
    }
}

const handleCancelConnectionRequest = async(req,res) => {
    try {
        const myId = req.body._id ;
        const accountId = req.params.id ;
        const result = validateCookie(myId) ;
        if(result === false){
            return res.status(400).send({message:'No cookie found complete your authentication first'}) ;  
        }
        const initiator = await connectionModel.findById(myId) ;
        const responder = await connectionModel.findById(accountId) ;

        if(!initiator){
            return res.status(404).send({message:"User not found"}) ;
        }
        if(!responder){
            return res.status(404).send({message:"Account does not exists"}) ;
        }
        if((initiator.sentRequests.includes(responder)) && (responder.recievedRequests.includes(initiator))){
             responder.cancelledRequests.push(initiator) ;
             initiator.sentRequests.push(responder) ;
             await connectionModel.save() ;
             return res.status(201).send({message:'Successfully cancelled request'}) ;
        }
        else {
            return res.status(409).send({message:"Mentioned account does not exists in your connections"}) ;
        }
    }
    catch(error){
        console.log(error) ;
        return res.status(500).send({message:"Unable to perform your request"}) ;
    }
}

const express = require('express') ;
const sendConnectionRequestRouter = express.Router() ;
const unsendConnectionRequestRouter = express.Router() ;
const acceptConnectionRequestRouter = express.Router() ;
const cancelConnectionRequestRouter = express.Router() ;

sendConnectionRequestRouter.patch('/send-connection-request/:id',handleSendConnectionRequest) ;
unsendConnectionRequestRouter.patch('/unsend-connection-request/:id',handleUnsendConnectionRequest) ;
acceptConnectionRequestRouter.patch('/accept-connection-request/:id',handleAcceptConnectionRequest) ;
cancelConnectionRequestRouter.patch('/cancel-connection-request/:id',handleCancelConnectionRequest) ;

module.exports = {
    sendConnectionRequestRouter:sendConnectionRequestRouter,
    unsendConnectionRequestRouter:unsendConnectionRequestRouter,
    acceptConnectionRequestRouter:acceptConnectionRequestRouter,
    cancelConnectionRequestRouter:cancelConnectionRequestRouter,
}

