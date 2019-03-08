const sleep = require('sleep')

function useProcessGlobalObject(){
    useProcessEvent = () => {
        process.on('exit', (code) => {
            console.log(code, 'Exit')
            sleep.sleep(5)
        })
        process.on('beforeExit', (code) => {
            
            console.log(code)
        })
    }
    // Printing to console
    process.stdout.write("Hello World!" + "\n");
    
    // Reading passed parameter
    process.argv.forEach(function(val, index, array) {
       console.log(index + ': ' + val);
    });
    
    // Getting executable path
    console.log(process.execPath);
    
    // Platform Information 
    console.log(process.version);
    console.log(process.memoryUsage());
}

useProcessGlobalObject()
