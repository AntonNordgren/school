
const express = require('express');
const app = express();
const port = 3000;
//let counter = 0;

app.use((req, res, next) => {

    Object.defineProperty(req, 'counter', {
        req : 0
    });

    if(req.url === '/countMessages') {
        res.send(req.counter.toString());
    }
    else {
        req.counter++;
    }
    
    next();
});

app.get('/', (req, res) => {
    res.send(req.counter.toString());
})

app.get('*', (req, res) => {
    res.send(req.counter.toString());
})

app.listen(port, () => {
    console.log('Listens at', port);
});