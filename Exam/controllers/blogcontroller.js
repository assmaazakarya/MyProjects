const Blog = require('../models/Blogs')
const User = require('../models/Users')



//this function is working (the Photo part is missing)
const createBlog=async(_username,_title,_tags,_photo,_body)=>{
    try{
      let userid=await User.findOne({username:_username},{_id:1})
      let blogData=await Blog.create({userId:userid,title:_title,tags:_tags,photo:_photo,body:_body})
      if(blogData){
        console.log("the Blog was created successfully ,",blogData);
      }else{
        console.log("the Blog was'nt created");
      }
        }catch(err){
        console.log(err);
    }
}
// this function is working
const deleteBlog=async(_title)=>{
    try{
        console.log(_title);
        let result= await Blog.findOneAndDelete({title:_title});
        console.log(result);
        if(result){
            console.log("this BLog was deleted");
        }else{
            console.log("i couldn't delete this Blog");
        }
        return result
    }catch(err){
       console.log(err);
    }
}
// this function is working
const editBlog = async (_title, _newData) => {
    try {
        let res = await Blog.findOneAndUpdate({title:_title},{$set:{ body: _newData}},{new:true});
        console.log(res);
        if (res) {
            console.log("this Blog was updated");
        } else {
            console.log("this Blog was not updated");
        }
        return res;
    } catch (err) {
        console.error(err);
    }
};
module.exports={createBlog,deleteBlog,editBlog}