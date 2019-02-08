const express = require('express')
const hoganMiddleware = require('hogan-middleware')
const app = express()
const path = require('path')
const port = 5000

//setup for view 
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'mustache')
app.engine('mustache', hoganMiddleware.__express)
//setting up my static folder express has a method to handle static files
app.use(express.static(path.join(__dirname, 'public')))

//importing the routes bellow
const indexRouter = require('./routes/index')
app.use('/', indexRouter);

// tell express app to listening 
app.listen(port, ()=>{
    console.log(`listenning on port ${port}`);
})
