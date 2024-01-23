const mongoose = require('mongoose');
const express= require('express');
const app=express()
const port=5050
const userRoute=require('./routes/userRoute')
const blogRoute=require('./routes/blogRoute')
mongoose.connect('mongodb://127.0.0.1:27017/node').then(() => {
    console.log("connected");
}).catch(err => {
    console.log(err);
})

// some middlewares before routes
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
// app.use(express.static())
//then the routes
app.use('/user',userRoute)
app.use('/blog',blogRoute)
app.listen(port,() => console.log(`app listening on port ${port}!`))