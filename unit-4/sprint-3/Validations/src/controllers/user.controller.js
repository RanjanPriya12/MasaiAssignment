const express=require('express');
const {body, validationResult} = require('express-validator');
const User= require('../models/user.model');
const router=express.Router();

router.post('/',
    body('first_name').not().isEmpty().withMessage('First name should not be empty').bail(),
    //  body('last_name').not().isEmpty().withMessage('Last name should not be empty'),
    //  body('email').not().isEmpty().withMessage('Email is required').isEmail().withMessage('Email should be valid')
    // .custom(async (value)=>{
    //     const user= await User.findOne({ email: value});

    //     if(user){
    //         throw new Error('Email is already taken');
    //     }
    //     return true;
    // }),

    // body('pincode').not().isEmpty().withMessage('Pincode is required').isNumeric().isLength({min: 6, max: 6})
    // .withMessage('Pincode should be valid number and of length 6 digits'),

    // body('age').not().isEmpty().withMessage('Age should not be empty and it must be between 1 and 100')
    // .custom((value)=>{
    //     if(value<1 || value>100){
    //         throw new Error('Invalid age is provided');
    //     }
    //     return true;
    // }),
    // body('gender').not().isEmpty().withMessage('gender is required')
    // .custom((value)=>{
    //     if((value !='Male') && (value != 'Female') && (value != 'Other')){
    //         throw new Error('Invalid gender is Provided');
    //     }
    //     return true;
    // }),
async (req,res)=>{
    try {
        const errors= validationResult(req);
        if( !errors.isEmpty()){
            return res.status(400).json({error : errors.array()})
        }
        const user= await User.create(req.body);
        return res.status(201).send(user);
    } catch (err) {
        return res.status(500).send({ message :err.message});
    }

// async (req,res)=>{
//     const user= await User.create(req.body);
//              return res.status(201).send(user);

});

module.exports=router;