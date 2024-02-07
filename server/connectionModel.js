const mongoose = require('mongoose') ;

const connectionSchema = mongoose.Schema(
    {
        followers : {
            type:Array
        } ,
        following : {
            type:Array
        } ,
        connections : {
            requests : {
                sent : {
                    type:Array
                },
                recieved : {
                    type:Array
                },
                cancel : {
                    type:Array
                }
            }   
        }
    }
)
let connectionModel ;
if(mongoose.models.connections){
    connectionModel = mongoose.model('connections') ;
}
connectionModel = mongoose.model('connections',connectionSchema) ;
module.exports = connectionModel ;
