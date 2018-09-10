
const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

app.use((req, res, next) => {
    let data = 'url = ' + req.url + '\n' + 'method = ' + req.method;

    fs.writeFile('text.txt', data, () => {
        console.log('Wrote to file');
    })

    next();
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log('App listens at port', port);
});
