const connectionModel = require('./connectionModel') ;
const validateCookie = require('./cookieValidator') ;

const handleFollowFeature = async(req,res) => {
    try {
        
      const myId = req.body._id ;
      const {followId} = req.params ;
      const result = validateCookie(myId) ;
      if(result === false){
         return res.status(400).send({message:'No cookie found complete your authentication first'}) ; 
      } 
      const currentUser = await connectionModel.findById({myId}) ;
      const expectedUser = await connectionModel.findById({followId}) ;
      if(!currentUser){
         return res.status(404).send("User not found") ;
      }
      if(!expectedUser){
         return res.status(404).send("No account found with the above id") ;
      }
      if(currentUser.following.includes(expectedUser)){
          return res.status(400).send("Already following the user") ;
      }
      else {
          currentUser.following.push(expectedUser) ;
          expectedUser.followers.push(currentUser) ;
          
          const savedCurrentUser = await connectionModel.save() ;
          const savedExpectedUser = await connectionModel.save() ;
          console.log(`Successfully updated the users ${savedCurrentUser} and ${savedExpectedUser}`)  ;
      }
    }
    catch(error){
        return res.status(500).send({message:'Unable to perform the request'}) ;
    }  

}

const handleUnfollowFeature = async(req,res) => {
    try {
      const myId = req.body._id ;
      const {followId} = req.params ;

      const currentUser = await connectionModel.findById({myId}) ;
      const expectedUser = await connectionModel.findById({followId}) ;
      if(!currentUser){
        return res.status(404).send("User not found") ;
     }
     if(!expectedUser){
        return res.status(404).send("No account found with the above id") ;
     } 
      if(currentUser.following.includes(expectedUser)){
             currentUser.following.pull(expectedUser) ;
             expectedUser.followers.pull(currentUser) ; 

             const savedCurrentUser = await connectionModel.save() ;
             const savedExpectedUser = await connectionModel.save() ;
             console.log(`Successfully updated the users ${savedCurrentUser} and ${savedExpectedUser}`)  ;
      }
      else {
          return res.status(400).send({message : "Unable to get the id"}) ;
      }
    }
    catch(error){
        return res.status(500).send({message:'Unable to perform the request'}) ;
    }    
}

const express = require('express') ;
const followRouter = express.Router() ;
const unfollowRouter =  express.Router() ;

followRouter.patch(`/followNewAccount/:_id`,handleFollowFeature) ;
unfollowRouter.patch(`/unfollowAccount/:_id`,handleUnfollowFeature) ;


module.exports = {
    followRouter:followRouter,
    unfollowRouter:unfollowRouter
}