var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

var sum = new Number();

console.log('Begin process');
readline.question('Enter a: ', (data) => {
    sum += Number(data)
    readline.question('Enter b: ', (data) => {
        sum += Number(data);
        readline.close();
        console.log('Total: ', sum);
        console.log('End process')
    });
});
