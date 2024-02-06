const  {MongoClient} = require("mongodb") ;
const dotenv = require("dotenv") ;

dotenv.config() ;
const url = process.env.mongodb_uri ;
const databaseName = process.env.database_name ;
const collectionName = process.env.cookie_collection_name ;

const connectDatabaseAndInsertData = async(userId,userEmail) => {
     const client = new MongoClient(url) ;
     try {
         await client.connect() ;
         const db = client.db(databaseName) ;
         const collection = db.collection(collectionName) ;
         const insertedObject = {
             id:userId ,
             email:userEmail ,
         }
         await collection.insertOne(insertedObject) ;
     }
     catch(error){
           console.log(error) ; 
     } 
     finally{
        client.close() ;
     }

}

module.exports = connectDatabaseAndInsertData ;