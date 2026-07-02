const fs=require('fs');


const myArgs = process.argv.slice(2);

console.log('All custom arguments:', myArgs);
console.log('The first parameter is:', myArgs[0]);


fs.readFile(myArgs[0], 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading package.json:', err);
        return;
    }   
    console.log('package.json contents:');
    console.log(data);
});

process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    // Optionally, you can exit the process or perform cleanup here
    process.exit(1);
});