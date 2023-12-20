const express=require("express");
const router=express.Router();
const mongoose=require("mongoose")
const bcrypt = require("bcrypt")
// const jwt=require("jsonwebtoken")
// const secret='RESTAPI'
const signUp=require("../models/signup")
mongoose.connect("mongodb://localhost/signUp")


router.post("/add",async (req, res) => {
    try {
        const { email,password,confirmpassword } = req.body;
        bcrypt.hash(password, 10, async function (err, hash) {
            if (err) {
                res.status(500).json({
                    status: "failed",
                    message: err.message

                })
            }
            const data = await signUp.create({
               
                email,
                password: hash,
                confirmpassword
            });
            res.json({
                status: "success",
                message: "registration successful",
                data

            })
        })
    } catch (e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }



})

module.exports=router


// router.post("/add",async(req,res)=>{
//     try{
//        const data=await signUp.create(req.body)
//        res.status(200).send({
//            status:"sucess",
//            result:data
//        })
 
//    }catch(e){
//        res.status(500).send({
//            status:"failed",
//            message: e.message
         
//        })  
//    }
 
   
//  })