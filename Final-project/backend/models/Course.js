const mongoose = require("mongoose");

const courseschema = new mongoose.Schema({
    title: String,
    price: Number,
    image:String
},
    { timestamps: true }

);

module.exports = mongoose.model("course", courseschema);