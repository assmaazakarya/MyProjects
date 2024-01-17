//1. first of tall any controller depends on it's model 
// that's why the first step is to require the right model
const Todo=require('../models/Todo')
const User = require('../models/User')

const createTodo=async(_username,_title,_tags)=>{
    try{
      let userid=await User.findOne({username:_username},{_id:1})
      let todoData=await Todo.create({userId:userid,title:_title,tags:_tags})
      if(todoData){
        console.log("the todo was created successfully ");
      }else{
        console.log("the todo was'nt created");
      }
        }catch(err){
        console.log(err);
    }
}
const getAll= async()=>{
    try {
        let todoData = await Todo.find({});
        if(todoData){
         console.log("all Todos",todoData);
        }else{
          console.log("i couldn't get the Todos");
        }
    } catch (err) {
        console.log(err);
    }
}

const getTodos=async(_firstName)=>{
    try {
        let userid=await User.findOne({firstName:_firstName},{_id:1})
        let todoData = await Todo.find({userId:userid});
        if(todoData){
         console.log("all Todos of this user",todoData);
        }else{
          console.log("i couldn't get the Todos of this user");
        }
    } catch (err) {
        console.log(err);
    }
}

const editTodo=async(_title,_newData)=>{
    try {
        let res =await Todo.findOneAndUpdate({title: _title }, { $set: { tags: _newData } } );
        console.log(res);
        if(res.modifiedCount){
         console.log("user was edited successfully");
        }
        else{
          console.log("i couldn't update this user");
        }
    } catch (err) {
        console.log(err);
    }
}

const deleteTodo=async(_title)=>{
    try {
      let res= await Todo.findOneAndDelete({title:_title});
      console.log(res);
       if(res.deletedCount){
        console.log("this user was deleted");
       }
       else{
         console.log("i couldn't delete this user");
       }
   } catch (err) {
       console.log(err);
   }
}
module.exports={createTodo,getAll,getTodos,editTodo,deleteTodo}
