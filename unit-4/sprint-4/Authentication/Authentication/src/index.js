const express = require("express");
const connect = require("./configs/db");
const userController = require("./controllers/user.controller")
const postController = require("./controllers/post.controller")
const registerController = require("./controllers/register.controller")
const loginController = require("./controllers/login.controller")
const {register,login, generateToken} = require("./controllers/auth.controller")
const app = express();


app.use(express.json());


app.use("/users", userController);

app.use("/register", registerController,register);

app.use("/login", loginController,login);

app.use("/post", postController)

app.listen(5000, async () => {
    try{
        await connect();
        console.log("listening on port 5000");
    }
    catch(err){
        console.log(err.message);
    }
});