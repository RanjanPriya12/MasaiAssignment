const express = require("express");
const connect = require("./configs/db");
const userController = require("./controllers/user.controller")
const productController = require("./controllers/product.controller")
const registerController = require("./controllers/register.controller")
const loginController = require("./controllers/login.controller")
const {register,login, generateToken} = require("./controllers/auth.controller")
const app = express();
const passport = require("./configs/google-oauth")


app.use(express.json());


app.use("/users", userController);

app.use("/register", registerController,register);

app.use("/login", loginController,login);

app.use("/product", productController)

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));
 
app.get(
'/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login', session:false } ),

  function(req, res) {
    const token = generateToken(req.user)
    return res.status(200).send({user:req.user, token})
  }
);

app.listen(5000, async () => {
    try{
        await connect();
        console.log("listening on port 5000")
    }
    catch(err){
        console.log(err.message);
    }
});