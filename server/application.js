const express = require('express') ;
const app = express() ;
const http = require('http') ;
const server = http.createServer(app) ;
const cors = require('cors') ;
const Connection = require('./configure') ;
const {registerRouter,loginRouter,dataFetchRouter1,dataFetchRouter2,dataFetchRouter3,dataFetchRouter4,dataFetchRouter5}  = require('./controller') ;

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
app.use('/v3/api',dataFetchRouter1) ;
app.use('/v4/api',dataFetchRouter2) ;
app.use('/v5/api',dataFetchRouter3) ;
app.use('/v6/api',dataFetchRouter4) ;
app.use('/v7/api',dataFetchRouter5) ;
Connection() ;

server.listen("3500", () => {
      console.log("App launched successfully") ;  
})