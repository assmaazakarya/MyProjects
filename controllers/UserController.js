//1. first of tall any controller depends on it's model 
// that's why the first step is to require the right model
const User = require('../models/User')
const Register = async (_username, _password, _firstName, _age) => {
    try {
        let userData = await User.create({ username: _username, password: _password,firstName:_firstName , age:_age});
        if(userData){
         console.log("user was registered successfully",userData);
        }else{
          console.log("something went wrong while registering");
        }
    } catch (err) {
        console.log(err);
    }

}
const Login = async (_username, _password) => {
    try {
        let userData = await User.find({ username: _username, password: _password});
        if(userData){
         console.log("logged in successfully",userData);
        }else{
          console.log("invalid credentials");
        }
    } catch (err) {
        console.log(err);
    }

}
 
const getAllUsers= async()=>{
    try {
        let userData = await User.find({},{firstName:1,_id:0});
        if(userData){
         console.log("first name of all users",userData);
        }else{
          console.log("i couldn't get the first name");
        }
    } catch (err) {
        console.log(err);
    }
}

const getAll= async()=>{
    try {
        let userData = await User.find({});
        if(userData){
         console.log("all users",userData);
        }else{
          console.log("i couldn't get the users");
        }
    } catch (err) {
        console.log(err);
    }
}

const deleteUser= async(_age)=>{
    try {
         let res =await User.deleteOne({age:_age});
         console.log(res);
        if(res.deletedCount>0){
         console.log("this user was deleted");
        }
        else{
          console.log("i couldn't delete this user");
        }
    } catch (err) {
        console.log(err);
    }
}

const editUser= async(_firstName,_newData)=>{
    try {
        let res =await User.updateOne({firstName: _firstName }, { $set: { password: _newData } } );
        // console.log(res);
        if(res.modifiedCount>0){
            console.log("user was edited successfully");
           }
           else if(res.modifiedCount==0){
             console.log("i couldn't update this user");
           }
    } catch (err) {
        console.log(err);
    }
}

module.exports = { Register,Login,getAllUsers,deleteUser,editUser,getAll};





