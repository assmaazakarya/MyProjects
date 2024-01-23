const mongoose = require('mongoose');
const bolgSchema=mongoose.Schema({
    userId:{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    body:{
        type: String,
    }
    ,
    title:{
        type:String,
        required:true,
        minLength:5,
        maxLength:20,
    },
    photo:{
        type:String,
        required:false,
      
    },
    tags:{
        type:[String],
        required:false,
        maxLength:10,
        createdAt:Date
    },
    
})


const Blog = mongoose.model("Blog", bolgSchema);
Blog.createIndexes({ title: 1 });
module.exports = Blog;