const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userapi = require('./apis/user');
const gameapi = require('./apis/game');
const submitapi = require('./apis/submit');
const leaderboard = require('./apis/leaderboard')
require('dotenv').config();
const cors = require("cors");
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");

const userSockets = {};

// Enable CORS specifically for Socket.IO
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173", // Allow requests from this origin
        methods: ["GET", "POST"],
        credentials: true
    }
});

//cros for express.
app.use(cors());

const port = 3000
server.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

// database connection.
mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("database Connected!!!"))
    .catch((error) => console.log("here is the error: " + error))


// This line tells Express to parse incoming request bodies with JSON data.When set to { extended: true }, it allows for parsing of nested objects within the JSON payload.
// This is especially useful for API endpoints that expect JSON data in the body of POST, PUT, or PATCH requests.
app.use(bodyParser.json({ extended: true }));
//This line configures the app to parse URL-encoded data (e.g., form submissions).
// The { extended: true } option allows parsing of more complex, nested data structures using the qs library.If set to false, it uses the default querystring library, which does not support nested structures.
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", (express.json()), userapi);
app.use("/api", (express.json()), gameapi(io));
app.use("/api", (express.json()), submitapi)
app.use("/api", (express.json()), leaderboard)

//connection event accepting request.
io.on("connection", (socket) => {
    console.log("Client connected:", socket.id);

    // Register userId with socketId
    socket.on('registerUser', (userId) => {
        userSockets[userId] = socket.id;
        console.log(`User ${userId} connected with socket ID ${socket.id}`);
    });

    socket.on("disconnect", () => {
        // Remove user on disconnect
        for (let userId in userSockets) {
            if (userSockets[userId] === socket.id) {
                delete userSockets[userId];
                console.log(`User ${userId} disconnected`);
                break;
            }
        }
    });

});