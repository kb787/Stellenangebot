const jwt = require('jsonwebtoken') ;
const dotenv  = require('dotenv') ;

dotenv.config() ;

const validateAuthenticatedUser = async(req,res,next) => {
    try {
          const token = req.headers.authorization.split('')[1]
          if(!token){
              throw new Error('No token found') ;
          }
          else {
              jwt.verify(token,process.env.secret_key,(error,decoded) => {
                   if(error){
                      console.log(error) ;
                      throw new Error('Invalid token') ;
                   }
                   req.decoded = decoded ;
                   next() ;
              })
          }
    }
    catch(error){
          console.log(error) ;
          return res.status(500).send({message : 'Server side error occured'}) ;
    }
}

module.exports = validateAuthenticatedUser ;