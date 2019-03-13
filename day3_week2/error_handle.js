//---------------------Try catch------------------------
function myApiFunc() {
    try {
        require('fs').readFileSync("dedes"); // if err, it will throw err automatic
        require('vm').runInThisContext('binary ! isNotOk'); // throw SyntaxError cause runInThisContext param code not valid 
    } catch (ex) {
        if (ex instanceof SyntaxError) {
            console.log("SyntaxError, Be  carefull! please")
        } else {
            throw ex
        }
    } finally {
        console.log("done")
    }
}

try {
    myApiFunc()
} catch (ex) {
    console.log(ex.message);
}
//-------------------Custom Error---------------------

class CustomError extends Error {
    constructor(mess = 'default', ...params) {
        super(...params);
    
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, CustomError);
        }
    
        this.mess = mess;
        this.date = new Date();
    }
  }
  
try {
    throw new CustomError('my mess', 'CusMessage')
} catch(e){
    console.log(e.foo); //baz
    console.log(e.message); //bazMessage
    console.log(e.stack); //stacktrace
}
