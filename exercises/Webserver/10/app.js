
const http = require('http');
const https = require('https');
const server = http.createServer();
const port = 3000;
const url = 'https://forverkliga.se/JavaScript/api/simple.php?world';


function fetchData(callback) {
    https.get(url, (res) => {
    
        let data = '';
    
        res.on('data', chunk => {
            data += chunk;
        });
    
        res.on('end', () => {
            callback(data);
        });
    
    }).on('error', err => {
        console.log('Error', err.message);
    });
}

function handleFetchedData(data, req, res) {
    res.write(data.toString().trim());
}


server.addListener('request', (req, res) => {
    fetchData(data => handleFetchedData(data, req, res));
});


server.listen(port, () => {
    console.log('Server listens at', port);
});