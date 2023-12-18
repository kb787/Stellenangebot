let express = require('express') ;
let app = express() ;
let http = require('http') ;
let server = http.createServer(app) ;


server.listen("3500", () => {
      console.log("App launched successfully") ;  
})