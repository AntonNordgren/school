
const fs = require('fs');
let string = 'This is some text';

fs.writeFile('text.txt', string, (err) => {
    if(err) throw err;
    console.log('Wrote to file');
});