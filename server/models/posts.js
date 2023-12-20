const mongoose=require("mongoose")
const Schema=mongoose.Schema;

const postSchema = new Schema({
    task1: {type: String},
    // Area:{type:String},
     image:{type:String},
    // image:{
    //     data:Buffer,
    //     contentType:String
    // },
    

  
    

    user:{type:Schema.Types.ObjectId,ref:"signup"}
   

},{timestamps:true})
const post=mongoose.model("Post",postSchema)
module.exports=post;