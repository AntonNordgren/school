
const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
    if(req.url === '/info') {
        console.log('Url', req.url);
        next();
    }
});

app.use((req, res, next) => {
    console.log(req.method);
});

app.get('/', (req, res) => {
    res.send('Homepage');
});

app.get('/info/', (req, res) => {
    res.send('info');
});

app.listen(port, () => {
    console.log('App listens at', port);
});