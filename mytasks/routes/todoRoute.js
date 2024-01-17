const todoController = require('../controllers/TodoController');
const express = require('express');
const route = express.Router();


route.get('/',(req,res)=>{
    res.send("i am in the todo route")
})
route.post('/todos',async(req,res)=>{
    let { username,title,tags } = req.body;
    let data = await todoController.createTodo(username,title,tags)
    console.log(data);
    res.send("ok post route is done for creating todo")
})
module.exports=route
// POST	/toods	Create new todo 
// ({username, title,tags}) 
// Return the new todo to the user
