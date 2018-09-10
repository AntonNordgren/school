
const { read } = require('./read.js')
const getTextAndWrite = require('./write.js')

read('./file.txt', text => {
	getTextAndWrite('./file2.txt', () => {
		console.log('Done!');
	})
})