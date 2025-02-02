import express from 'express';
const router = express.Router();
import  User from '../models/User.js'; /*user ka schema*/ 


import {body, validationResult} from 'express-validator';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt';
const jwtSecret = "Mynameischytdrysjyxjyrxyj&^";

router.post("/creatuser",
  [
    // username must be an email
    body('email', "Invalid email").isEmail(),
    body('name').isLength({ min: 5 }),
    body('password', "Password should have min 5 characters").isLength({ min: 5 })
  ],

 async(req,res) =>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password,salt);

    try{
        await User.create({
            name: req.body.name,
            location:req.body.location,
            email:req.body.email,
            password : secPassword,
            
        })
        res.json({success:true});

    }catch(error){
        console.log(error);
        res.json({success:false});
    }
});

router.post("/loginuser",
[
    // username must be an email
    body('email', "Invalid email").isEmail(),
    body('password', "Password should have min 5 characters").isLength({ min: 5 })
  ]
,async(req,res) =>{

    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    let email = req.body.email;
    try{
        let userData = await User.findOne({email});
        if(!userData){
            return res.status(400).json({ errors: "Try logging in with correct credentials" }); 
        }

        const pwdCompare = await bcrypt.compare(req.body.password, userData.password);

        if(!pwdCompare){
            return res.status(400).json({ errors: "Try logging in with correct credentials" });
        }

        const data = {
            user:{
                id:userData.id
            }
        }

        const authToken = jwt.sign(data,jwtSecret);
        return res.json({ success:true, authToken:authToken});

    }catch(error){
        console.log(error);
        res.json({success:false});
    }
});

export default router;