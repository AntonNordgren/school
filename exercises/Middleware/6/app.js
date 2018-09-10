
const express = require('express');
const app = express();
const port = 3000;

app.use((error, req, res, next) => {
    console.error(error.stack);
    res.status(500).send('Internal server error');
});

app.get('/', (req, res) => {
    res.send('Homepage');
});

app.listen(port, () => {
    console.log('Listening on port', 3000);
});