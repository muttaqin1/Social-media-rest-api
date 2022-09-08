//external import
const express = require('express')
const dotenv = require('dotenv')

const app = express()
dotenv.config({
  path: "./config/.env"
})

// internal imports
// routes
const userRoute = require('./routes/userRoute')
const profileRoute = require('./routes/profileRoute')
const postRoute = require('./routes/postRoute')
const commentRoute = require('./routes/commentRoute')
const replyRoute = require('./routes/replyRoute')
//must remove
const testRoute = require('./test')
//middlewares
const errorhandlers = require('./middlewares/common/errorHandler')
const middlewares = require('./middlewares/middlewares')


//using middlewares from ./middlewares/middlewares
app.use(middlewares)


//using routes
app.use('/user', userRoute)
app.use('/profile', profileRoute)
app.use('/post', postRoute)
app.use('/comment', commentRoute)
app.use('/reply', replyRoute)
app.use('test', testRoute)
//using error handleling middlewares
app.use(errorhandlers)



module.exports = app