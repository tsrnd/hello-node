var a = b = 0
let p = new Promise(function(resolve, reject)  {  
    try {
        // when resolve called progtam will run code of p.then
        resolve(5)
        // 2 setTimeout func run async
        setTimeout(() => {
            a = 1;
            console.log("a = ", a)
        },  2000);
        setTimeout(() => {
            b = 2
            console.log("b = ", b)
        },  1000);
    } catch (error) {
        reject(error)
    }
});

// handler can't change promise, just value
p.then((res) => {
    console.log(5);
});
