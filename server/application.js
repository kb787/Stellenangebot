const express = require('express') ;
const app = express() ;
const http = require('http') ;
const server = http.createServer(app) ;
const cors = require('cors') ;
const Connection = require('./configure') ;
const {registerRouter,loginRouter}  = require('./controller') ;


const corsOptions = {
    origin:"http://192.168.43.148:8081",
}

app.get("/",(req,res) => {
    res.send("The application is running") ;
})

app.use(express.json()) ;
app.use(cors(corsOptions)) ;
app.use('/v1/api',registerRouter) ;
app.use('/v2/api',loginRouter) ;
Connection() ;

server.listen("3500", () => {
      console.log("App launched successfully") ;  
})