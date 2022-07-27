const express=require('express');
 const app=express();
  app.use(express.json());
 
 const connectdb=require("./config/db.js");
 module.exports=app;

  
 const userController=require("./controllers/user.controller.js")
 const studentController=require("./controllers/student.controller.js")
 const submissionController=require("./controllers/submission.controller.js")
 const batchController=require("./controllers/batch.controller.js")
 const evaluationController=require("./controllers/evaluation.controller.js")
 
 app.use("/users",userController);
 app.use("/batchs",batchController);
 app.use("/students",studentController);
 app.use("/evaluations", evaluationController);
 app.use("/submisions",submissionController);










 