
const express = require('express');
const app = express();
const port = 3000;
const getAnimal = require('./animals.js');

app.get('/', (req, res) => {
    res.send(JSON.stringify(getAnimal()));
});

app.get('/getAnimalNames', (req, res) => {

    const animalObj = getAnimal();
    let result = '';
    animalObj.map( x => result += x.animal + ' ');

    res.send(result);
});

app.get('/getNumberOfLegs', (req, res) => {
    
    const animalObj = getAnimal();
    let result;

    result = animalObj.find(x => x.animal === req.query.animal);
    res.send(result.nrOfLegs.toString());
});

app.listen(port, () => {
    console.log('Listening on', port);
});