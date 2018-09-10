
const fs = require('fs');
const stdin = process.openStdin();

function getFileName(returnFileName) {
	console.log('Please enter a file name:');
	let callback = userInput => {
		let fileName = userInput.toString().trim();
		returnFileName(fileName);
		stdin.removeListener('data', callback);
	};
	stdin.addListener('data', callback);
}

function getData(returnData) {
	console.log('Please enter a string to save to the file:');
	let callback = userInput => {
		let data = userInput.toString().trim();
		returnData(data);
		stdin.removeListener('data', callback);
	};
	stdin.addListener('data', callback);
}

let handleFileName = fileName => {
	console.log('We have a file name: ' + fileName);
	getData(data => handleData(fileName, data));
};

let handleData = (fileName, data) => {
	console.log('We have data: ' + data);
	saveToFile(fileName, data);
};

function saveToFile(fileName, data) {
	fs.writeFile(fileName, data, () => {
		console.log(`Data saved to "${fileName}".`);
	});
}

function program() {
	getFileName(handleFileName);
}

program();