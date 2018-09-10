
const http = require('http');
const fs = require('fs');
const server = http.createServer();
const port = 3000;

const { Transform } = require('stream');
const shoutingStream = new Transform({
	transform(chunk, encoding, callback) {
		this.push(chunk.toString().toUpperCase());
		callback();
	}
});

server.addListener('request', (req, res) => {

    if(req.url === '/') {
        let readStream = fs.createReadStream('./index.html');
        readStream.pipe(res);
    }
    else if(req.url === '/upper') {
        let readStream = fs.createReadStream('./index.html');
        readStream.pipe(shoutingStream).pipe(res);
    }
    else {
        let readStream = fs.createReadStream('./404.html');
        readStream.pipe(res);
    }
});

server.listen(port, () => {
    console.log('Listening on', port);
});