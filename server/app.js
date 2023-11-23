if (process.env.NODE_ENV !== "production") require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const router = require("./routers");
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");
const { createServer } = require("http"); // 1
const { Server } = require("socket.io"); //2
const server = createServer(app); //3
const io = new Server(server, {
  //4
  cors: {
    origin: "*",
    // methods: ["GET", "POST", "DELETE"],
  },
});

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);
app.use(errorHandler);

io.on("connection", (socket) => {
  console.log("New connection", socket.id);

  socket.emit("hello", { message: `your id is: ${socket.id}` });

  io.emit("hello", {
    message: `New user join our server with id ${socket.id}`,
  });

  socket.on("sendMessage", (payload) => {
    console.log(payload);
    socket.broadcast.emit("new-message", payload);
  });

  socket.on("disconnect", () => {
    console.log(`Socket with id ${socket.id} disconnected`);
  });
});

server.listen(port, () => {
  console.log("Listening on PORT", port);
});

module.exports = app;
