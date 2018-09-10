
const express = require('express');
const socket = require('socket.io');

const app = express();
const port = 3000;
let server = app.listen(port, () => {
    console.log('Listening on', port);
});

app.use(express.static('public'));

let io = socket(server);
io.on('connection', socket => {

    console.log('Socket connection', socket.id);

    socket.on('chat', (data) => {
        io.sockets.emit('chat', data);
    });

});