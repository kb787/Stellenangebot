const mongoose = require('mongoose') ;

const registerSchema = mongoose.Schema(
    {
         userName:{
             type:String,
             required:true,
         } ,
         userEmail : {
              type:String ,
              required:true
         } ,
         userPassword : {
             type:String ,
             required:true 
         } 
    }
)

let registerModel ;
if(mongoose.models.users){
    registerModel = mongoose.model('users') ;
}

registerModel = mongoose.model('users',registerSchema) ;
module.exports = registerModel ;