const mongoose = require("mongoose");

const connectdb = async () => {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("mongodb connected");
};

module.exports = connectdb;