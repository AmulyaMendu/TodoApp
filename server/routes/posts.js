const express = require("express");
const Post = require("../models/posts");
const multer = require("multer");
const router = express.Router()

// const bodyparser = require("body-parser");


// const { body, validationResult } = require('express-validator')
// const bcrypt = require("bcrypt")
// const jwt = require("jsonwebtoken")
// const secret = 'RESTAPI'
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
    //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname)
    }
  })

const upload=multer({storage:storage})

router.get("/", async (req, res) => {
    try{
        const posts = await Post.find({ user: req.user });
        res.json({
            status: "success",
            posts:posts
        })
    }catch(e){
        res.status(500).send({
            status:"failed",
            message: e.message
          
        })  
    }
  
})
// 
router.post("/",upload.single("image"), async (req, res) => {
   console.log(req.body)

            const posts = await Post.create({
                task1: req.body.task1,
              
                // Area: req.body.Area,
                // image:req.file.filename,
                user: req.user
            });
            res.json({
                status: "success",
                 postsTask:posts.task1,
                
                posts:posts._id
                
                // image:posts.image
            })
    
   
})
router.put("/:id", async (req, res) => {
    try {
        const posts = await Post.updateOne({ _id: req.params.id }, { body: req.body.body }, { runValidators: true });
        res.json({
            status: "success",
            posts
        })

    } catch (e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }

})
router.delete("/:id", async (req, res) => {
    try {
        const posts = await Post.deleteOne({ _id: req.params.id });
        res.json({
            status: "success",
          posts
        })

    } catch (e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }

})
// router.patch("/:id", async (req, res) => {
//     try {
//         const posts = await Post.updateOne({ _id: req.params.id }, { image: req.body.image }, { runValidators: true });
//         res.json({
//             status: "success",
//             posts
//         })

//     } catch (e) {
//         res.status(500).json({
//             status: "failed",
//             message: e.message
//         })
//     }

// })

module.exports = router;