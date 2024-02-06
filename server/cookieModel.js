const mongoose = require('mongoose') ;

const cookieSchema = mongoose.Schema(
    {
        id:{
            type : String
        },
        email:{
            type : String
        }
    }
)

let cookieModel ;
if(mongoose.models.cookies) {
    cookieModel = mongoose.model('cookies') ;
}

cookieModel = mongoose.model('cookies',cookieSchema) ;
module.exports = cookieModel ;




