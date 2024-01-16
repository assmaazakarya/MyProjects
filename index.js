//first step : npm init to create my own package
//second : npm i mongoose to install mongoose and use it to connect with database easily
//third require the mongoose in the main and all the models/controllers i should require
const mongoose = require('mongoose');
const User = require('./models/User');
const Todo = require('./models/Todo');
const userController = require("./controllers/UserController")
const todoController=require('./controllers/TodoController')
//4 : establish a connecection  with database
mongoose.connect('mongodb://127.0.0.1:27017/crud').then(() => {
    console.log("connected");
}).catch(err => {
    console.log(err);
})
//5: create collections of this database i did this step in a separate folder called (models)
// then i have to require all of them in the main at step 3 
//6. create controllers of the crud operations i did this step in a separate folder called (controllers)
// then i have to require all of them in the main at step 3
//7. let's test the user controllers
/////////test the register
// userController.Register("ahmed ali", 123456,"ahmed",23);
// userController.Register("hany ali", 123456,"hany",25);
// userController.Register("mohammed ali", 123456,"mohammed",27);
////////test the login
// userController.Login("mohammed ali", 123456);
/////////test the getall 
// userController.getAllUsers();
///////////////testt the delete
// userController.deleteUser(27)
// userController.getAll()
////test edit
// userController.editUser("ahmed",77777)
// userController.getAll()
//////////////////////////////////////////////////////////
//test add to do 
// todoController.createTodo("hany ali","movies",["aaa","nnn","ooo"])
// todoController.getAll()
// test retrive todos a specific user
// todoController.getTodos("hany")
//test update todo
// todoController.editTodo('homework',["9999",'8888','4444'])
// todoController.getTodos("ahmed")
/////////test delete
// todoController.deleteTodo("movies")
// todoController.getAll()