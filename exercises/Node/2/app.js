
let stdin = process.openStdin();

console.log('Enter string: ');
stdin.addListener('data', (data) => {
    console.log('Your input in uppercase: ' + data.toString().trim().toUpperCase());
    process.exit();
});