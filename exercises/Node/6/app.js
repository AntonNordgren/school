
const fs = require('fs');
const stdin = process.openStdin();

function getFileName(returnData) {

    console.log('Enter filename: ');

    let callback = function(userInput) {
        let data = userInput.toString().trim();
        stdin.removeListener('data', callback);
        returnData(data);
    }
    stdin.addListener('data', callback);
}

function handleFilename(fileName) {

    let result = '';
    let readStream = fs.createReadStream(fileName);

    readStream.addListener('data', data => {
        result += data;
    });

    readStream.addListener('end', () => {
        console.log(result);
        process.exit();
    });
}

function program() {
    getFileName(handleFilename);
}

program();