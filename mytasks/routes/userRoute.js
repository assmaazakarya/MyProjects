const userController = require('../controllers/UserController');
const express = require('express');
const route = express.Router();
const bcrypt = require('bcrypt');

route.get('/',(req,res)=>{
    res.send("i am in the user route")
})
route.post('/register',(req,res)=>{
    console.log(req.body);
    let { age, password, username,firstname } = req.body;
    bcrypt.hash(password,5, async(err, hash)=>{
        let data = await userController.Register(username,hash,firstname,age)
        console.log(data);
        res.send('ok post route is done for register اليوزراتسجل');
    })
})

route.post('/login',async(req,res)=>{
    {               
        let {password, username} = req.body;
        let data = await userController.Login(username,password)
        bcrypt.compare(password, data, function(err, result) {
            if(result == true){
               console.log("it's the same password and user");
            }
           }
           )
        res.send('ok post route is done for login');
    
     }
    
})

route.get('/users',async(req,res)=>{
    let data = await userController.getAllUsers()
    // console.log(data);
    res.send("in route i found all users")
})
 
route.delete('/users',async(req,res)=>{
    let request=req.body
    let data = await userController.deleteUser(request.age)
    // console.log(data);
    res.send("in route i deleted this user")
})
/// something went wrong while dealing with this method 
//  route.patch('/users',async(req,res)=>{
//     let request=req.body
// console.log(request);
//     let data= await userController.editUser(request.firstName,request.age)
//     res.send("route patch is working",data)
   
//  })

module.exports=route





