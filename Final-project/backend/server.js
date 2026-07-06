const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectdb = require("./config/db");
const courseroutes = require("./routes/courseRoutes");
const userroutes = require("./routes/userRoutes");
const Groq = require("groq-sdk");
const path = require("path");
const http = require("http");
const { Server } = require("socket.io");

dotenv.config();
const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
});

let users = [];

io.on("connection", (socket) => {
    console.log("user connected:", socket.id);

    socket.on("addUser", (username) => {
        const exist = users.find(u => u.username === username);
        if (!exist) {
            users.push({
                username,
                socketId: socket.id
            });
        }
        io.emit("onlineUsers", users);
    });

    socket.on("sendMessage", ({ sender, receiver, text }) => {
        const user = users.find(u => u.username === receiver);
        if (user) {
            io.to(user.socketId).emit("receiveMessage", { sender, text });
        }
    });
    
    socket.on("disconnect", () => {
        users = users.filter(u => u.socketId !== socket.id);
        io.emit("onlineUsers", users);
        console.log("user disconnected");
    });

});
app.use(cors());
app.use(express.json());
connectdb();

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

app.post("/api/recommend", async (req, res) => {
    
    try {
        const { name, education, skills, interest, goal } = req.body;

        const prompt = `
        Student name: ${name}
        Education:${education}
        Skills:${skills}
        Interest:${interest}
        Goal:${goal}

        suggest best course for the students
        available courses:
        1. mern stack
        2.mean stack
        3. php
        4.aiml
        5.python
        6.devops

        Give simple answeer: 
        -Best course
        - why this course
        - learning path
        - carrer scope
        
        `;

        const chat = await groq.chat.completions.create({
            model: "llama-3.1-8b-instant",
            messages: [
                {
                    role: "system",
                    content: "helpfull course"
                },
                {
                    role: "user",
                    content: prompt,
                },
            ],
        });
        res.json({
            reply: chat.choices[0].message.content,
        });
    } catch (err) {
        console.error(err);
    }
})
//how to access static file
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/courses", courseroutes);
app.use("/api/auth", userroutes);
app.get('/', (req, res) => {
    res.send("api is working");
});

const port = process.env.PORT || 5600;

server.listen(port, () => {
    console.log("server is running port 5600");
})