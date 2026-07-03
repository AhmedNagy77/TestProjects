const fs=require('fs');
const {format} = require('date-fns');
const myArgs = process.argv.slice(2);

console.log('All custom arguments:', myArgs);
console.log('The first parameter is:', myArgs[0]);
console.log(format(new Date(), 'yyyy-MM-dd HH:mm:ss'));

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
    // Optionally, you can exit tnode console package.jsonhe process or perform cleanup here
    process.exit(1);
});