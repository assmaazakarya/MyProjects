//1. require mongoose the framework that helps to create the collections of the database inthe backend 
const mongoose = require('mongoose');
//2. create your the collection / model schema with it's constrainse
const userSchema=mongoose.Schema({

    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    firstName:{
        type:String,
        required:true,
        minLength: 3,
        maxLength: 15
    },age:{
        type:Number,
        minLength: 13,
    }
})
//3. then use the mongoose built in function (model),to add your model as a collection in the database
const User = mongoose.model("User", userSchema);
//4. and finally export the model
module.exports = User;