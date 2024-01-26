const jwt = require('jsonwebtoken') ;
const dotenv  = require('dotenv') ;

dotenv.config() ;

const validateAuthenticatedUser = async(req,res,next) => {
    try {
          const authHeader = req.headers.authorization ;
          if((!authHeader) || (!authHeader.startsWith('Bearer ')))
          {
             return res.status(400).send({message:"Invalid token"}) ;
          }
          const token = req.headers.authorization.split('Bearer ')[1]
          if(!token){
              throw new Error('No token found') ;
          }
          else {
              const decodedToken = jwt.verify(token,process.env.secret_key) ;
              req.userId = decodedToken.id ;
              next() ; 
          }
       
    }
    catch(error){
          console.log(error) ;
          return res.status(500).send({message : 'Server side error occured'}) ;
    }
}

module.exports = validateAuthenticatedUser ;