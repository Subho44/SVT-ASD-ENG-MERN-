const express = require("express");
const router = express.Router();

const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//register

router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const hasdpswd = await bcrypt.hash(password, 10);
        const user = await User.create({ name, email, password: hasdpswd });
        res.json({ message: "user register successfully" });
    } catch (err) {
        console.log(err);
    }
});

//login
router.post("/login", async (req, res) => {
    const {  email, password } = req.body;
    try {
        
        const user = await User.findOne({ email });
        if (!user) return res.json("invalid login");

        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.json("invalid login");

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
        res.json({token});
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;
