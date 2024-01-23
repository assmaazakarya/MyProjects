const blogController= require('../controllers/blogcontroller')
const express = require('express');
const route = express.Router();
const JWT = require('jsonwebtoken')
const secret_key="my secret key"
route.get('/',(req,res)=>{
    res.send("i am in the user route")
})
//route creation done 
route.post('/addBlog',async(req,res)=>{
    console.log(req.body);
    let token = req.headers['Authorization']
    if(token !=undefined){
        return res.status(404).send('the token is missing');
    }
    let check=JWT.verify(token,secret_key)
    console.log(check);
    let {username,title,tags,photo,body} = req.body;
        let data = await blogController.createBlog(username,title,tags,photo,body)
        console.log(data);
        res.status(200).send('ok post route is done for adding new blog');
    
})
route.delete('/deleteBlog',async(req,res)=>{
   try {               
        let {title} = req.body;
        let data = await blogController.deleteBlog(title)
        
            if(data){
               console.log("this blog was deleted");
               res.status(200).send("this blog was deleted")
            }else{
                console.log("this blog was not deleted");
                res.status(404).send("this blog was not deleted")
            }
           }catch(err){
            console.log(err);
            res.status(500).send('something went wrong');
           }
     })
// route edit done
route.patch('/editBlog', async (req, res) => {
    try {
        let { title, body } = req.body;
        let data = await blogController.editBlog(title,body);
        console.log(data);
        if(data) {
            console.log("This blog was updated");
            res.status(200).send("This blog was updated");
        }else{
            console.log("the Blog was not udated");
            res.status(404).send("the Blog was not udated");
        }
    }catch(err) {
        console.log(err);
        res.status(500).send("في حاجة ضربت ");
    }
});



module.exports=route