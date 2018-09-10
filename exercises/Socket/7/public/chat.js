
let socket = io.connect('http://localhost:3000');

let sendButton = document.getElementById('send');
let message = document.getElementById('message');
let output = document.getElementById('output');

sendButton.addEventListener('click', () => {
    socket.emit('chat', {
        message : message.value
    });
    message.value = "";
});

socket.on('chat', (data) => {
    output.innerHTML = '';
    output.innerHTML += data.message;
});