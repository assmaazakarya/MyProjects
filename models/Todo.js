//1. require mongoose the framework that helps to create the collections of the database inthe backend 
const mongoose = require('mongoose');
//2. create your the collection / model schema with it's constrainse
const todoSchema=mongoose.Schema({
    userId:{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    title:{
        type:String,
        required:true,
        minLength:5,
        maxLength:20,
    },
    status:{
        type:String,
        required:false,
        default:"to-do"
    },
    tags:{
        type:[String],
        required:false,
        maxLength:10,
        createdAt:Date
    },
    
})

//3. then use the mongoose built in function (model),to add your model as a collection in the database
const Todo = mongoose.model("Todo", todoSchema);
//4. create an index using (title) to make the searching anf filtering more easy
Todo.createIndexes({ title: 1 });
//5.and finally export the model
module.exports = Todo;