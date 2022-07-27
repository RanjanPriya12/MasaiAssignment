
const connectDB = require('./config/db');

const app=require('./index.js');


app.listen(5000, async(req,res)=>{
    try {
        await connectDB();
        console.log("Listening on port 5000");
    } catch (error) {
        return res.send(error);
    }
});