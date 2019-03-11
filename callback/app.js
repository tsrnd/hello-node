let x = function() {
    console.log('i am called from inside a function');
};

let y = function(callback, err, data) { 
    if(err) throw '1212';
    console.log('do something');
    callback();
}

y(x);