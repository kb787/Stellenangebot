const express = require('express') ;
const app = express() ;
const http = require('http') ;
const server = http.createServer(app) ;
const cors = require('cors') ;
const Connection = require('./configure') ;
const {registerRouter,loginRouter,dataFetchRouter1,dataFetchRouter2,dataFetchRouter3,dataFetchRouter4,dataFetchRouter5}  = require('./controller') ;
const {profilePostingRouter,profileGetRouter,profileUpdateRouter,profileDeleteRouter} = require('./userProfileController') ;
const {networkAllFetchRouter,networkIndividFetchRouter} = require('./networkController') ;
const {followRouter,unfollowRouter} = require('./followController') ;
// const cookieParser = require('cookie-parser') ;

const corsOptions = {
    origin:"http://192.168.43.148:8081",
}

app.get("/",(req,res) => {
    res.send("The application is running") ;
})

app.use(express.json()) ;
// app.use(cookieParser) ;
app.use(cors(corsOptions)) ;
app.use('/auth/api',registerRouter) ;
app.use('/auth/api',loginRouter) ;
app.use('/data/api',dataFetchRouter1) ;
app.use('/data/api',dataFetchRouter2) ;
app.use('/data/api',dataFetchRouter3) ;
app.use('/data/api',dataFetchRouter4) ;
app.use('/data/api',dataFetchRouter5) ;
app.use('/profile/api',profilePostingRouter) ;
app.use('/profile/api',profileGetRouter) ;
app.use('/profile/api',profileDeleteRouter) ;
app.use('/profile/api',profileUpdateRouter) ;
app.use('/network/api',networkAllFetchRouter) ;
app.use('/network/api',networkIndividFetchRouter) ;
app.use('/connection/api',followRouter) ;
app.use('/connection/api',unfollowRouter) ;
Connection() ;

server.listen("3500", () => {
      console.log("App launched successfully") ;  
})