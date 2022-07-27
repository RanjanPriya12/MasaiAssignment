const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect("mongodb+srv://priya:priya@cluster0.93rbb.mongodb.net/authAndAuthorization?retryWrites=true&w=majority");
};