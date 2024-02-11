const mongoose = require('mongoose') ;
const connectionSchema = mongoose.Schema(
       {
        followers : {
            type:Array
        } ,
        following : {
            type:Array
        } ,
        connectionId : {
           type:Array
        } ,
        sentRequests : {
           type:Array 
        } ,
        recievedRequests : {
            type:Array
        } ,
        cancelledRequests : {
            type:Array
        } ,
        }

)
let connectionModel ;
if(mongoose.models.connections){
    connectionModel = mongoose.model('connections') ;
}
connectionModel = mongoose.model('connections',connectionSchema) ;
module.exports = connectionModel ;
