const cookieModel = require('./cookieModel') ;

const validateCookie = async(cookieId) => {
     const expectedId = await cookieModel.findOne(cookieId) ;
     if(!expectedId){
        return false ;
     }
     else {
        return true ;
     }
}
module.exports = validateCookie ;