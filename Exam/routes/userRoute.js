const userController = require('../controllers/usercontroller')
const express = require('express');
const route = express.Router();
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken')
const secret_key="my secret key"
route.get('/', (req, res) => {
    res.send("i am in the user route")
})
route.post('/register', (req, res) => {
    console.log(req.body);
    try {
        let { password, username, email } = req.body;
        bcrypt.hash(password, 5, async (err, hash) => {
            let data = await userController.Register(username, hash, email)
            console.log(data);
            if (data) {
                console.log("this user was registered");
                res.status(200).send('this user was registered')
            } else {
                res.status(404).send('this user was not registered')
            }

        })
    } catch (err) {
        console.log(err);
        res.status(500).send("something went wrog")
    }


})

route.post('/login', async (req, res) => {
try {
let { password, email } = req.body;
let data = await userController.Login(email, password)
bcrypt.compare(password, data, function (err, result) {
    
if (result == true) {
let token = JWT.sign(req.body,secret_key);
console.log("it's the same password and user");
res.status(200).send(token)
}else{
console.log("this user is not logged in");
res.status(404).send("this user is not logged in")
}})}
catch(err){ 
res.send('ok post route is done for login');
}})

// route.get('/users',async(req,res)=>{
//     let data = await userController.getAllUsers()
//     // console.log(data);
//     res.send("in route i found all users")
// })

// route.delete('/users',async(req,res)=>{
//     let request=req.body
//     let data = await userController.deleteUser(request.age)
//     // console.log(data);
//     res.send("in route i deleted this user")
// })
/// something went wrong while dealing with this method 
//  route.patch('/users',async(req,res)=>{
//     let request=req.body
// console.log(request);
//     let data= await userController.editUser(request.firstName,request.age)
//     res.send("route patch is working",data)

//  })

module.exports = route