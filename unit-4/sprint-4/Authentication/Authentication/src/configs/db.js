const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect("mongodb+srv://priya:priya@cluster0.93rbb.mongodb.net/Authentication?retryWrites=true&w=majority");
};