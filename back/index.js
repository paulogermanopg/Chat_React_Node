const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {cors: {origin: 'http://localhost:5173'}});

const PORT = 3001;

io.on('connection', socket => {
    console.log('Usuário on', socket.id);
    socket.on('disconnect', reason => {
        console.log('Desconectado', socket.id);
    });
    socket.on('set_username', username => {
        socket.data.username = username;
    });
});

server.listen(PORT, () => console.log('rodou!'))