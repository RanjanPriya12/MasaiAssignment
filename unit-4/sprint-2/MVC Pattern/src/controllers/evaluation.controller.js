

const express=require('express');
const app=express();
const Evaluation=require('../models/evaluation.model.js');

app.get("/",async(req,res)=>{
    try {
        const evaluation=await Evaluation.find({}).lean().exec();
        return res.status(200).send(evaluation)
    } catch (error) {
        console.log(error);
    }
});

app.post("/",async(req,res)=>{
    try {
        const evaluation=await Evaluation.create(req.body)
        return res.status(200).send(evaluation)
    } catch (error) {
        console.log(error);
    }
});
app.get("/:id",async(req,res)=>{
    try {
        const evaluation=await Evaluation.findById(req.params.id)
        return res.status(200).send(evaluation)
    } catch (error) {
        console.log(error);
    }
});

module.exports=app;