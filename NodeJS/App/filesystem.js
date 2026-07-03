const fs = require('fs').promises;
const path = require('path');

const fileops =  async() => {
    try {
        await searchdirectory();
        const data = await fs.readFile(path.join(__dirname,"files", "test.txt"), 'utf8'); 
        console.log('test.txt contents:');
        console.log(data);
        await fs.appendFile(path.join(__dirname,"files", "test1.txt"), '\nAppended line from fileops function.', 'utf8');
        await searchdirectory();   
    }   catch (err) {
        console.error('Error reading package.json:', err);
    }   
}

async function searchdirectory() {
        const directories = await fs.readdir(__dirname, { withFileTypes: true });
        console.log('Directories:');
        console.log(directories);
}

process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
});

fileops();