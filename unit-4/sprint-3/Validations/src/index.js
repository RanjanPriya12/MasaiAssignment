const express=require('express');
const connect=require('./configs/db');
const app=express();
const userController=require('./controllers/user.controller');

app.use(express.json());
app.use('/users',userController);



// const start = async () => {
//     try {
//         await connect();
//     } catch (error) {
//         console.log(error);
//     }
  
//     app.listen(4000, () => {
//       console.log("listening on port 4000");
//     });
//   };
// module.exports=start;

app.listen(5000, async ()=>{
    try {
        await connect();
        console.log('Listening on port 5000')
    } catch (error) {
        console.log(error);
    }
})