const mongoose = require('mongoose') ;

const jobDataSchema = mongoose.Schema({
      jobTitle:{
         type:String,
      } ,
      jobCompany:{
         type:String,
      },
      jobLocation:{
         type:String
      },
      jobSkills:{
         type:Array,
      },
      jobLocationType:{
         type:String,
      }
})

let jobDataModel ;

if(mongoose.models.jobdatas){
     jobDataModel = mongoose.model('jobdatas') ;
}

jobDataModel = mongoose.model('jobdatas',jobDataSchema) ;
module.exports = jobDataModel ;