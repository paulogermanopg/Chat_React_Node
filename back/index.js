const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: { origin: "http://localhost:5173" },
});

const PORT = 3001;

io.on("connection", (socket) => {
  socket.on("set_username", (username) => {
    socket.data.username = username;
    io.emit("user_entered", `${username} entrou no chat`);
  });

  socket.on("disconnect", (reason) => {
    if (socket.data.username) {
      io.emit("user_left", `${socket.data.username} saiu do chat`);
    }
  });

  socket.on("message", (text) => {
    io.emit("receive_message", {
      text,
      author_id: socket.id,
      author: socket.data.username,
    });
  });

  socket.on("typing", () => {
    socket.broadcast.emit("user_typing", {
      author_id: socket.id,
      author: socket.data.username,
    });
  });

  socket.on("stop_typing", () => {
    socket.broadcast.emit("user_stopped_typing", {
      author_id: socket.id,
    });
  });
});

server.listen(PORT, () => console.log("Chat Ativo"));
