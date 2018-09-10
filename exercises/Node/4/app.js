
const fs = require('fs');
const string = 'Added some text';

fs.appendFile('text.txt', string, (err) => {
    if(err) throw err;
    console.log('Added to text file!');
});