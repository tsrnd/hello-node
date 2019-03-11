var coffeeMachine = {
    makeCoffee: function(onFinish) {
        console.log('Making coffee ');
        onFinish();
    }
};

var beep = function() {
    console.log('tip tip');
};

coffeeMachine.makeCoffee(beep);

coffeeMachine.makeCoffee(function() {
    console.log('pit pit');
});

let add = (a, b, cb) => {
    setTimeout(() => {
       let err, result;
       if (typeof a != 'number' || typeof b != 'number') {
           err = 'Param must number';
           return cb(err, result);
       } 
       result = a + b;
       cb(err, result);
    }, 2000);
}

add(4, 'b', (err, result) => {
    if(err) return console.log('Loi: ' + err);
    console.log('Result: ' + result);
});

setTimeout(() => {
    console.log('1111')
}, 1000); 

console.log('runing');