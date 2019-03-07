console.log("----------Async-------------")
myasync = async (a, b) => {
    setTimeout(() => {
        console.log(a)
    },  2000);
    setTimeout(() => {
        console.log(b)
    },  1000);
}

myasync(1, 2);

setTimeout(() => {
    console.log("----------Async-Await-------------")
    var a = b = 0
    let p = async (a,b) => {  
        try {
            // 2 setTimeout func run async
            await setTimeout(() => {
                a = 1;
                console.log("a = ", a)
            },  2000);
            await setTimeout(() => {
                b = 2
                console.log("b = ", b)
            },  1000);
            return Promise.resolve(a+b)
        } catch (error) {
            Promise.reject(error)
        }
    };

    // handler can't change promise, just value
    p(2,3).then((res) => {
        console.log(res);
    }).catch(err => console.log(err + ''));;
}, 4000)

