const mongoose=require("mongoose")
const signUpSchema= mongoose.Schema({
   
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    confirmpassword:{type:String,required:true},
   

})
module.exports=mongoose.model("signup",signUpSchema)