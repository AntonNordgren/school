
const express = require('express');
const socket = require('socket.io');

const app = express();
const port = 3000;

app.use(express.static('public'));

let server = app.listen(port, () => {
    console.log('Server at', port);
});

let io = socket(server);
io.on('connection', socket => {
    console.log('Made socket connection', socket.id);

    socket.on('chat', (data) => {
        io.socket.emit('chat', data);
    });

    socket.on('typing', (data) => {
        socket.broadcast.emit('typing', data);
    });

});