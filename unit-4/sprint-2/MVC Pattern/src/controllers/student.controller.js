
const express=require('express');
const app=express();
const Student=require('../models/student.model.js');

app.get("/",async(req,res)=>{
    try {
        const student=await Student.find({}).lean().exec();
        return res.status(200).send(student)
    } catch (error) {
        console.log(error);
    }
});

app.post("/",async(req,res)=>{
    try {
        const student=await Student.create(req.body)
        return res.status(200).send(student)
    } catch (error) {
        console.log(error);
    }
});
app.get("/:id",async(req,res)=>{
    try {
        const student=await Student.findById(req.params.id)
        return res.status(200).send(student)
    } catch (error) {
        console.log(error);
    }
});

module.exports=app;