const fs = require('fs');
const path = require('path');
fs.readFile('./sample.txt', (err, data) => {
    if (err) {
        console.log(`Got error: ${err}`);
        return;
    }
    console.log(`Data: ${data}`);

    const writeData = `Invaders: ${data}`
    fs.writeFile(path.join(__dirname, './output.txt'), writeData, (err) => {
        if (err) {
            console.log(`Got error: ${err}`);
            return;
        }
        console.log('Check your file pls.');
    });
});