const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectdb = require("./config/db");
const courseroutes = require("./routes/courseRoutes");
const userroutes = require("./routes/userRoutes");
const path = require("path");
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
connectdb();
//how to access static file
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/courses", courseroutes);
app.use("/api/auth", userroutes);
app.get('/', (req, res) => {
    res.send("api is working");
});

const port = process.env.PORT || 5600;

app.listen(port, () => {
    console.log("server is running port 5600");
})